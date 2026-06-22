import { useT } from "@/components/language-context"

interface GalleryFilterTabsProps {
  readonly uniqueFolders: readonly string[];
  readonly selectedFolder: string | null;
  readonly onSelectFolder: (folder: string | null) => void;
}

/**
 * คอมโพเนนต์แสดงแถบปุ่มรายชื่อโรงเรียน (ตัวกรองแกลเลอรี)
 */
export function GalleryFilterTabs({
  uniqueFolders,
  selectedFolder,
  onSelectFolder,
}: GalleryFilterTabsProps) {
  const t = useT()

  // ฟังก์ชันสกัดชื่อโรงเรียนภาษาไทยหรืออังกฤษตามระบบ i18n
  const getSchoolName = (folder: string): string => {
    const key = `schools.${folder.toLowerCase()}`
    const translated = t(key)
    return translated && translated !== key
      ? translated
      : folder.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-fade-in">
      {/* ปุ่มดึงรูปภาพภาพรวมทั้งหมด */}
      <button
        onClick={() => onSelectFolder(null)}
        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
          selectedFolder === null
            ? "bg-primary text-primary-foreground shadow-xs border-primary"
            : "text-muted-foreground hover:bg-secondary hover:text-primary border-border/50 bg-card"
        }`}
      >
        {t("ภาพรวมทั้งหมด", "All Photos")}
      </button>

      {/* ปุ่มโรงเรียนย่อยแต่ละแห่ง */}
      {uniqueFolders.map((folder) => (
        <button
          key={folder}
          onClick={() => onSelectFolder(folder)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
            selectedFolder === folder
              ? "bg-primary text-primary-foreground shadow-xs border-primary"
              : "text-muted-foreground hover:bg-secondary hover:text-primary border-border/50 bg-card"
          }`}
        >
          {getSchoolName(folder)}
        </button>
      ))}
    </div>
  )
}
