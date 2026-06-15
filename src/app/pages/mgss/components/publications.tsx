"use client"

import { useLanguage } from "@/components/language-context"
import { BookOpen, Calendar, User } from "lucide-react"

// ข้อมูลผลงานวิจัยและการตีพิมพ์ทางวิชาการจริงของโครงการ MGSS
const publications = [
  {
    authors: "Kanopthamakun, K., & Vichitkunakorn, P.",
    year: "in press",
    title: "Ramsey Numbers of Connected 5-cycle Matchings",
    journal: "Songklanakarin Journal of Science and Technology"
  },
  {
    authors: "Srimora, P., Chinram, R., & Yonthanthum, W.",
    year: "in press",
    title: "Regularity of the transformation semigroups restricted by an equivalence relation with a restricted range",
    journal: "Science & Technology Asia"
  },
  {
    authors: "Srimora, P., Chinram, R., & Yonthanthum, W.",
    year: "in press",
    title: "Regularity of the transformation semigroups with invariant sets and restricted by an equivalence relation",
    journal: "Gulf Journal of Mathematics"
  },
  {
    authors: "Intarawong, T., Yuttanan, B., & Srichan, T.",
    year: "in press",
    title: "Sum of Small Arithmetic Functions in a Floor Function Set",
    journal: "Gulf Journal of Mathematics"
  },
  {
    authors: "Petapirak, M., Khan, A.J. & Chinram, R.",
    year: "in press",
    title: "A Note on Quotient Ternary Semirings and Isomorphism Theorems",
    journal: "European Journal of Pure and Applied Mathematics"
  },
  {
    authors: "Simuen, A., Chinram, R., & Yonthanthum, W.",
    year: "2025",
    title: "Interval-Valued Picture Fuzzy Ideals of Semigroups",
    journal: "Science & Technology Asia, 30(1), 117-137"
  },
  {
    authors: "Prugsapittak, S., & Sangjan, P.",
    year: "2025",
    title: "On the Diophantine equation of the form 4x' + (m2 - 1)x = y2",
    journal: "International Journal of Mathematics and Computer Science, 20(1), 187–190"
  },
  {
    authors: "Daengpradap, P., & Vichitkunakorn, P.",
    year: "2025",
    title: "A Large Neighborhood Search for Two-picker Routing Problem with Picker Blocking Consideration",
    journal: "Conference Proceedings of the 29th (AMM 2025), Srinakharinwirot University, 334-343"
  },
  {
    authors: "Khan, A. J., Chinram, R., & Petapirak, M.",
    year: "2025",
    title: "A Note on k-Ideals in Ternary Semirings",
    journal: "European Journal of Pure and Applied Mathematics, 18(2), 6096-6096"
  },
  {
    authors: "Simuen, A., Chinram, R., Yonthanthum, W., & Iampan, A.",
    year: "2022",
    title: "Picture N-Sets and Applications in Semigroups",
    journal: "International Journal of Analysis and Applications, 20, 41"
  }
] as const;

const publicationsHeader = {
  th: {
    title: "Publication List",
    desc: "รายการผลงานวิจัยและการตีพิมพ์ทางวิชาการของนักศึกษาทุนและนักวิจัยโครงการ MGSS",
  },
  en: {
    title: "Publication List",
    desc: "Research papers and academic articles published by MGSS scholarship recipients and researchers",
  }
};

export function PublicationsSection() {
  const { lang } = useLanguage();
  const current = publicationsHeader[lang] || publicationsHeader.th;

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อแสดงข้อมูลหลัก */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {current.title}
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {current.desc}
          </p>
        </div>

        {/* รายการแสดงการ์ดผลงานตีพิมพ์ทางวิชาการ สไตล์พรีเมียมเรียบหรูคุมธีม */}
        <div className="max-w-4xl mx-auto space-y-5">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="bg-card/75 backdrop-blur-xs border border-border/40 rounded-2xl p-6 shadow-xs hover:border-accent/30 hover:bg-card transition-all duration-300 relative group"
            >
              <div className="flex flex-col gap-3">
                {/* แถบหัวการ์ด: ป้ายแสดงปีการตีพิมพ์/สถานะอย่างสวยงาม */}
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${
                    pub.year === "in press"
                      ? "bg-accent/10 text-accent border-accent/20"
                      : "bg-primary/5 text-primary border-primary/10"
                  }`}>
                    <Calendar className="h-3 w-3" />
                    {pub.year}
                  </span>
                </div>

                {/* ชื่อบทความวิจัยระดับปริญญาโท-เอก */}
                <h3 className="text-sm sm:text-base font-bold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                  {pub.title}
                </h3>

                {/* แผงข้อมูลผู้ประพันธ์วิจัยและชื่อวารสารทางวิชาการ */}
                <div className="space-y-1.5 text-2xs sm:text-xs text-muted-foreground/95">
                  <p className="font-semibold text-foreground/80 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-accent/70 shrink-0" />
                    <span>{pub.authors}</span>
                  </p>
                  <p className="italic flex items-center gap-1.5 pl-5 leading-relaxed">
                    <BookOpen className="h-3.5 w-3.5 text-muted-foreground/70 shrink-0" />
                    <span>{pub.journal}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
