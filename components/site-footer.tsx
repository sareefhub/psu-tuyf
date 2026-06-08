"use client"

import { MapPin, Mail, Phone } from "lucide-react"
import { useT } from "@/components/language-context"

export function SiteFooter() {
  const t = useT()

  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="text-xl font-bold">
              PSU<span className="text-accent">-TUYF</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              {t(
                "สาขาวิชาคณิตศาสตร์และวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยสงขลานครินทร์",
                "Department of Mathematics and Computer Science, Faculty of Science and Technology, Prince of Songkla University.",
              )}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              {t("โครงการ", "Projects")}
            </h3>
            {/* ลิงก์โครงการที่ถูกระงับการนำทางชั่วคราวด้วย e.preventDefault() เนื่องจากยังไม่มีหน้าข้อมูลย่อย */}
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="#mscd"
                  onClick={(e) => e.preventDefault()}
                  className="transition-colors hover:text-accent"
                >
                  MSCD
                </a>
              </li>
              <li>
                <a
                  href="#mgss"
                  onClick={(e) => e.preventDefault()}
                  className="transition-colors hover:text-accent"
                >
                  MGSS
                </a>
              </li>
              <li>
                <a
                  href="#algebra"
                  onClick={(e) => e.preventDefault()}
                  className="transition-colors hover:text-accent"
                >
                  Algebra Enrichment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              {t("ติดต่อ", "Contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>
                  {t(
                    "มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตปัตตานี",
                    "Prince of Songkla University, Pattani Campus",
                  )}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-none text-accent" />
                <span>algebra-center@psu.ac.th</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-none text-accent" />
                <span>+66 73 313 928</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          {t(
            `© ${new Date().getFullYear()} PSU-TUYF · The TUYF Charitable Trust Fund. สงวนลิขสิทธิ์`,
            `© ${new Date().getFullYear()} PSU-TUYF · The TUYF Charitable Trust Fund. All rights reserved.`,
          )}
        </div>
      </div>
    </footer>
  )
}
