import { ChevronLeft, ChevronRight } from "lucide-react"
import { useT } from "@/components/language-context"

interface GalleryPaginationProps {
  readonly currentPage: number;
  readonly totalPages: number;
  readonly onPageChange: (page: number) => void;
}

/**
 * คอมโพเนนต์แผงควบคุมการแบ่งหน้าแกลเลอรีรูปภาพพร้อมจุดไข่ปลา (...)
 */
export function GalleryPagination({
  currentPage,
  totalPages,
  onPageChange,
}: GalleryPaginationProps) {
  const t = useT()

  // คำนวณช่วงของแถบตัวเลขหน้าแบบมีจุดไข่ปลา
  const getPaginationRange = () => {
    const range: { type: "page" | "ellipsis"; value: number | string; key: string }[] = []
    const delta = 1 // จำนวนหน้าที่แสดงขนาบข้างจากหน้าปัจจุบัน

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        range.push({ type: "page", value: i, key: `page-${i}` })
      }
      return range
    }

    // แสดงปุ่มหน้าแรกเสมอ
    range.push({ type: "page", value: 1, key: "page-1" })

    const left = currentPage - delta
    const right = currentPage + delta

    // แสดงจุดไข่ปลาซ้ายหากเลขห่างจากหน้าแรกเกิน 2 หน้า
    if (left > 2) {
      range.push({ type: "ellipsis", value: "...", key: "ellipsis-left" })
    }

    // วนลูปแสดงหน้าปัจจุบันและหน้าขนาบข้าง
    const start = Math.max(2, left)
    const end = Math.min(totalPages - 1, right)
    for (let i = start; i <= end; i++) {
      range.push({ type: "page", value: i, key: `page-${i}` })
    }

    // แสดงจุดไข่ปลาขวาหากเลขห่างจากหน้าสุดท้ายเกิน 2 หน้า
    if (right < totalPages - 1) {
      range.push({ type: "ellipsis", value: "...", key: "ellipsis-right" })
    }

    // แสดงปุ่มหน้าสุดท้ายเสมอ
    if (totalPages > 1) {
      range.push({ type: "page", value: totalPages, key: `page-${totalPages}` })
    }

    return range
  }

  return (
    <div className="flex justify-center mt-12 animate-fade-in">
      <div className="inline-flex items-center gap-1 bg-card border border-border/60 shadow-xs rounded-xl p-1">
        {/* ปุ่มหน้าก่อนหน้า */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="inline-flex h-9 w-9 sm:w-auto sm:px-3 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed text-xs font-bold gap-1"
          aria-label="หน้าก่อนหน้า"
        >
          <ChevronLeft className="h-4 w-4 shrink-0" />
          <span className="hidden sm:inline">{t("ก่อนหน้า", "Previous")}</span>
        </button>

        {/* รายการตัวเลขหน้าหรือจุดไข่ปลา */}
        {getPaginationRange().map((item) => {
          if (item.type === "ellipsis") {
            return (
              <span
                key={item.key}
                className="inline-flex h-9 w-9 items-center justify-center text-sm text-muted-foreground/50 select-none font-medium"
              >
                ...
              </span>
            )
          }

          const isActive = currentPage === item.value
          return (
            <button
              key={item.key}
              onClick={() => onPageChange(Number(item.value))}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : "text-muted-foreground hover:bg-secondary hover:text-primary"
              }`}
            >
              {item.value}
            </button>
          )
        })}

        {/* ปุ่มหน้าถัดไป */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="inline-flex h-9 w-9 sm:w-auto sm:px-3 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed text-xs font-bold gap-1"
          aria-label="หน้าถัดไป"
        >
          <span className="hidden sm:inline">{t("ถัดไป", "Next")}</span>
          <ChevronRight className="h-4 w-4 shrink-0" />
        </button>
      </div>
    </div>
  )
}
