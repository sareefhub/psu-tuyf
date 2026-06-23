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
  
  // ข้อมูลเสริมการเรียนและรางวัล (เพิ่มเติมตามความเหมาะสมสำหรับบางคน)
  readonly studyPlan?: { readonly th: string; readonly en: string };
  readonly projectTitle?: { readonly th: string; readonly en: string };
  readonly projectAdviser?: { readonly th: string; readonly en: string };
  readonly educationalStatus?: { readonly th: string; readonly en: string };
  readonly award?: { readonly th: string; readonly en: string };

  // ข้อมูลการฝึกงาน (เพิ่มเติมตามความเหมาะสมสำหรับบางคน)
  readonly internship?: {
    readonly position: { readonly th: string; readonly en: string };
    readonly location: { readonly th: string; readonly en: string };
    readonly duration: { readonly th: string; readonly en: string };
    readonly responsibility: { readonly th: string; readonly en: string };
    readonly futurePlan?: { readonly th: string; readonly en: string };
  };

  readonly activities: readonly StudentActivity[];
}

export const bscStudentsActivitiesData: Record<string, StudentProfile> = {
  "faruk-waede": {
    slug: "faruk-waede",
    name: {
      th: "Faruk Waede",
      en: "Faruk Waede",
    },
    image: "/images/mscd/bsc-scholarships/faruk-waede/profile.png",
    role: {
      th: "นักเรียนทุนป.ตรี (ไทย)",
      en: "Undergraduate Scholarship Student (Thai)",
    },
    campus: {
      th: "วิทยาเขตปัตตานี",
      en: "Pattani Campus",
    },
    studyPlan: {
      th: "โครงงานสถิติ (Statistic Project)",
      en: "Statistic Project",
    },
    projectTitle: {
      th: "การพยากรณ์ราคายางก้อนถ้วยรายสัปดาห์ในจังหวัดยะลา ตั้งแต่ปี พ.ศ. 2564 ถึง พ.ศ. 2568",
      en: "Weekly Forecasting of Cup Lump Rubber Prices in Yala Province from 2021 to 2025",
    },
    projectAdviser: {
      th: "มะยูนิ้ง อีซอ (Mayuening Eiso)",
      en: "Mayuening Eiso",
    },
    educationalStatus: {
      th: "สำเร็จการศึกษา",
      en: "Completed",
    },
    award: {
      th: "รางวัลเหรียญทองแดงสำหรับการนำเสนอภาคบรรยาย ในงานประชุมวิชาการระดับปริญญาตรีสาขาคณิตศาสตร์ประยุกต์ ครั้งที่ 14 (UAMC 2026)",
      en: "Bronze Medal for Oral Presentation at the 14th Undergraduate in Applied Mathematics Conference (UAMC 2026)",
    },
    internship: {
      position: {
        th: "ฝ่ายพยากรณ์สถิติ",
        en: "Statistics Forecasting Division",
      },
      location: {
        th: "สำนักงานสถิติแห่งชาติ",
        en: "National Statistical Office",
      },
      duration: {
        th: "8 เมษายน 2568 - 13 มิถุนายน 2568",
        en: "08 April 2025 - 13 June 2025",
      },
      responsibility: {
        th: "ระหว่างการฝึกงาน ได้ทำความสะอาดข้อมูล (Data Cleaning) เพื่อใช้ในการวิเคราะห์สำหรับหนังสือสถิตินี้ ซึ่งจัดทำโดยสำนักงานสถิติแห่งชาติ และวิเคราะห์ข้อมูลในรูปแบบที่มีชุดข้อมูลจำนวนมาก",
        en: "During my internship, I cleaned the data to use in the analysis of this statistical book, which was produced by the National Statistical Office of Thailand, and analyzed the data in a way that had a lot of data.",
      },
      futurePlan: {
        th: "ในภาคการศึกษาที่ 1 มีความสนใจในการทำสัมมนาทางสถิติเกี่ยวกับอุบัติเหตุทางถนน และในภาคการศึกษาที่ 2 สนใจที่จะทำโครงงานเพื่อแก้ไขปัญหาและให้ข้อมูลสำหรับรัฐบาลในการกำหนดนโยบาย",
        en: "In term 1, I was interested in doing a seminar in statistics about road accidents and in term 2, I was interested in doing a project to solve the problem and provide information for the government to set policies.",
      },
    },
    activities: [
      {
        title: {
          th: "โครงการกีฬา 5 วิทยาเขต มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่",
          en: "Five Campuses Sports Project at Prince of Songkhla University, Hat Yai Campus",
        },
        date: {
          th: "5 - 7 กันยายน 2567",
          en: "5-7 September 2024",
        },
        description: {
          th: "เข้าร่วมแข่งขันกีฬาและกิจกรรมเชื่อมความสัมพันธ์ระหว่างนักศึกษาจากทั้ง 5 วิทยาเขต ของมหาวิทยาลัยสงขลานครินทร์ ณ วิทยาเขตหาดใหญ่ เพื่อส่งเสริมสุขภาพ ความเป็นน้ำหนึ่งใจเดียวกัน และการเรียนรู้ข้ามวิทยาเขต",
          en: "Participated in sports competitions and relationship-building activities among students from all 5 campuses of Prince of Songkhla University at Hat Yai Campus, promoting health, solidarity, and cross-campus learning.",
        },
        images: [
          "/images/mscd/bsc-scholarships/faruk-waede/activity-1-1.jpg",
          "/images/mscd/bsc-scholarships/faruk-waede/activity-1-2.jpg",
        ],
      },
      {
        title: {
          th: "คณะทำงานจัดการแข่งขันคณิตศาสตร์ระดับประถมศึกษา",
          en: "Staff for an elementary school-level Math competition",
        },
        date: {
          th: "4 กันยายน 2567",
          en: "4 September 2024",
        },
        description: {
          th: "ปฏิบัติหน้าที่เป็นคณะทำงานและผู้ควบคุมการสอบในการแข่งขันคณิตศาสตร์ระดับประถมศึกษา เพื่อสนับสนุนการจัดกิจกรรมทางวิชาการและส่งเสริมศักยภาพเยาวชน",
          en: "Served as a staff member and exam proctor for the elementary school-level mathematics competition, supporting academic activities and youth potential development.",
        },
        images: [],
      },
      {
        title: {
          th: "คณะทำงานจัดพิธีไหว้ครู ประจำปี 2567",
          en: "Staff in the 2024 Teacher Appreciation Ceremony",
        },
        date: {
          th: "1 กันยายน 2567",
          en: "1 September 2024",
        },
        description: {
          th: "ร่วมเป็นคณะทำงานในการจัดพิธีไหว้ครูเพื่อแสดงความกตัญญูกตเวทิตาต่อบูรพาจารย์ และสืบสานประเพณีอันดีงามของมหาวิทยาลัย",
          en: "Served as a staff member in organizing the Teacher Appreciation Ceremony to express gratitude to teachers and preserve the university's fine traditions.",
        },
        images: [],
      },
      {
        title: {
          th: "คณะทำงานโครงการต้อนรับน้องใหม่ 'ศรีตรังบานที่รูสะมิแล'",
          en: "Staff in the project welcoming new students titled 'Sri Trang Flourishes at Rusamilae.'",
        },
        date: {
          th: "12 - 14 กรกฎาคม 2567",
          en: "12-14 July 2024",
        },
        description: {
          th: "ทำหน้าที่เป็นพี่เลี้ยงและคณะทำงานในการต้อนรับและกระชับมิตรนักศึกษาใหม่เข้าสู่รั้วมหาวิทยาลัย วิทยาเขตปัตตานี (รูสะมิแล) เพื่อแนะนำแนวทางการเรียนและการปรับตัว",
          en: "Served as a mentor and staff member in welcoming and bonding new students to the university campus in Pattani (Rusamilae), providing guidance on study and adaptation.",
        },
        images: [],
      },
      {
        title: {
          th: "เข้าร่วมฟังการเสวนาทางวิชาการในหัวข้อ 'การเมืองขยับ การศึกษาเคลื่อน'",
          en: "Participate in listening to the seminar Under the topic: Politics moves, Education moves",
        },
        date: {
          th: "21 กุมภาพันธ์ 2567",
          en: "21 February 2024",
        },
        description: {
          th: "เข้าร่วมฟังการบรรยายเสวนาเชิงวิชาการเพื่อเสริมสร้างความรู้ความเข้าใจเกี่ยวกับทิศทางความเชื่อมโยงระหว่างการเมืองและการพัฒนาคุณภาพระบบการศึกษา",
          en: "Participated in an academic seminar to enhance understanding of the relationship between politics and educational quality development.",
        },
        images: [],
      },
      {
        title: {
          th: "จิตอาสามอบถุงยังชีพช่วยเหลือผู้ยากไร้และผู้ป่วยติดเตียงในจังหวัดปัตตานี",
          en: "Volunteers offer survival bags to help the poor and bedridden in Pattani Province.",
        },
        date: {
          th: "20 กุมภาพันธ์ 2567",
          en: "20 February 2024",
        },
        description: {
          th: "ลงพื้นที่ทำกิจกรรมจิตอาสาแจกจ่ายถุงยังชีพและสิ่งของจำเป็นให้กับผู้ยากไร้ ตลอดจนผู้ป่วยติดเตียงในชุมชนต่าง ๆ ของจังหวัดปัตตานีเพื่อบรรเทาความเดือดร้อนเบื้องต้น",
          en: "Participated in volunteer field activities distributing survival bags and essential supplies to the poor and bedridden patients in various communities of Pattani Province.",
        },
        images: [],
      },
      {
        title: {
          th: "เข้าร่วมกิจกรรมรับเสื้อปฏิบัติการ (เสื้อช็อป) สำหรับนักศึกษาชั้นปีที่ 2 ที่ผ่านเกณฑ์ระดับการเรียน",
          en: "Participate in the activity to receive workshop shirts for second-year students who have graduated one level.",
        },
        date: {
          th: "27 มกราคม 2567",
          en: "27 January 2024",
        },
        description: {
          th: "เข้าร่วมพิธีและกิจกรรมรับมอบเสื้อช็อปปฏิบัติการสำหรับนักศึกษาชั้นปีที่ 2 เพื่อแสดงสัญลักษณ์แห่งความรับผิดชอบและการก้าวสู่วิชาชีพขั้นสูง",
          en: "Participated in the ceremony and activity to receive laboratory workshop shirts for second-year students, symbolizing responsibility and advancement in their major fields.",
        },
        images: [],
      },
    ],
  },
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
