"use client"

import { useEffect, useRef, useState } from "react"

export interface TabItem {
  id: string;
  label: string;
}

interface TabNavigationProps {
  /** รายการแท็บทั้งหมด (ประกอบด้วย id และข้อความ label ที่แปลภาษาแล้ว) */
  readonly tabs: readonly TabItem[] | TabItem[];
  /** id ของแท็บที่กำลังเปิดใช้งานในปัจจุบัน */
  readonly activeTab: string;
  /** ฟังก์ชันสลับการเลือกแท็บ */
  readonly setActiveTab: (id: string) => void;
}

// คอมโพเนนต์ตัวกลางสำหรับแถบนำทางแบบแท็บแคปซูล (Global Tab Bar Navigation)
// ใช้สำหรับสลับหน้าจอรายละเอียดข้อมูลในแต่ละหน้าโครงการย่อยอย่างสวยงามและคุมธีมเดียวกัน
export function TabNavigation({ tabs, activeTab, setActiveTab }: TabNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showLeftFade, setShowLeftFade] = useState(false)
  const [showRightFade, setShowRightFade] = useState(false)

  // ฟังก์ชันคำนวณการแสดงผลของ Fade นำสายตาด้านข้าง (Scroll Affordance)
  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      // แสดงเงาฝั่งซ้ายเมื่อมีการเลื่อนไปทางขวาแล้วบางส่วน
      setShowLeftFade(scrollLeft > 8)
      // แสดงเงาฝั่งขวาเมื่อยังสามารถเลื่อนไปทางขวาได้อีก
      setShowRightFade(scrollLeft < scrollWidth - clientWidth - 8)
    }
  }

  // ซิงค์ URL Query Parameter (?tab=...) กับ State ของแท็บ
  useEffect(() => {
    // ตรวจสอบการทำงานในฝั่งไคลเอนต์ (เปรียบเทียบกับ undefined โดยตรงเพื่อหลีกเลี่ยงคำเตือนของ Linter)
    if (globalThis.window === undefined) return

    const syncTabFromUrl = () => {
      // ดึงค่าพารามิเตอร์ของแท็บจาก URL ปัจจุบัน
      const params = new URLSearchParams(globalThis.location.search)
      const tabQuery = params.get("tab")
      
      if (tabQuery && tabs.some((tab) => tab.id === tabQuery)) {
        if (activeTab !== tabQuery) {
          setActiveTab(tabQuery)
        }
      } else if (!params.has("tab") && activeTab) {
        // หากไม่มี param ให้สร้าง URL ตั้งต้นตามค่า activeTab ปัจจุบัน เพื่อให้ผู้ใช้คัดลอกลิงก์แชร์ได้ทันที
        params.set("tab", activeTab)
        const newUrl = `${globalThis.location.pathname}?${params.toString()}`
        globalThis.history.replaceState({ ...globalThis.history.state, as: newUrl, url: newUrl }, "", newUrl)
      }
    }

    syncTabFromUrl()

    // คอยฟังความเปลี่ยนแปลงของ URL เผื่อผู้ใช้กดย้อนกลับ (Back/Forward)
    globalThis.addEventListener("popstate", syncTabFromUrl)
    return () => globalThis.removeEventListener("popstate", syncTabFromUrl)
  }, [tabs, activeTab, setActiveTab])

  // คอยจับเหตุการณ์การเลื่อนและการย่อขยายหน้าจอเพื่ออัปเดตเงาเฟด
  useEffect(() => {
    const el = containerRef.current
    if (el) {
      checkScroll()
      el.addEventListener("scroll", checkScroll)
      globalThis.addEventListener("resize", checkScroll)
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScroll)
      }
      globalThis.removeEventListener("resize", checkScroll)
    }
  }, [tabs])

  // เลื่อนแท็บที่เลือกให้มาอยู่ตรงกลางมุมมองเมื่อมีการเปลี่ยนแท็บ
  useEffect(() => {
    if (containerRef.current) {
      const activeBtn = containerRef.current.querySelector('[aria-selected="true"]')
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center",
        })
      }
      // อัปเดตเงาหลังจากเลื่อน
      checkScroll()
    }
  }, [activeTab])

  // จัดการเหตุการณ์เมื่อคลิกเลือกแท็บใหม่
  const handleTabClick = (tabId: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(tabId)

    // เลื่อนปุ่มที่คลิกให้อยู่ตรงกลางสายตาบนมือถือ
    if (event?.currentTarget) {
      event.currentTarget.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
    
    // ตรวจสอบการทำงานในฝั่งไคลเอนต์ก่อนเข้าถึงข้อมูลเบราว์เซอร์ (เปรียบเทียบกับ undefined โดยตรงเพื่อหลีกเลี่ยงคำเตือนของ Linter)
    if (globalThis.window !== undefined) {
      const params = new URLSearchParams(globalThis.location.search)
      params.set("tab", tabId)
      const newUrl = `${globalThis.location.pathname}?${params.toString()}`
      
      // อัปเดต URL บนแถบ Address Bar ของเบราว์เซอร์อย่างเงียบและลื่นไหลโดยไม่กระตุกและไม่ Refresh
      globalThis.history.replaceState({ ...globalThis.history.state, as: newUrl, url: newUrl }, "", newUrl)
    }
  }

  return (
    <section className="py-8 bg-background border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-center">
          {/* กล่องควบคุมแถบนำทางและเงาเฟดนำสายตาบนหน้าจอมือถือ */}
          <div className="relative max-w-full">
            {/* เงาเฟดฝั่งซ้าย (แสดงเมื่อเลื่อนเนื้อหาไปทางขวา) */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 rounded-l-full md:hidden ${
                showLeftFade ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* เงาเฟดฝั่งขวา (แสดงเมื่อยังมีเนื้อหาเหลือให้เลื่อนไปทางขวา) */}
            <div
              className={`absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 rounded-r-full md:hidden ${
                showRightFade ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* แถบเมนูรูปแคปซูลกลมมน รองรับการเลื่อนแนวราบสำหรับหน้าจอมือถือ */}
            <div
              ref={containerRef}
              role="tablist"
              className="inline-flex items-center bg-secondary/50 border border-border/50 p-1.5 rounded-full overflow-x-auto max-w-full scrollbar-none scroll-smooth"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={(e) => handleTabClick(tab.id, e)}
                    className={`rounded-full px-3 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
