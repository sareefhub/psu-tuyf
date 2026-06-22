// ข้อมูลของทุนการศึกษาระดับปริญญาตรี (B.Sc. Scholarships)
// ประกอบไปด้วยข้อมูลประกาศ PDF และรายชื่อนักเรียนทุน เพื่อความสะอาดเรียบร้อยของหน้า UI

export interface BscStudent {
  readonly name: string;
  readonly studentKey: string;
  readonly image: string;
  readonly slug: string;
}

export interface BscStudentGroup {
  readonly groupKey: string;
  readonly students: readonly BscStudent[];
}

export interface BscStudentYearGroup {
  readonly yearKey: string;
  readonly groups: readonly BscStudentGroup[];
}

export interface BscAnnouncementItem {
  readonly key: string;
  readonly size: string;
  readonly fileUrl: string;
}

// 1. ข้อมูลทำเนียบรายชื่อนักเรียนทุน ป.ตรี
export const bscDirectoryData: readonly BscStudentYearGroup[] = [
  {
    yearKey: "y2566",
    groups: [
      {
        groupKey: "g1",
        students: [
          {
            name: "Miss SOPHOUN YOUK",
            studentKey: "s1",
            image: "/images/mscd/bsc-scholarships/student-1.png",
            slug: "sophoun-youk",
          },
        ],
      },
    ],
  },
  {
    yearKey: "y2565",
    groups: [
      {
        groupKey: "g1",
        students: [
          { name: "Mr. Faruk Waede", studentKey: "s1", image: "/images/mscd/bsc-scholarships/student-2.png", slug: "faruk-waede" },
          { name: "Miss Inasnee Rattanawongsawas", studentKey: "s2", image: "/images/mscd/bsc-scholarships/student-3.png", slug: "inasnee-rattanawongsawas" },
          { name: "Miss Fatimah Mahae", studentKey: "s3", image: "/images/mscd/bsc-scholarships/student-4.png", slug: "fatimah-mahae" },
          { name: "Miss Nirania Waedaya", studentKey: "s4", image: "/images/mscd/bsc-scholarships/student-5.png", slug: "nirania-waedaya" },
          { name: "Miss Sufianee Abu", studentKey: "s5", image: "/images/mscd/bsc-scholarships/student-6.png", slug: "sufianee-abu" },
        ],
      },
      {
        groupKey: "g2",
        students: [
          { name: "Miss Liza Thea", studentKey: "s1", image: "/images/mscd/bsc-scholarships/student-7.png", slug: "liza-thea" },
          { name: "Mr. Chhavy Chorn", studentKey: "s2", image: "/images/mscd/bsc-scholarships/student-8.png", slug: "chhavy-chorn" },
        ],
      },
    ],
  },
  {
    yearKey: "y2564",
    groups: [
      {
        groupKey: "g1",
        students: [
          { name: "Miss Rusmee Binmaming", studentKey: "s1", image: "/images/mscd/bsc-scholarships/student-9.png", slug: "rusmee-binmaming" },
          { name: "Mr. Affan Yahyoh", studentKey: "s2", image: "/images/mscd/bsc-scholarships/student-10.png", slug: "affan-yahyoh" },
        ],
      },
      {
        groupKey: "g2",
        students: [
          { name: "Mr. Namoral Thy", studentKey: "s1", image: "/images/mscd/bsc-scholarships/student-11.png", slug: "namoral-thy" },
          { name: "Miss Layya Meak", studentKey: "s2", image: "/images/mscd/bsc-scholarships/student-12.png", slug: "layya-meak" },
        ],
      },
    ],
  },
]

// 2. ข้อมูลเอกสารดาวน์โหลดและประกาศ PDF ทุน ป.ตรี
export const bscAnnouncementsData: readonly BscAnnouncementItem[] = [
  {
    key: "item1",
    size: "260 KB",
    fileUrl: "/documents/mscd/bsc-scholarships/ประกาศรับสมัครทุนการศึกษา-2565-รอบที่2.pdf",
  },
  {
    key: "item2",
    size: "235 KB",
    fileUrl: "/documents/mscd/bsc-scholarships/ประกาศรับสมัครทุนการศึกษา-2565.pdf",
  },
  {
    key: "item3",
    size: "148 KB",
    fileUrl: "/documents/mscd/bsc-scholarships/ประกาศผลการคัดเลือกนักเรียนเพื่อรับทุนการศึกษา-2565.pdf",
  },
  {
    key: "item4",
    size: "240 KB",
    fileUrl: "/documents/mscd/bsc-scholarships/ประกาศรับสมัครทุนการศึกษา-2564.pdf",
  },
  {
    key: "item5",
    size: "145 KB",
    fileUrl: "/documents/mscd/bsc-scholarships/ประกาศผลการคัดเลือกนักเรียนเพื่อรับทุนการศึกษา-2564.pdf",
  },
]
