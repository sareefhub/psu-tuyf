// ประเภทข้อมูลร่วมของหน้าโครงการพัฒนาผู้เรียน (Student Improvement Data Types)

/**
 * โครงสร้างข้อมูลประกาศ/เอกสารแนบสำหรับโครงการพัฒนาผู้เรียน
 */
export interface AnnouncementItem {
  // หัวข้อประกาศ เช่น "รายละเอียดโครงการค่าย Pre-Olympics Math 2023"
  readonly title: string;
  // วันที่เผยแพร่ประกาศ เช่น "15 มีนาคม 2566"
  readonly date: string;
  // ขนาดของไฟล์ เช่น "242 KB"
  readonly size: string;
  // ลิงก์ที่อยู่ไฟล์เอกสาร PDF
  readonly fileUrl: string;
}

/**
 * โครงสร้างข้อมูลการตั้งค่าสำหรับค่ายคณิตศาสตร์เข้ม (Excellence Math Camp)
 */
export interface CampConfig {
  // ปีการศึกษาของค่าย เช่น "2023"
  readonly year: string;
  // คีย์สำหรับระบบ i18n
  readonly translationKey: string;
  // ชื่อโฟลเดอร์สำหรับเก็บภาพของปีนั้นๆ
  readonly imageFolder: string;
  // รายการเอกสารประกาศต่างๆ ของค่าย
  readonly announcements: readonly AnnouncementItem[];
  // รูปภาพผลการทดสอบ Post-Test ของนักเรียน
  readonly postTestImages: readonly string[];
  // รูปภาพแกลเลอรีเพิ่มเติม (ถ้ามี)
  readonly galleryImages?: readonly string[];
}

/**
 * โครงสร้างข้อมูลการตั้งค่าสำหรับโครงการคณิตศาสตร์สัญจร (Math Sanchon)
 */
export interface SanchonConfig {
  // ปีการศึกษาของโครงการ เช่น "2023"
  readonly year: string;
  // คีย์สำหรับระบบ i18n
  readonly translationKey: string;
  // ชื่อโฟลเดอร์สำหรับเก็บภาพของปีนั้นๆ
  readonly imageFolder: string;
  // รายการเอกสารประกาศต่างๆ
  readonly announcements: readonly AnnouncementItem[];
  // รูปภาพแกลเลอรีเพิ่มเติม (ถ้ามี)
  readonly galleryImages?: readonly string[];
}
