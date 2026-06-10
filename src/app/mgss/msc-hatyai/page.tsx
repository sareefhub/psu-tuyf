"use client"

import { useLanguage } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { StudentCard } from "@/components/student-card"

// ข้อมูลนักศึกษาระดับปริญญาโท วิทยาเขตหาดใหญ่ (M.Sc. Hatyai) ตามข้อมูลจริง
const studentData = {
  th: [
    {
      year: "ปีการศึกษา 2567",
      groupTitle: "นักเรียนทุนปี 2024 (STUDENT SCHOLARS 2024)",
      students: [
        {
          name: "Saowapak Makphon",
          role: "รหัสนักศึกษา: 6610220020",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/master-student-hatyai/student-1.png"
        }
      ]
    },
    {
      year: "ปีการศึกษา 2565",
      groupTitle: "นักเรียนทุนปี 2022 (STUDENT SCHOLARS 2022)",
      students: [
        {
          name: "Phitchayawee Sangjan",
          role: "รหัสนักศึกษา: 6610220011",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/master-student-hatyai/student-2.png"
        }
      ]
    },
    {
      year: "ปีการศึกษา 2564",
      groupTitle: "นักเรียนทุนปี 2021 (STUDENT SCHOLARS 2021)",
      students: [
        {
          name: "Panupong Daengpradap",
          role: "รหัสนักศึกษา: 6410220051",
          campus: "วิทยาเขตหาดใหญ่",
          image: "/images/mgss/master-student-hatyai/student-3.png"
        }
      ]
    }
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
          image: "/images/mgss/master-student-hatyai/student-1.png"
        }
      ]
    },
    {
      year: "Academic Year 2022",
      groupTitle: "STUDENT SCHOLARS 2022",
      students: [
        {
          name: "Phitchayawee Sangjan",
          role: "Student ID: 6610220011",
          campus: "Hat Yai Campus",
          image: "/images/mgss/master-student-hatyai/student-2.png"
        }
      ]
    },
    {
      year: "Academic Year 2021",
      groupTitle: "STUDENT SCHOLARS 2021",
      students: [
        {
          name: "Panupong Daengpradap",
          role: "Student ID: 6410220051",
          campus: "Hat Yai Campus",
          image: "/images/mgss/master-student-hatyai/student-3.png"
        }
      ]
    }
  ]
};

export default function MscHatyaiDirectoryPage() {
  const { lang } = useLanguage();
  const currentData = studentData[lang] || studentData.th;

  return (
    <MainLayout className="animate-fade-in">
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          {/* หัวข้อแสดงหน้าทำเนียบนักเรียนทุน */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h1 className="text-balance text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              {lang === "en" ? "Scholars Directory" : "ทำเนียบนักเรียนทุน"}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed">
              {lang === "en"
                ? "Honorable directory of M.Sc. scholarship recipients (Hat Yai Campus) under the MGSS project"
                : "รายชื่อเกียรติยศของนักศึกษาระดับปริญญาโท (วิทยาเขตหาดใหญ่) ผู้ได้รับทุนการศึกษาโครงการ MGSS"}
            </p>
          </div>

          {/* รายชื่อแบ่งตามปีการศึกษา */}
          <div className="space-y-16 max-w-7xl mx-auto">
            {currentData.map((yearGroup) => (
              <div key={yearGroup.year} className="space-y-8">
                {/* ขีดคั่นและชื่อปีการศึกษา */}
                <div className="border-b border-border/80 pb-3">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <span className="h-5 w-1.5 bg-accent rounded-full" />
                    <span>{lang === "en" ? "Scholars Admitted in " : "นักเรียนทุนรับเข้า"}{yearGroup.year}</span>
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Badge แสดงข้อมูลกลุ่มประเทศหรือสัญชาติผู้ได้รับทุน */}
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block bg-secondary/50 px-3 py-1 rounded w-fit">
                    {yearGroup.groupTitle}
                  </span>

                  {/* แสดงการ์ดในแบบ Grid */}
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {yearGroup.students.map((student) => (
                      <StudentCard
                        key={student.name}
                        name={student.name}
                        role={student.role}
                        campus={student.campus}
                        image={student.image} // ส่งพาธรูปภาพของนักศึกษา
                        moreDetailText={lang === "en" ? "More Detail" : "ดูรายละเอียดเพิ่มเติม"}
                        photoPlaceholderText={lang === "en" ? "PHOTO" : "รูปภาพ"}
                        categoryBadge={lang === "en" ? "MGSS SCHOLAR" : "นักศึกษาทุน MGSS"}
                        priority={yearGroup.year.includes("2567") || yearGroup.year.includes("2024")} // เพิ่มความสำคัญในการโหลดรูปภาพสำหรับรุ่นปัจจุบัน
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
