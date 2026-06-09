"use client"

import { useLanguage } from "@/components/language-context"

// ข้อมูลข้อความหัวข้อรายการตีพิมพ์ทางวิชาการของนักศึกษาทุน MGSS
const publicationsData = {
  th: {
    title: "Publication List",
    desc: "ผลงานวิจัยและวิทยานิพนธ์ของนักศึกษาทุนโครงการ MGSS ที่ได้รับการตีพิมพ์เผยแพร่ในวารสารวิชาการระดับชาติและนานาชาติ",
  },
  en: {
    title: "Publication List",
    desc: "Research papers and academic articles published by MGSS scholarship recipients in national and international journals",
  }
};

export function PublicationsSection() {
  const { lang } = useLanguage();
  const current = publicationsData[lang] || publicationsData.th;

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
      </div>
    </section>
  );
}
