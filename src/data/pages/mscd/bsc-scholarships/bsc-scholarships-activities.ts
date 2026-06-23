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
        images: [
          "/images/mscd/bsc-scholarships/faruk-waede/activity-2-1.jpg",
          "/images/mscd/bsc-scholarships/faruk-waede/activity-2-2.jpg",
        ],
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
        images: [
          "/images/mscd/bsc-scholarships/faruk-waede/activity-3-1.jpg",
        ],
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
        images: [
          "/images/mscd/bsc-scholarships/faruk-waede/activity-4-1.jpg",
        ],
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
        images: [
          "/images/mscd/bsc-scholarships/faruk-waede/activity-5-1.jpg",
        ],
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
        images: [
          "/images/mscd/bsc-scholarships/faruk-waede/activity-6-1.jpg",
          "/images/mscd/bsc-scholarships/faruk-waede/activity-6-2.jpg",
          "/images/mscd/bsc-scholarships/faruk-waede/activity-6-3.jpg",
        ],
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
        images: [
          "/images/mscd/bsc-scholarships/faruk-waede/activity-7-1.jpg",
        ],
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
  "inasnee-rattanawongsawas": {
    slug: "inasnee-rattanawongsawas",
    name: {
      th: "Inasnee Rattanawongsawas",
      en: "Inasnee Rattanawongsawas",
    },
    image: "/images/mscd/bsc-scholarships/inasnee-rattanawongsawas/profile.png",
    role: {
      th: "นักเรียนทุนป.ตรี (ไทย)",
      en: "Undergraduate Scholarship Student (Thai)",
    },
    campus: {
      th: "วิทยาเขตปัตตานี",
      en: "Pattani Campus",
    },
    studyPlan: {
      th: "สหกิจศึกษา (Cooperative Education)",
      en: "Cooperative Education",
    },
    projectTitle: {
      th: "การพัฒนาโปรแกรมแก้ไขข้อความสำหรับระบบจัดการเอกสารอิเล็กทรอนิกส์ด้วย Quill และ Blazor Framework",
      en: "Developing a text editor for an electronic document management system using Quill and Blazor Framework.",
    },
    projectAdviser: {
      th: "ดร.จารุณี เสหนี (Dr. Jarunee Saelee)",
      en: "Dr. Jarunee Saelee",
    },
    educationalStatus: {
      th: "สำเร็จการศึกษา",
      en: "Completed",
    },
    internship: {
      position: {
        th: "นักพัฒนาแบ็กเอนด์ฝึกหัด (Back-End Developer Intern)",
        en: "Back-End Developer Intern",
      },
      location: {
        th: "บริษัท แอดวานซ์ อินโนเวชั่น เทคโนโลยี จำกัด (Advance Innovation Technology Co., Ltd.)",
        en: "Advance Innovation Technology Co., Ltd.",
      },
      duration: {
        th: "8 เมษายน 2568 - 13 มิถุนายน 2568",
        en: "08 April 2025 - 13 June 2025",
      },
      responsibility: {
        th: "ระหว่างการฝึกงาน ได้รับผิดชอบในการบำรุงรักษาและพัฒนาส่วนระบบหลังบ้านของระบบบริหารจัดการคลังสินค้าโดยใช้ Node.js เป็นเทคโนโลยีหลัก ได้ทำงานเกี่ยวกับโครงสร้าง API เพื่อจัดการข้อมูลสินค้าคงคลัง ความเคลื่อนไหวของสินค้า และการทำงานต่างๆ ในคลังสินค้าอย่างมีประสิทธิภาพ จากประสบการณ์นี้ทำให้ได้รับความรู้เชิงปฏิบัติเกี่ยวกับการออกแบบฐานข้อมูล การประมวลผลคำขอ (request) และการเชื่อมต่อระบบหลังบ้าน รวมถึงได้ฝึกฝนการดีบั๊ก แก้ไขปัญหา และพัฒนาฟีเจอร์ใหม่ตามความต้องการของผู้ใช้งาน",
        en: "During my internship, I was responsible for maintaining and developing the backend of a warehouse management system using Node.js as the primary technology. I worked on building APIs to efficiently handle inventory data, stock movement, and warehouse operations. Through this experience, I gained hands-on knowledge in database design, request handling, and integrating backend systems. I also practiced debugging, fixing issues, and implementing new features based on user requirements.",
      },
      futurePlan: {
        th: "มีความสนใจที่จะเข้าร่วมฝึกงานในส่วนของฟรอนต์เอนด์ (Frontend) และเริ่มต้นทำงานในโปรเจกต์ของบริษัทตามที่ได้รับมอบหมาย",
        en: "I am interested in joining the internship on the frontend side and start working on 1 project of the company as assigned.",
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
          th: "เข้าร่วมแข่งขันกีฬาและกิจกรรมเชื่อมความสัมพันธ์ระหว่างนักศึกษาจากทั้ง 5 วิทยาเขต ของมหาวิทยาลัยสงขลานครินทร์ ณ วิทยาเขตหาดใหญ่",
          en: "Participated in sports competitions and relationship-building activities among students from all 5 campuses of Prince of Songkhla University at Hat Yai Campus.",
        },
        images: [],
      },
      {
        title: {
          th: "คณะทำงานสังเกตการณ์การต้อนรับน้องใหม่ของสภานักศึกษา",
          en: "Staff observed the freshmen welcoming of student council .",
        },
        date: {
          th: "14 กรกฎาคม 2567",
          en: "14 July 2024",
        },
        description: {
          th: "ปฏิบัติหน้าที่สังเกตการณ์การจัดกิจกรรมต้อนรับน้องใหม่ของสภานักศึกษา เพื่อให้การดำเนินกิจกรรมเป็นไปด้วยความเรียบร้อยและสร้างสรรค์",
          en: "Served as a staff member observing the freshmen welcoming activities organized by the student council to ensure orderly and creative event execution.",
        },
        images: [],
      },
      {
        title: {
          th: "เข้าร่วมรับฟังการบรรยายเสวนาในหัวข้อ 'การเมืองขยับ การศึกษาเคลื่อน'",
          en: "Participate in listening to the seminar Under the topic: Politics moves, Education moves",
        },
        date: {
          th: "21 กุมภาพันธ์ 2567",
          en: "21 Febuary 2024",
        },
        description: {
          th: "เข้าร่วมรับฟังความคิดเห็นและข้อมูลที่เป็นประโยชน์ในงานเสวนาวิชาการที่อภิปรายเกี่ยวกับทิศทางการพัฒนาการศึกษาที่เชื่อมโยงกับมิติทางการเมือง",
          en: "Participated in listening to the academic seminar discussing the direction of educational development linked with political dimensions.",
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
          th: "ร่วมเป็นจิตอาสาลงพื้นที่มอบถุงยังชีพและสิ่งของอุปโภคบริโภคที่จำเป็นเพื่อช่วยเหลือบรรเทาความเดือดร้อนของผู้ยากไร้และผู้ป่วยติดเตียงในชุมชนจังหวัดปัตตานี",
          en: "Participated as a volunteer distributing survival bags and necessary consumer goods to help relieve the hardship of the poor and bedridden patients in communities within Pattani Province.",
        },
        images: [],
      },
      {
        title: {
          th: "โครงการ SMART SAT SMART FUN",
          en: "SMART SAT SMART FUN",
        },
        date: {
          th: "กุมภาพันธ์ 2567",
          en: "Febuary 2024",
        },
        description: {
          th: "เข้าร่วมกิจกรรมส่งเสริมการเรียนรู้ที่สร้างสรรค์และสนุกสนาน เพื่อพัฒนาทักษะชีวิตและกระบวนการเรียนรู้ของนักศึกษา",
          en: "Participated in the creative and fun learning promotion activity to develop life skills and student learning processes.",
        },
        images: [],
      },
      {
        title: {
          th: "เข้าร่วมกิจกรรมรับเสื้อปฏิบัติการ (เสื้อช็อป) สำหรับนักศึกษาชั้นปีที่ 2 ที่สำเร็จการศึกษาขั้นต้น",
          en: "Participate in the activity to receive workshop shirts for second-year students who have graduated one level.",
        },
        date: {
          th: "27 มกราคม 2567",
          en: "27 January 2024",
        },
        description: {
          th: "เข้าร่วมกิจกรรมและพิธีรับมอบเสื้อช็อปปฏิบัติการสำหรับนักศึกษาชั้นปีที่ 2 เพื่อก้าวเข้าสู่การเรียนรู้ภาคปฏิบัติเต็มรูปแบบ",
          en: "Participated in the activity and ceremony to receive workshop laboratory shirts for second-year students advancing into full practical learning.",
        },
        images: [],
      },
      {
        title: {
          th: "จิตอาสาจัดเตรียมอาหารหลักและอาหารแห้งช่วยเหลือผู้ประสบอุทกภัยในจังหวัดปัตตานี",
          en: "Volunteer prepare staple food and dry food to help flood victims in Pattani Province ",
        },
        date: {
          th: "28 - 30 ธันวาคม 2566",
          en: "28-30 December 2023 ",
        },
        description: {
          th: "ร่วมแรงร่วมใจจัดเตรียมอาหารปรุงสุกและอาหารแห้งบรรจุถุงยังชีพ เพื่อนำไปแจกจ่ายช่วยเหลือผู้ประสบอุทกภัยในพื้นที่จังหวัดปัตตานี",
          en: "Helped prepare meals and dry food packages to distribute to flood victims in Pattani Province.",
        },
        images: [],
      },
      {
        title: {
          th: "เข้าร่วมการสัมมนาสภานักศึกษา ประจำภาคการศึกษา 2/2566 เพื่อกระชับความสัมพันธ์และวางแผนงาน",
          en: "Participated in the Student Council seminar for the semester 2/2023  to make relationships and work plans.",
        },
        date: {
          th: "22 - 24 ธันวาคม 2566",
          en: "22-24 December 2023",
        },
        description: {
          th: "เข้าร่วมสัมมนาสร้างความสัมพันธ์อันดีระหว่างสมาชิกสภานักศึกษา พร้อมร่วมวางแผนการดำเนินโครงการและกิจกรรมต่างๆ ในภาคการศึกษา 2/2566",
          en: "Participated in the Student Council seminar to build good relationships among members and plan upcoming projects and activities for semester 2/2023 (2/2566 BE).",
        },
        images: [],
      },
      {
        title: {
          th: "คณะทำงานในกิจกรรมการนำเสนอผลงานวิจัยเกี่ยวกับการพัฒนาเชิงพื้นที่",
          en: "Staff in the event of research presentation on area-based development.",
        },
        date: {
          th: "พฤศจิกายน 2566",
          en: "November 2023",
        },
        description: {
          th: "ร่วมปฏิบัติหน้าที่เป็นคณะทำงานและสนับสนุนการจัดงานประชุมการนำเสนอผลงานวิจัยเพื่อการพัฒนาพื้นที่และชุมชน",
          en: "Served as a staff member supporting the research presentation conference focused on regional and community development.",
        },
        images: [],
      },
      {
        title: {
          th: "เข้าร่วมกิจกรรม SMP OPEN HOUSE คณะศึกษาศาสตร์ มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตปัตตานี และได้รับรางวัลนักเรียนดีเด่น SMP ลำดับที่ 4",
          en: "Participated in SMP OPEN HOUSE under the Faculty of Education Prince of Songkla University Pattani Campus and received the 4th SMP Outstanding Student Award.",
        },
        date: {
          th: "21 ตุลาคม 2566",
          en: "21 October 2023",
        },
        description: {
          th: "เข้าร่วมกิจกรรมนิทรรศการวิชาการ SMP Open House ณ คณะศึกษาศาสตร์ วิทยาเขตปัตตานี พร้อมทั้งได้รับเกียรติบัตรรางวัลนักเรียนเรียนดีเด่น SMP อันดับที่ 4",
          en: "Participated in the SMP Open House academic exhibition at the Faculty of Education, Pattani Campus, and received the 4th SMP Outstanding Student Award.",
        },
        images: [],
      },
    ],
  },
}
