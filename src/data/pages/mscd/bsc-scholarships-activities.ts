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
      th: "Sophoun Youk",
      en: "Sophoun Youk",
    },
    image: "/images/mscd/bsc-scholarships/sophoun-youk/profile.png",
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
          en: "To help plant seedlings in the village of Talo Samilae with the participation of teachers and classmates.",
        },
        images: [
          "/images/mscd/bsc-scholarships/sophoun-youk/activity-1-1.jpg",
          "/images/mscd/bsc-scholarships/sophoun-youk/activity-1-2.jpg",
        ],
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
          en: "Went to the area to help raise funds to build an orphanage and helped clean and arrange the flower garden at the Foundation for Education and Resource Development at (115 33 Siroros Sai 2 Rd, Sateng, Mueang Yala District, Yala 95000)",
        },
        images: [
          "/images/mscd/bsc-scholarships/sophoun-youk/activity-2-1.jpg",
          "/images/mscd/bsc-scholarships/sophoun-youk/activity-2-2.jpg",
        ],
      },
      {
        title: {
          th: "กิจกรรมวันเด็ก (Children's Day Activity)",
          en: "Children's Day Activity",
        },
        date: {
          th: "13 มกราคม 2567",
          en: "13-January-2024",
        },
        description: {
          th: "เข้าร่วมจัดกิจกรรมวันเด็กแห่งชาติ เพื่อมอบความสนุกสนานและส่งเสริมการเรียนรู้ของเด็กๆ ในชุมชน",
          en: "Participated in organizing National Children's Day activities to bring joy and support learning for children in the community.",
        },
        images: [
          "/images/mscd/bsc-scholarships/sophoun-youk/activity-3-1.png",
          "/images/mscd/bsc-scholarships/sophoun-youk/activity-3-2.png",
        ],
      },
      {
        title: {
          th: "การประเมินหลักสูตร AUN-QA (The AUN-QA Programme Assessment)",
          en: "The AUN-QA Programme Assessment",
        },
        date: {
          th: "15 พฤษภาคม 2567",
          en: "15-May-2024",
        },
        description: {
          th: "เข้าร่วมสนับสนุนการประเมินคุณภาพการศึกษาระดับหลักสูตรตามเกณฑ์ AUN-QA ในฐานะตัวแทนนักศึกษา",
          en: "Participated in the AUN-QA programme quality assessment as a student representative.",
        },
        images: [
          "/images/mscd/bsc-scholarships/sophoun-youk/activity-4-1.png",
          "/images/mscd/bsc-scholarships/sophoun-youk/activity-4-2.png",
        ],
      },
      {
        title: {
          th: "กิจกรรมพี่ช่วยน้อง - สนุกคิดคณิตศาสตร์ (Senior Helps Junior - Fun with Math Thinking)",
          en: "Senior Helps Junior - Fun with Math Thinking",
        },
        date: {
          th: "20 กรกฎาคม 2567",
          en: "20-July-2024",
        },
        description: {
          th: "ร่วมกิจกรรมแบ่งปันความรู้คณิตศาสตร์พื้นฐานและกระบวนการคิดวิเคราะห์เชิงระบบให้กับรุ่นน้อง",
          en: "Participated in the tutoring program sharing mathematics knowledge and logical reasoning skills with junior students.",
        },
        images: [
          "/images/mscd/bsc-scholarships/sophoun-youk/activity-5-1.png",
          "/images/mscd/bsc-scholarships/sophoun-youk/activity-5-2.png",
        ],
      },
    ],
  },
}
