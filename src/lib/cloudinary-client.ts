/**
 * ฟังก์ชันสำหรับประมวลผลและสร้าง URL รูปภาพบีบอัดของ Cloudinary ที่ปลอดภัยและใช้งานได้บน Client (Browser)
 * โดยหลีกเลี่ยงการนำเข้า Node.js 'cloudinary' SDK เพื่อป้องกันข้อผิดพลาด 'fs' module not found
 * 
 * @param publicId ไอดีสาธารณะของไฟล์รูปภาพ หรือ URL เต็มของรูปภาพ
 * @param width ความกว้างที่ต้องการปรับ (พิกเซล, ตัวเลือกเสริม)
 * @param height ความสูงที่ต้องการปรับ (พิกเซล, ตัวเลือกเสริม)
 */
export function getOptimizedImageUrl(
  publicId: string,
  width?: number,
  height?: number
): string {
  if (!publicId) return "";

  // หากเป็น URL เต็มของ Cloudinary หรือ HTTP อยู่แล้ว
  if (publicId.startsWith("http://") || publicId.startsWith("https://")) {
    if (publicId.includes("res.cloudinary.com")) {
      const parts = publicId.split("/upload/");
      if (parts.length === 2) {
        const transformations = width && height 
          ? `w_${width},h_${height},c_fill,f_auto,q_auto` 
          : "f_auto,q_auto";
        return `${parts[0]}/upload/${transformations}/${parts[1]}`;
      }
    }
    return publicId;
  }

  // หากเป็น publicId ปกติ
  const cloudName = "dfawobcpi"; // ชื่อคลาวด์จากระบบ
  const transformations = width && height 
    ? `w_${width},h_${height},c_fill,f_auto,q_auto` 
    : "f_auto,q_auto";

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`;
}
