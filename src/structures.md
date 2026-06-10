# โครงสร้างโฟลเดอร์ในโปรเจกต์ (PSU-TUYF Project Structure)

โครงสร้างโฟลเดอร์หลักใน `src/` ที่ใช้งานอยู่จริงในปัจจุบัน สำหรับจัดเก็บโค้ดส่วนต่าง ๆ ของเว็บไซต์:

```markdown
src/
├── app/                  # หน้าเพจหลักและ Routing ทั้งหมดของเว็บไซต์
│   ├── home/             # หน้าแรก (Home Page)
│   │   ├── components/   # Component ที่ใช้เฉพาะหน้า Home เท่านั้น (Colocation)
│   │   └── page.tsx      # ไฟล์หลักของหน้าแรก
│   ├── mscd/             # ส่วนโครงการพัฒนาชุมชนอย่างยั่งยืน
│   │   ├── components/   # Component ที่ใช้ร่วมกันในส่วนของ mscd
│   │   └── page.tsx
│   ├── layout.tsx        # Root Layout หลักของระบบ (ครอบทุกหน้าในระดับโครงสร้าง)
│   └── globals.css       # สไตล์รวมของระบบ (CSS Global)
│
├── components/           # ส่วนประกอบ UI ที่นำกลับมาใช้ใหม่ข้ามหน้าอื่น ๆ ได้ (Shared Components)
│   ├── ui/               # UI Elements พื้นฐานระดับล่าง เช่น ปุ่ม (button.tsx)
│   ├── project-card.tsx  # การ์ดแสดงผลโครงการ/หลักสูตร (การ์ดแบบที่ 1)
│   ├── language-context.tsx # ระบบสลับภาษาของเว็บไซต์
│   ├── scroll-to-top.tsx    # ปุ่มด่วนสำหรับเลื่อนหน้าจอกลับขึ้นด้านบน
│   ├── site-header.tsx      # ส่วนหัวแสดงเมนูนำทางของเว็บไซต์
│   └── site-footer.tsx      # ส่วนท้ายแสดงข้อมูลการติดต่อและลิขสิทธิ์
│
├── layout/               # โครงร่างสำหรับครอบหน้าเว็บเพื่อลดความซ้ำซ้อนของโค้ด (Layout Wrapper)
│   └── main-layout.tsx   # เลย์เอาต์กลางที่รวบรวม SiteHeader, SiteFooter, และ ScrollToTop
│
└── lib/                  # การตั้งค่าระบบ และฟังก์ชันตัวช่วย (Non-UI Configs)
    ├── i18n.ts           # คอนฟิกจัดการระบบแปลสองภาษา
    └── utils.ts          # ฟังก์ชันช่วยเหลือทั่วไป (เช่น ฟังก์ชันรวม Class CSS)
```

---

## 📌 สรุปหลักการจัดวางง่าย ๆ
1. **ใช้เฉพาะหน้า:** ให้วางไว้ในโฟลเดอร์ `components` ของหน้าที่ใช้เท่านั้น (เช่น `app/home/components/`)
2. **ใช้ร่วมกันหลายหน้า:** ให้ย้ายมาไว้ใน `components/` หรือ `components/ui/`
3. **ใช้ครอบเพจเพื่อลดโค้ดซ้ำ:** ให้เรียกใช้งาน `MainLayout` จากโฟลเดอร์ `layout/` ครอบเนื้อหาของเพจนั้น ๆ
4. **ใช้ Path Alias นำเข้าไฟล์:** ใช้ `@/` ในการดึงข้อมูลเพื่อให้อ่านง่าย เช่น:
   ```typescript
   import { MainLayout } from '@/layout/main-layout';
   import { Button } from '@/components/ui/button';
   import { cn } from '@/lib/utils';
   ```
