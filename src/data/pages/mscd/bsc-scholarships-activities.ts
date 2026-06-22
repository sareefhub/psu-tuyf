// ข้อมูลรายละเอียดและกิจกรรมของนักเรียนทุนแต่ละคน (B.Sc. Scholarships Students Activities Data)
// เก็บข้อมูลกิจกรรมย่อยแยกเป็นภาษาไทยและภาษาอังกฤษเพื่อรองรับระบบ i18n

export interface StudentActivity {
  readonly title: { readonly th: string; readonly en: string };
  readonly date: { readonly th: string; readonly en: string };
  readonly description: { readonly th: string; readonly en: string };
  readonly images: readonly string[];
}

export interface StudentProfile {
  readonly slug: string;
  readonly name: { readonly th: string; readonly en: string };
  readonly image: string;
  readonly role: { readonly th: string; readonly en: string };
  readonly campus: { readonly th: string; readonly en: string };
  readonly activities: readonly StudentActivity[];
}

export const bscStudentsActivitiesData: Record<string, StudentProfile> = {
  "sophoun-youk": {
    slug: "sophoun-youk",
    name: {
      th: "Sophoun Youk (โสภณ ยุก)",
      en: "Sophoun Youk",
    },
    image: "/images/mscd/bsc-scholarships/student-1.png",
    role: {
      th: "นักเรียนทุนป.ตรี (กัมพูชา)",
      en: "Undergraduate Scholarship Student (Cambodian)",
    },
    campus: {
      th: "วิทยาเขตปัตตานี",
      en: "Pattani Campus",
    },
    activities: [
      {
        title: {
          th: "เข้าร่วมกิจกรรมปลูกต้นไม้ (Plant a Tree)",
          en: "Participated in Plant a Tree",
        },
        date: {
          th: "28 มกราคม 2567",
          en: "28-January-2024",
        },
        description: {
          th: "ช่วยปลูกต้นกล้าในหมู่บ้านบาโงยซามีแล ร่วมกับคุณครูและเพื่อนร่วมชั้นเรียน",
          en: "To help plant seedlings in the village of Yalo Sambilas with the participation of teachers and classmates.",
        },
        images: [], // ยังไม่มีรูปภาพในระบบ
      },
      {
        title: {
          th: "เข้าร่วมกิจกรรมของมูลนิธิเพื่อการศึกษาและพัฒนาทรัพยากรมนุษย์",
          en: "Participated in Foundation For Education And HUMAN Resources Department",
        },
        date: {
          th: "3 สิงหาคม 2567",
          en: "03-August-2024",
        },
        description: {
          th: "ลงพื้นที่ช่วยเหลือระดมทุนเพื่อสร้างบ้านเด็กกำพร้า และช่วยทำความสะอาด จัดสวนดอกไม้ที่มูลนิธิเพื่อการศึกษาและพัฒนาทรัพยากรมนุษย์ (115 33 ถนนสิโรรส ซอย 2 ตำบลสะเตง อำเภอเมืองยะลา จังหวัดยะลา 95000)",
          en: "Went to the area to help raise funds to build an orphanage and helped clean and arrange the flower garden at the Foundation for Education and Resource Development at (115 33 Sirorox Soi 2 Rd, Sateng, Mueang Yala District, Yala 95000)",
        },
        images: [], // ยังไม่มีรูปภาพในระบบ
      },
    ],
  },
}
