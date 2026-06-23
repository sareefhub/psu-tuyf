// ข้อมูลทำเนียบนักศึกษาทุนระดับบัณฑิตศึกษา โครงการ MGSS (M.Sc. & Ph.D.)
// แยกกลุ่มตามวิทยาเขตและประเภทหลักสูตร เพื่อความสะอาดเรียบร้อยและไม่ปนกับโค้ด UI

export interface Student {
  readonly name: string;
  readonly role: string;
  readonly campus: string;
  readonly image: string;
  readonly slug: string;
}

export interface StudentYearGroup {
  readonly year: string;
  readonly groupTitle: string;
  readonly students: readonly Student[];
}

export interface StudentDirectoryData {
  readonly th: readonly StudentYearGroup[];
  readonly en: readonly StudentYearGroup[];
}

// 1. ข้อมูลนักศึกษา ป.โท วิทยาเขตหาดใหญ่ (M.Sc. Hatyai)
export const mscHatyaiData: StudentDirectoryData = {
  th: [
    {
      year: "ปีการศึกษา 2567",
      groupTitle: "นักเรียนทุนปี 2024 (STUDENT SCHOLARS 2024)",
      students: [
        {
          name: "Saowapak Makphon",
          role: "รหัสนักศึกษา: 6610220020",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/master-student-hatyai/student-1.png",
          slug: "saowapak-makphon",
        },
      ],
    },
    {
      year: "ปีการศึกษา 2565",
      groupTitle: "นักเรียนทุนปี 2022 (STUDENT SCHOLARS 2022)",
      students: [
        {
          name: "Phitchayawee Sangjan",
          role: "รหัสนักศึกษา: 6610220011",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/master-student-hatyai/student-2.png",
          slug: "phitchayawee-sangjan",
        },
      ],
    },
    {
      year: "ปีการศึกษา 2564",
      groupTitle: "นักเรียนทุนปี 2021 (STUDENT SCHOLARS 2021)",
      students: [
        {
          name: "Panupong Daengpradap",
          role: "รหัสนักศึกษา: 6410220051",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/master-student-hatyai/student-3.png",
          slug: "panupong-daengpradap",
        },
      ],
    },
  ],
  en: [
    {
      year: "Academic Year 2024",
      groupTitle: "STUDENT SCHOLARS 2024",
      students: [
        {
          name: "Saowapak Makphon",
          role: "Student ID: 6610220020",
          campus: "Hat Yai Campus",
          image: "/images/mgss/master-student-hatyai/student-1.png",
          slug: "saowapak-makphon",
        },
      ],
    },
    {
      year: "Academic Year 2022",
      groupTitle: "STUDENT SCHOLARS 2022",
      students: [
        {
          name: "Phitchayawee Sangjan",
          role: "Student ID: 6610220011",
          campus: "Hat Yai Campus",
          image: "/images/mgss/master-student-hatyai/student-2.png",
          slug: "phitchayawee-sangjan",
        },
      ],
    },
    {
      year: "Academic Year 2021",
      groupTitle: "STUDENT SCHOLARS 2021",
      students: [
        {
          name: "Panupong Daengpradap",
          role: "Student ID: 6410220051",
          campus: "Hat Yai Campus",
          image: "/images/mgss/master-student-hatyai/student-3.png",
          slug: "panupong-daengpradap",
        },
      ],
    },
  ],
}

// 2. ข้อมูลนักศึกษา ป.โท วิทยาเขตปัตตานี (M.Sc. Pattani)
export const mscPattaniData: StudentDirectoryData = {
  th: [
    {
      year: "ปีการศึกษา 2567",
      groupTitle: "นักเรียนทุนปี 2024 (STUDENT SCHOLARS 2024)",
      students: [
        {
          name: "Fatima Hemna",
          role: "รหัสนักศึกษา: 6620320705",
          campus: "วิทยาเขตปัตตานี",
          image: "/images/mgss/master-student-pattani/student-1.png",
          slug: "fatima-hemna",
        },
        {
          name: "Fateehah Korlaeh",
          role: "รหัสนักศึกษา: 6720320702",
          campus: "วิทยาเขตปัตตานี",
          image: "/images/mgss/master-student-pattani/student-2.png",
          slug: "fateehah-korlaeh",
        },
        {
          name: "Mr. Imam Muhyideen Sidiq",
          role: "รหัสนักศึกษา: 6720320703",
          campus: "วิทยาเขตปัตตานี",
          image: "/images/mgss/master-student-pattani/student-3.png",
          slug: "imam-muhyideen-sidiq",
        },
      ],
    },
    {
      year: "ปีการศึกษา 2565",
      groupTitle: "นักเรียนทุนปี 2022 (STUDENT SCHOLARS 2022)",
      students: [
        {
          name: "Asma Yafad",
          role: "รหัสนักศึกษา: 6620320703",
          campus: "วิทยาเขตปัตตานี",
          image: "/images/mgss/master-student-pattani/student-4.png",
          slug: "asma-yafad",
        },
        {
          name: "Palin Raktaow",
          role: "รหัสนักศึกษา: 6620320702",
          campus: "วิทยาเขตปัตตานี",
          image: "/images/mgss/master-student-pattani/student-5.png",
          slug: "palin-raktaow",
        },
      ],
    },
    {
      year: "ปีการศึกษา 2564",
      groupTitle: "นักเรียนทุนปี 2021 (STUDENT SCHOLARS 2021)",
      students: [
        {
          name: "Kritapon Chaikan",
          role: "รหัสนักศึกษา: 6420320701",
          campus: "วิทยาเขตปัตตานี",
          image: "/images/mgss/master-student-pattani/student-6.png",
          slug: "kritapon-chaikan",
        },
      ],
    },
  ],
  en: [
    {
      year: "Academic Year 2024",
      groupTitle: "STUDENT SCHOLARS 2024",
      students: [
        {
          name: "Fatima Hemna",
          role: "Student ID: 6620320705",
          campus: "Pattani Campus",
          image: "/images/mgss/master-student-pattani/student-1.png",
          slug: "fatima-hemna",
        },
        {
          name: "Fateehah Korlaeh",
          role: "Student ID: 6720320702",
          campus: "Pattani Campus",
          image: "/images/mgss/master-student-pattani/student-2.png",
          slug: "fateehah-korlaeh",
        },
        {
          name: "Mr. Imam Muhyideen Sidiq",
          role: "Student ID: 6720320703",
          campus: "Pattani Campus",
          image: "/images/mgss/master-student-pattani/student-3.png",
          slug: "imam-muhyideen-sidiq",
        },
      ],
    },
    {
      year: "Academic Year 2022",
      groupTitle: "STUDENT SCHOLARS 2022",
      students: [
        {
          name: "Asma Yafad",
          role: "Student ID: 6620320703",
          campus: "Pattani Campus",
          image: "/images/mgss/master-student-pattani/student-4.png",
          slug: "asma-yafad",
        },
        {
          name: "Palin Raktaow",
          role: "Student ID: 6620320702",
          campus: "Pattani Campus",
          image: "/images/mgss/master-student-pattani/student-5.png",
          slug: "palin-raktaow",
        },
      ],
    },
    {
      year: "Academic Year 2021",
      groupTitle: "STUDENT SCHOLARS 2021",
      students: [
        {
          name: "Kritapon Chaikan",
          role: "Student ID: 6420320701",
          campus: "Pattani Campus",
          image: "/images/mgss/master-student-pattani/student-6.png",
          slug: "kritapon-chaikan",
        },
      ],
    },
  ],
}

// 3. ข้อมูลนักศึกษา ป.เอก วิทยาเขตหาดใหญ่ (Ph.D. Hatyai)
export const phdHatyaiData: StudentDirectoryData = {
  th: [
    {
      year: "ปีการศึกษา 2567",
      groupTitle: "นักเรียนทุนปี 2024 (STUDENT SCHOLARS 2024)",
      students: [
        {
          name: "Arbaz Jehan khan",
          role: "รหัสนักศึกษา: 6710230007",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/phd-student-hatyai/student-1.png",
          slug: "arbaz-jehan-khan",
        },
      ],
    },
    {
      year: "ปีการศึกษา 2566",
      groupTitle: "นักเรียนทุนปี 2023 (STUDENT SCHOLARS 2023)",
      students: [
        {
          name: "Pokpong Srimora",
          role: "รหัสนักศึกษา: 6610230016",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/phd-student-hatyai/student-2.png",
          slug: "pokpong-srimora",
        },
        {
          name: "Traiwat Intarawong",
          role: "รหัสนักศึกษา: 6610230005",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/phd-student-hatyai/student-3.png",
          slug: "traiwat-intarawong",
        },
      ],
    },
    {
      year: "ปีการศึกษา 2564",
      groupTitle: "นักเรียนทุนปี 2021 (STUDENT SCHOLARS 2021)",
      students: [
        {
          name: "Krit Kanopthamakun",
          role: "รหัสนักศึกษา: 6310230017",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/phd-student-hatyai/student-4.png",
          slug: "krit-kanopthamakun",
        },
        {
          name: "Anusorn Simuen",
          role: "รหัสนักศึกษา: 6410230005",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/phd-student-hatyai/student-5.png",
          slug: "anusorn-simuen",
        },
      ],
    },
  ],
  en: [
    {
      year: "Academic Year 2024",
      groupTitle: "STUDENT SCHOLARS 2024",
      students: [
        {
          name: "Arbaz Jehan khan",
          role: "Student ID: 6710230007",
          campus: "Hat Yai Campus",
          image: "/images/mgss/phd-student-hatyai/student-1.png",
          slug: "arbaz-jehan-khan",
        },
      ],
    },
    {
      year: "Academic Year 2023",
      groupTitle: "STUDENT SCHOLARS 2023",
      students: [
        {
          name: "Pokpong Srimora",
          role: "Student ID: 6610230016",
          campus: "Hat Yai Campus",
          image: "/images/mgss/phd-student-hatyai/student-2.png",
          slug: "pokpong-srimora",
        },
        {
          name: "Traiwat Intarawong",
          role: "Student ID: 6610230005",
          campus: "Hat Yai Campus",
          image: "/images/mgss/phd-student-hatyai/student-3.png",
          slug: "traiwat-intarawong",
        },
      ],
    },
    {
      year: "Academic Year 2021",
      groupTitle: "STUDENT SCHOLARS 2021",
      students: [
        {
          name: "Krit Kanopthamakun",
          role: "Student ID: 6310230017",
          campus: "Hat Yai Campus",
          image: "/images/mgss/phd-student-hatyai/student-4.png",
          slug: "krit-kanopthamakun",
        },
        {
          name: "Anusorn Simuen",
          role: "Student ID: 6410230005",
          campus: "Hat Yai Campus",
          image: "/images/mgss/phd-student-hatyai/student-5.png",
          slug: "anusorn-simuen",
        },
      ],
    },
  ],
}
