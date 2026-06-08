"use client"

import { useT } from "@/components/language-context"

export function AboutSection() {
  const t = useT()

  return (
    <section id="about" className="py-20 scroll-mt-16">
      {/* ปรับขนาดความกว้างสูงสุดให้เป็น max-w-6xl เพื่อให้ขอบซ้ายขวาตรงกับส่วน HeroSection */}
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent">
          {t("เกี่ยวกับโครงการ", "About the Project")}
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {t(
            "โครงการสนับสนุนจากกองทุนการกุศล PSU-TUYF",
            "Projects Supported by the PSU-TUYF Charitable Trust Fund",
          )}
        </h2>
        <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            {t(
              "ตั้งแต่ปี พ.ศ. 2564 เป็นต้นมา สาขาวิชาคณิตศาสตร์และวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตปัตตานี มีความยินดีเป็นอย่างยิ่งที่ได้รับโอกาสอันดีในการสนับสนุนจากโครงการ PSU-TUYF ซึ่งเป็นโครงการภายใต้ความร่วมมือระหว่างมหาวิทยาลัยสงขลานครินทร์ และ กองทุนการกุศล TUYF (TUYF Charitable Trust Fund)",
              "Since 2021, the Department of Mathematics and Computer Science, Faculty of Science and Technology, Prince of Songkla University, Pattani Campus, has been honored to receive significant support from the PSU-TUYF project — a collaboration between Prince of Songkla University and the TUYF Charitable Trust Fund.",
            )}
          </p>
          <p>
            {t(
              "เพื่อจัดทำโครงการที่มุ่งเน้นการยกระดับคุณภาพการศึกษาและการวิจัยในสาขาคณิตศาสตร์ โดยปัจจุบันสาขาวิชาฯ ได้รับทุนสนับสนุนเพื่อจัดทำโครงการแบ่งออกเป็น 3 โครงการหลัก",
              "These initiatives are dedicated to elevating the quality of education and research in mathematics. The department currently receives funding for three main projects.",
            )}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { value: t("2564", "2021"), label: t("ปีที่เริ่มต้น", "Started") },
            { value: "3", label: t("โครงการหลัก", "Main Projects") },
            { value: "2", label: t("วิทยาเขต", "Campuses") },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card px-5 py-6 text-center"
            >
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
