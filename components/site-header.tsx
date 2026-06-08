"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { useLanguage, useT } from "@/components/language-context"

type NavChild = { label: string; href: string }
type NavLink = { label: string; href: string; children?: NavChild[] }

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [mobileSub, setMobileSub] = useState<string | null>(null)
  const { lang, setLang } = useLanguage()
  const t = useT()

  const navLinks: NavLink[] = [
    { label: t("หน้าแรก", "Home"), href: "#home" },
    {
      label: "MSCD",
      href: "#mscd",
      children: [
        { label: "B.Sc. Scholarships", href: "#mscd-0" },
        { label: "Student Improvement", href: "#mscd-1" },
        { label: "Teacher Improvement", href: "#mscd-2" },
      ],
    },
    {
      label: "MGSS",
      href: "#mgss",
      children: [
        { label: "Ph.D. Student Hatyai", href: "#mgss-0" },
        { label: "M.Sc. Student Hatyai", href: "#mgss-1" },
        { label: "M.Sc. Students Pattani", href: "#mgss-2" },
      ],
    },
    {
      label: "Algebra Enrichment",
      href: "#algebra",
      children: [
        { label: "Algebra Center", href: "#algebra-0" },
        { label: "Scholarships", href: "#algebra-1" },
        { label: "Algebra Camps", href: "#algebra-2" },
        { label: "Exchange Staff", href: "#algebra-3" },
      ],
    },
    { label: t("เกี่ยวกับ PSU-TUYF", "About PSU-TUYF"), href: "#about" },
    { label: t("ติดต่อ", "Contact"), href: "#footer" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6">
        <a href="#home" className="flex items-center gap-2.5">
          {/* แสดงรูปภาพโลโก้ PSU-TUYF แทนตัวอักษร P เดิม */}
          <img
            src="/images/logo-psu-tuyf.png"
            alt="PSU-TUYF Logo"
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
                  href={link.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </a>
                <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-lg">
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
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
                href={link.href}
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
                      href={link.href}
                      onClick={() => setOpen(false)}
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
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
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
                  href={link.href}
                  onClick={() => setOpen(false)}
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
