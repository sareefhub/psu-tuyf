"use client"

import { useEffect } from "react"

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
  readonly setActiveTab: (id: any) => void;
}

// คอมโพเนนต์ตัวกลางสำหรับแถบนำทางแบบแท็บแคปซูล (Global Tab Bar Navigation)
// ใช้สำหรับสลับหน้าจอรายละเอียดข้อมูลในแต่ละหน้าโครงการย่อยอย่างสวยงามและคุมธีมเดียวกัน
export function TabNavigation({ tabs, activeTab, setActiveTab }: TabNavigationProps) {
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

  // จัดการเหตุการณ์เมื่อคลิกเลือกแท็บใหม่
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    
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
          {/* กล่องแถบเมนูรูปแคปซูลกลมมน รองรับการเลื่อนแนวราบสำหรับหน้าจอมือถือ */}
          <div className="inline-flex items-center bg-secondary/50 border border-border/50 p-1.5 rounded-full overflow-x-auto max-w-full scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`rounded-full px-3 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-accent/15 text-accent shadow-sm"
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
    </section>
  );
}
