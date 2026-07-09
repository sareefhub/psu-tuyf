"use client"

import { Check } from "lucide-react"
import { useT } from "@/context/language-context"
import { CarouselWrapper } from "@/components/carousel-wrapper"

const details = [
  {
    id: "mscd",
    number: "01",
    abbr: "MSCD",
    titleKey: "programDetails.mscd.title",
    subKey: "programDetails.mscd.sub",
    descKey: "programDetails.mscd.desc",
    itemsKey: "programDetails.mscd.items",
  },
  {
    id: "mgss",
    number: "02",
    abbr: "MGSS",
    titleKey: "programDetails.mgss.title",
    subKey: "programDetails.mgss.sub",
    descKey: "programDetails.mgss.desc",
    itemsKey: "programDetails.mgss.items",
  },
  {
    id: "algebra",
    number: "03",
    abbr: "Algebra Enrichment",
    titleKey: "programDetails.algebra.title",
    subKey: "programDetails.algebra.sub",
    descKey: "programDetails.algebra.desc",
    itemsKey: "programDetails.algebra.items",
  },
]

export function ProgramDetails() {
  const t = useT()

  return (
    <section className="py-8">
      {/* ปรับขนาดความกว้างสูงสุดให้เป็น max-w-7xl เพื่อให้ขอบซ้ายขวาตรงกับส่วน HeroSection */}
      <div className="mx-auto max-w-7xl px-6 w-full">
        {/* เรียกใช้งาน CarouselWrapper เพื่อให้แสดงผลแบบสไลด์ปัดบนมือถือ และเรียงเป็นแถวแนวดิ่งบนเดสก์ท็อป */}
        <CarouselWrapper desktopLayout="list" containerClassName="w-full">
          {details.map((d) => (
            <article
              key={d.id}
              id={d.id}
              className="scroll-mt-20 rounded-3xl border border-border bg-card p-8 sm:p-10 h-[460px] md:h-auto flex flex-col justify-between hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex flex-col gap-4 h-full overflow-hidden md:overflow-visible">
                {/* ส่วนหัวของการ์ด (แสดงคงที่เสมอ) */}
                <div className="flex flex-col gap-2 shrink-0">
                  <span className="text-4xl font-extrabold text-accent/30 block font-mono">
                    {d.number}
                  </span>
                  <h3 className="text-balance text-lg font-bold leading-snug text-primary min-h-[56px] md:min-h-0 flex items-center">
                    {t(d.titleKey)}
                  </h3>
                </div>

                {/* ส่วนเนื้อหาหลัก: เลื่อนสกรอลล์ได้เฉพาะบนมือถือ แต่บนเดสก์ท็อปแสดงเนื้อหาเต็มแผ่ขยายตามจริง */}
                <div className="relative flex-1 min-h-0 md:min-h-auto">
                  <div className="h-full overflow-y-auto md:overflow-visible pr-1 space-y-4 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent pb-10 md:pb-0">
                    <p className="text-pretty text-base leading-relaxed text-muted-foreground/85">
                      {t(d.descKey)}
                    </p>
                    <ul className="space-y-3.5">
                      {(() => {
                        const items = t(d.itemsKey, { returnObjects: true })
                        const itemsArray = Array.isArray(items) ? items : []
                        return itemsArray.map((item, index) => (
                          <li
                            key={item}
                            id={`${d.id}-${index}`}
                            className="flex scroll-mt-24 items-start gap-3"
                          >
                            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="text-base leading-relaxed text-foreground">{item}</span>
                          </li>
                        ))
                      })()}
                    </ul>
                  </div>

                  {/* แผงไล่เฉดสี Fade ทับก้นกล่อง เฉพาะบนมือถือ เพื่อบ่งบอกสายตาว่ามีเนื้อหาเหลือด้านล่างให้สกรอลล์อ่านเพิ่ม (ซ่อนบนเดสก์ท็อป) */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card via-card/70 to-transparent pointer-events-none md:hidden" />
                </div>
              </div>
            </article>
          ))}
        </CarouselWrapper>
      </div>
    </section>
  )
}
