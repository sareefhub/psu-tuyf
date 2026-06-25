"use client"

import { MapPin, Mail, Phone } from "lucide-react"
import { useT } from "@/components/language-context"

export function SiteFooter() {
  const t = useT()

  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="text-xl font-bold">
              PSU<span className="text-accent">-TUYF</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              {t("footer.dept")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              {t("footer.projects")}
            </h3>
            {/* ลิงก์โครงการที่ถูกระงับการนำทางชั่วคราวด้วย e.preventDefault() เนื่องจากยังไม่มีหน้าข้อมูลย่อย */}
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="/mscd"
                  className="transition-colors hover:text-accent"
                >
                  MSCD
                </a>
              </li>
              <li>
                <a
                  href="/mgss"
                  className="transition-colors hover:text-accent"
                >
                  MGSS
                </a>
              </li>
              <li>
                <a
                  href="/algebra-enrichment"
                  className="transition-colors hover:text-accent"
                >
                  Algebra Enrichment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              {t("footer.contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{t("footer.campus")}</span>
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
          <p className="text-center w-full mx-auto">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
