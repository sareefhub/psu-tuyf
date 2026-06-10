"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { useLanguage, useT } from "@/components/language-context"
import { usePathname } from "next/navigation"
import Image from "next/image"

type NavChild = { label: string; href: string }
type NavLink = { label: string; href: string; children?: NavChild[] }

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [mobileSub, setMobileSub] = useState<string | null>(null)
  const { lang, setLang } = useLanguage()
  const t = useT()
  const pathname = usePathname()
  const isHome = pathname === "/"

  const navLinks: NavLink[] = [
    { label: t("nav.home"), href: "#home" },
    {
      label: "MSCD",
      href: "/mscd",
      children: [
        { label: "B.Sc. Scholarships", href: "/mscd/bsc-scholarships" },
        { label: "Student Improvement", href: "/mscd/student-improvement" },
        { label: "Teacher Improvement", href: "/mscd/teacher-improvement" },
      ],
    },
    {
      label: "MGSS",
      href: "/mgss",
      children: [
        { label: "M.Sc. Students Pattani", href: "/mgss/msc-pattani" },
        { label: "M.Sc. Student Hatyai", href: "/mgss/msc-hatyai" },
        { label: "Ph.D. Student Hatyai", href: "/mgss/phd-hatyai" },
      ],
    },
    {
      label: "Algebra Enrichment",
      href: "/algebra-enrichment", // ลิงก์ไปยังหน้าหลักของโครงการพีชคณิต
      children: [
        { label: "Algebra Center", href: "/algebra-enrichment/algebra-center" }, // ลิงก์ไปยังศูนย์พีชคณิต
        { label: "Scholarships", href: "/algebra-enrichment/scholarships" }, // ลิงก์ไปยังหน้ารายการทุน
        { label: "Algebra Camps", href: "/algebra-enrichment/algebra-camps" }, // ลิงก์ไปยังค่ายคณิตศาสตร์
        { label: "Exchange Staff", href: "/algebra-enrichment/exchange-staff" }, // ลิงก์ไปยังการแลกเปลี่ยนบุคลากร
      ],
    },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ]

  // ฟังก์ชันคำนวณพาธจริงตามตำแหน่งหน้าปัจจุบัน
  const getHref = (href: string) => {
    if (!isHome && href.startsWith("#")) {
      return `/${href}`
    }
    return href
  }

  // ฟังก์ชันป้องกันไม่ให้ลิงก์นำทางไปยังจุดอื่นเนื่องจากยังไม่มีหน้าข้อมูลย่อยแยกต่างหาก
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith("#") && href !== "#home") {
      e.preventDefault() // ป้องกันไม่ให้หน้าจอสไลด์หรือเปลี่ยนตำแหน่ง
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6">
        <a href={getHref("#home")} className="flex items-center gap-2.5">
          {/* แสดงรูปภาพโลโก้ PSU-TUYF แทนตัวอักษร P เดิม */}
          <Image
            src="/images/logo/logo-psu-tuyf.png"
            alt="PSU-TUYF Logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <span className="text-lg font-semibold tracking-tight text-primary">
            PSU<span className="text-accent">-TUYF</span>
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <a
                  href={getHref(link.href)}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </a>
                <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-lg">
                    {link.children.map((child) => (
                      <a
                        key={`${child.label}-${child.href}`}
                        href={getHref(child.href)}
                        onClick={(e) => handleLinkClick(e, child.href)}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={getHref(link.href)}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <LanguageToggle lang={lang} setLang={setLang} />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <div className="flex items-center">
                    <a
                      href={getHref(link.href)}
                      onClick={(e) => {
                        handleLinkClick(e, link.href)
                        if (link.href === "#home") setOpen(false)
                      }}
                      className="flex-1 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {link.label}
                    </a>
                    <button
                      onClick={() => setMobileSub((v) => (v === link.href ? null : link.href))}
                      aria-label={`Toggle ${link.label} submenu`}
                      aria-expanded={mobileSub === link.href}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileSub === link.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {mobileSub === link.href && (
                    <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                      {link.children.map((child) => (
                        <a
                          key={`${child.label}-${child.href}`}
                          href={getHref(child.href)}
                          onClick={(e) => {
                            handleLinkClick(e, child.href)
                            setOpen(false)
                          }}
                          className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={(e) => {
                    handleLinkClick(e, link.href)
                    setOpen(false)
                  }}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </nav>
      )}
    </header>
  )
}

function LanguageToggle({
  lang,
  setLang,
}: Readonly<{
  lang: "th" | "en"
  setLang: (lang: "th" | "en") => void
}>) {
  return (
    <div className="flex items-center rounded-full border border-border bg-secondary/60 p-0.5 text-xs font-semibold">
      <button
        onClick={() => setLang("th")}
        aria-pressed={lang === "th"}
        className={`rounded-full px-3 py-1.5 transition-colors cursor-pointer ${
          lang === "th"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-primary"
        }`}
      >
        ไทย
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1.5 transition-colors cursor-pointer ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-primary"
        }`}
      >
        EN
      </button>
    </div>
  )
}
