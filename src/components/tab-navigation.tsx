"use client"

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
                  onClick={() => setActiveTab(tab.id)}
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
