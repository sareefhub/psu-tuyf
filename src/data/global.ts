// ข้อมูลตั้งค่าทั่วไปส่วนกลางสำหรับเว็บไซต์ (Global Configuration Data)
// เก็บค่าคงที่ (Constants) ที่ใช้ร่วมกันหลายจุดในระบบเพื่อความเป็นระเบียบเรียบร้อย

export interface SiteConfig {
  readonly siteName: string;
  readonly siteDescription: string;
  readonly contactEmail: string;
  readonly contactPhone: string;
  readonly address: string;
}

export const siteConfig: SiteConfig = {
  siteName: "PSU-TUYF (Mathematics for Sustainable Community Development)",
  siteDescription: "โครงการพัฒนาการศึกษาและยกระดับทักษะทางคณิตศาสตร์ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยสงขลานครินทร์",
  contactEmail: "math.psu.tuyf@gmail.com",
  contactPhone: "073-313928-50 ต่อ 2724",
  address: "สาขาวิชาคณิตศาสตร์และวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตปัตตานี ถ.เจริญประดิษฐ์ ต.รูสะมิแล อ.เมือง จ.ปัตตานี 94000",
}
