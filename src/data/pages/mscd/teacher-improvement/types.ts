// ประเภทข้อมูลร่วมของหน้าโครงการพัฒนาคุณครู (Teacher Improvement Data Types)

/**
 * โครงสร้างข้อมูลประกาศ/เอกสารแนบสำหรับโครงการพัฒนาคุณครู
 */
export interface AnnouncementItem {
  // หัวข้อประกาศ เช่น "รายละเอียดโครงการอบรมครูคณิตศาสตร์ 2565"
  readonly title: string;
  // วันที่เผยแพร่ประกาศ เช่น "ตุลาคม 2565"
  readonly date: string;
  // ขนาดของไฟล์ เช่น "245 KB"
  readonly size: string;
  // ลิงก์ที่อยู่ไฟล์เอกสาร PDF
  readonly fileUrl: string;
}

/**
 * โครงสร้างข้อมูลการตั้งค่าสำหรับโครงการอบรมครูคณิตศาสตร์ (Teacher Training)
 */
export interface TeacherTrainingConfig {
  // ปีการศึกษาของโครงการ เช่น "2022"
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
