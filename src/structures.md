# โครงสร้างโฟลเดอร์ในโปรเจกต์ (PSU-TUYF Project Structure)

โครงสร้างโฟลเดอร์หลักใน `src/` ที่ใช้งานอยู่จริงในปัจจุบัน สำหรับจัดเก็บโค้ดส่วนต่าง ๆ ของเว็บไซต์:

```markdown
src/
├── app/                  # โครงสร้างหน้าเพจและระบบ Routing ทั้งหมดของ Next.js (App Router)
│   ├── api/              # ส่วนจัดการ API endpoints ต่างๆ หลังบ้าน
│   ├── (pages)/          # กลุ่มของหน้าเพจเนื้อหาหลักของเว็บไซต์ (Route Group ปรากฏเป็น URL ตรงๆ โดยไม่ต้องระบุชื่อโฟลเดอร์นี้)
│   │   ├── about/        # หน้าเกี่ยวกับเรา (About Page)
│   │   ├── algebra-enrichment/ # หน้าโครงการพัฒนาการเรียนการสอนพีชคณิต
│   │   ├── contact/      # หน้าติดต่อเรา (Contact Page)
│   │   ├── home/         # หน้าแรก (Home Page)
│   │   │   ├── components/ # Component ที่ใช้งานเฉพาะหน้าแรกเท่านั้น (Colocation)
│   │   │   └── page.tsx  # ไฟล์ Render หน้าแรก
│   │   ├── mgss/         # หน้าหลักสูตรบัณฑิตศึกษาคณิตศาสตร์และวิทยาศาสตร์
│   │   └── mscd/         # หน้าส่วนโครงการพัฒนาชุมชนอย่างยั่งยืน
│   │
│   ├── fonts.css         # ไฟล์นำเข้าฟอนต์ของเว็บไซต์
│   ├── globals.css       # สไตล์ชีทส่วนกลางของระบบ (Global CSS)
│   ├── layout.tsx        # Root Layout ตัวหลักสุดของเว็บไซต์ (กำหนดแท็ก HTML/Body)
│   ├── manifest.ts       # ไฟล์ตั้งค่า Web App Manifest (SEO/PWA)
│   ├── page.tsx          # ไฟล์ Root Page แรกสุด (ทำหน้าที่ดึง HomePage จาก (pages)/home มาแสดง)
│   ├── robots.ts         # ไฟล์ตั้งค่าแนวทางให้บราวเซอร์และ Search Engine (SEO Robots)
│   └── sitemap.ts        # ไฟล์สร้างแผนผังเว็บไซต์แบบ Dynamic (SEO Sitemap)
│
├── components/           # ส่วนประกอบ UI ที่นำกลับมาใช้ใหม่ข้ามหน้าอื่น ๆ ได้ (Shared Components)
│   ├── ui/               # UI Elements พื้นฐานระดับล่าง เช่น ปุ่ม (button.tsx)
│   ├── project-card.tsx  # การ์ดแสดงผลโครงการ/หลักสูตร (การ์ดแบบที่ 1)
│   ├── language-context.tsx # ระบบจัดการภาษาและสลับภาษาของเว็บไซต์
│   ├── scroll-to-top.tsx    # ปุ่มเลื่อนหน้าจอกลับขึ้นด้านบนแบบรวดเร็ว
│   ├── site-header.tsx      # ส่วนหัวเมนูนำทาง (Navigation Bar)
│   └── site-footer.tsx      # ส่วนท้ายแสดงข้อมูลการติดต่อและลิขสิทธิ์
│
├── layout/               # โครงร่างสำหรับครอบหน้าเว็บเพื่อลดความซ้ำซ้อนของโค้ด (Layout Wrapper)
│   └── main-layout.tsx   # เลย์เอาต์หลักที่ครอบคลุม SiteHeader, SiteFooter, และ ScrollToTop
│
└── lib/                  # ไฟล์การตั้งค่าระบบ และฟังก์ชันช่วยเหลือ (Utilities / Configs)
    ├── i18n.ts           # การจัดการข้อมูลสองภาษาหลัก
    └── utils.ts          # ฟังก์ชันช่วยเหลือทั่วไป (เช่น ฟังก์ชันรวม Class CSS)
```

---

## 📌 สรุปหลักการจัดวางง่าย ๆ
1. **ใช้เฉพาะหน้า:** ให้วางไว้ในโฟลเดอร์ `components` ของหน้าที่ใช้เท่านั้น เช่น `app/(pages)/home/components/`
2. **ใช้ร่วมกันหลายหน้า:** ให้ย้ายมาไว้ใน `components/` หรือ `components/ui/` ส่วนกลาง
3. **การเข้าหน้าเพจหลัก:** การกำหนดเส้นทาง URL หลักของหน้าเพจ (เช่น `/about`, `/contact`) จะถูกนำทางโดยตรงผ่านโครงสร้าง Route Group `src/app/(pages)/...` ของ Next.js ซึ่ง URL จะแสดงเป็นระเบียบตามธรรมชาติ โดยไม่จำเป็นต้องใช้เงื่อนไข Rewrite ในไฟล์ตั้งค่า `next.config.mjs`
4. **ใช้ Path Alias นำเข้าไฟล์:** ใช้ `@/` ในการเรียกใช้งานเพื่อให้อ่านง่ายและเป็นระบบ Clean Code เช่น:
   ```typescript
   import { MainLayout } from '@/layout/main-layout';
   import { Button } from '@/components/ui/button';
   import { cn } from '@/lib/utils';
   ```
