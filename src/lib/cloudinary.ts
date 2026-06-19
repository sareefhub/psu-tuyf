import { v2 as cloudinary } from 'cloudinary';

// โครงสร้างข้อมูลรูปภาพที่ดึงมาจาก Cloudinary
export interface CloudinaryResource {
  publicId: string;
  secureUrl: string;
  format: string;
  width: number;
  height: number;
  createdAt: string;
}

// โครงสร้างผลลัพธ์การดึงรายการไฟล์รูปภาพ
export interface CloudinaryFetchResult {
  success: boolean;
  resources?: CloudinaryResource[];
  error?: string;
}

// ตั้งค่าการใช้งาน Cloudinary SDK (จะดึงค่าอัตโนมัติจาก CLOUDINARY_URL ใน .env)
cloudinary.config({
  secure: true, // บังคับใช้งาน HTTPS เพื่อความปลอดภัย
});

/**
 * สร้าง URL ของรูปภาพที่ผ่านการบีบอัดและปรับขนาดตามต้องการ เพื่อประสิทธิภาพในการแสดงผลที่ดีที่สุด
 * 
 * @param publicId ไอดีสาธารณะของไฟล์รูปภาพใน Cloudinary
 * @param width ความกว้างที่ต้องการปรับ (พิกเซล, ตัวเลือกเสริม)
 * @param height ความสูงที่ต้องการปรับ (พิกเซล, ตัวเลือกเสริม)
 */
export function getOptimizedImageUrl(
  publicId: string,
  width?: number,
  height?: number
): string {
  if (!publicId) return '';
  
  return cloudinary.url(publicId, {
    width: width,
    height: height,
    crop: width && height ? 'fill' : undefined,
    quality: 'auto',      // บีบอัดไฟล์ภาพและรักษาคุณภาพให้เหมาะสมอัตโนมัติ
    fetch_format: 'auto', // แปลงฟอร์แมตตามเว็บบราวเซอร์อัตโนมัติ เช่น WebP เพื่อให้โหลดเร็วขึ้น
  });
}

/**
 * ดึงรายการรูปภาพทั้งหมดจากโฟลเดอร์ที่ระบุใน Cloudinary (ทำงานเฉพาะฝั่ง Server)
 * 
 * @param folder ชื่อโฟลเดอร์ใน Cloudinary ที่เก็บรูป เช่น 'psu-tuyf-uploads'
 * @param maxResults จำนวนรูปภาพสูงสุดที่จะแสดง (หากไม่ได้ระบุ หรือระบุค่าน้อยกว่าเท่ากับ 0 จะดึงรูปภาพทั้งหมดที่มีในโฟลเดอร์)
 */
export async function getImagesFromFolder(
  folder: string = 'psu-tuyf-uploads',
  maxResults?: number
): Promise<CloudinaryFetchResult> {
  try {
    let allResources: CloudinaryResource[] = [];
    let nextCursor: string | undefined = undefined;
    let hasMore = true;
    const limitPerRequest = 500; // Cloudinary Search API จำกัดสูงสุด 500 รูปต่อคำขอ

    while (hasMore) {
      let query = cloudinary.search
        .expression(`folder:${folder}`)
        .sort_by('created_at', 'desc'); // เรียงลำดับรูปภาพที่อัปโหลดล่าสุดขึ้นก่อน

      // คำนวณขีดจำกัดสำหรับการร้องขอแต่ละครั้ง
      if (maxResults && maxResults > 0) {
        const remaining = maxResults - allResources.length;
        if (remaining <= 0) break;
        query = query.max_results(Math.min(remaining, limitPerRequest));
      } else {
        query = query.max_results(limitPerRequest);
      }

      // หากมี nextCursor ให้ส่งค่าเพื่อขอข้อมูลในหน้าถัดไป
      if (nextCursor) {
        query = query.next_cursor(nextCursor);
      }

      const result = await query.execute();

      const resources: CloudinaryResource[] = result.resources.map((resource: any) => ({
        publicId: resource.public_id,
        secureUrl: resource.secure_url,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        createdAt: resource.created_at,
      }));

      allResources = allResources.concat(resources);
      nextCursor = result.next_cursor;

      // ตรวจสอบเงื่อนไขการวนลูปดึงข้อมูลต่อ
      if (!nextCursor) {
        hasMore = false;
      } else if (maxResults && maxResults > 0 && allResources.length >= maxResults) {
        hasMore = false;
      }
    }

    return {
      success: true,
      resources: allResources,
    };
  } catch (error) {
    console.error('❌ [Cloudinary Error] เกิดข้อผิดพลาดในการดึงข้อมูลรูปภาพ:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ',
    };
  }
}
