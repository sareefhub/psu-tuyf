"use client"

import { useLanguage } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { StudentCard } from "@/components/student-card"

// ข้อมูลนักศึกษาระดับปริญญาโท วิทยาเขตปัตตานี (M.Sc. Pattani)
const studentData = {
  th: [
    {
      year: "ปีการศึกษา 2566",
      groupTitle: "นักเรียนทุนไทย THAI STUDENT SCHOLARS 2023",
      students: [
        { name: "นาย ซูไฮมี ดาโอ๊ะ", role: "นักศึกษาปริญญาโท ปีที่ 1", campus: "วิทยาเขตปัตตานี" }
      ]
    },
    {
      year: "ปีการศึกษา 2565",
      groupTitle: "นักเรียนทุนกัมพูชาและไทย CAMBODIAN & THAI STUDENT SCHOLARS 2022",
      students: [
        { name: "Miss Keo Sreymom", role: "นักศึกษาปริญญาโท ปีที่ 2", campus: "วิทยาเขตปัตตานี" },
        { name: "นาย อับดุลเลาะ ลาเต๊ะ", role: "นักศึกษาปริญญาโท ปีที่ 2", campus: "วิทยาเขตปัตตานี" }
      ]
    },
    {
      year: "ปีการศึกษา 2564",
      groupTitle: "นักเรียนทุนกัมพูชา CAMBODIAN STUDENT SCHOLARS 2021",
      students: [
        { name: "Mr. Namoral Thy", role: "สำเร็จการศึกษา (ปี 2566)", campus: "วิทยาเขตปัตตานี" }
      ]
    }
  ],
  en: [
    {
      year: "Academic Year 2023",
      groupTitle: "THAI STUDENT SCHOLARS 2023",
      students: [
        { name: "Mr. Suhaimi Daoh", role: "1st Year Master's Student", campus: "Pattani Campus" }
      ]
    },
    {
      year: "Academic Year 2022",
      groupTitle: "CAMBODIAN & THAI STUDENT SCHOLARS 2022",
      students: [
        { name: "Miss Keo Sreymom", role: "2nd Year Master's Student", campus: "Pattani Campus" },
        { name: "Mr. Abdulloh Lateh", role: "2nd Year Master's Student", campus: "Pattani Campus" }
      ]
    },
    {
      year: "Academic Year 2021",
      groupTitle: "CAMBODIAN STUDENT SCHOLARS 2021",
      students: [
        { name: "Mr. Namoral Thy", role: "Graduated (2023)", campus: "Pattani Campus" }
      ]
    }
  ]
};

export default function MscPattaniDirectoryPage() {
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
                ? "Honorable directory of M.Sc. scholarship recipients (Pattani Campus) under the MGSS project"
                : "รายชื่อเกียรติยศของนักศึกษาระดับปริญญาโท (วิทยาเขตปัตตานี) ผู้ได้รับทุนการศึกษาโครงการ MGSS"}
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
                        moreDetailText={lang === "en" ? "More Detail" : "ดูรายละเอียดเพิ่มเติม"}
                        photoPlaceholderText={lang === "en" ? "PHOTO" : "รูปภาพ"}
                        categoryBadge={lang === "en" ? "MGSS SCHOLAR" : "นักศึกษาทุน MGSS"}
                        priority={yearGroup.year.includes("2566") || yearGroup.year.includes("2023")}
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
