'use server';

import { getImagesFromFolder, CloudinaryFetchResult } from './cloudinary';

/**
 * Server Action สำหรับการดึงรายการรูปภาพทั้งหมดในโฟลเดอร์ไปใช้งานใน Client Components
 * 
 * @param folder ชื่อโฟลเดอร์ใน Cloudinary เช่น 'psu-tuyf-uploads'
 * @param maxResults จำนวนรูปภาพสูงสุดที่ต้องการดึง (ค่าเริ่มต้นคือ 20 รูป)
 */
export async function getImagesAction(
  folder: string = 'psu-tuyf-uploads',
  maxResults: number = 20
): Promise<CloudinaryFetchResult> {
  try {
    return await getImagesFromFolder(folder, maxResults);
  } catch (error) {
    console.error('❌ [Server Action Error] ไม่สามารถดึงรูปภาพได้:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'เกิดข้อผิดพลาดในการดึงข้อมูลจากเซิร์ฟเวอร์',
    };
  }
}
