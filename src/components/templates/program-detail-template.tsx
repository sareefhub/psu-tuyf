"use client"

import { useState, type ReactNode } from "react"
import { useT } from "@/context/language-context"
import { TabNavigation } from "@/components/tab-navigation"

import { SharedHero } from "@/components/shared-hero"
import { SharedOverview } from "@/components/shared-overview"
import { SharedObjectives } from "@/components/shared-objectives"
import { SharedAnnouncements } from "@/components/shared-announcements"
import { SharedGallery } from "@/components/shared-gallery"
import type { SharedAnnouncementItem } from "@/components/shared-announcements"
import type { SharedGalleryProps } from "@/components/shared-gallery"

// Re-export components and types to keep the API backward-compatible (Zero Breaking Changes)
export {
  SharedHero,
  SharedOverview,
  SharedObjectives,
  SharedAnnouncements,
  SharedGallery,
  type SharedAnnouncementItem,
  type SharedGalleryProps
}

export interface TabConfig {
  readonly id: string;
  readonly labelKey: string;
  readonly component: ReactNode;
}

interface ProgramDetailTemplateProps {
  readonly year: string;
  readonly translationKey: string;
  readonly heroTitleKey?: string;
  readonly heroSubtitleKey?: string;
  readonly overviewDescKeys?: readonly string[];
  readonly tabs: readonly TabConfig[];
  readonly defaultActiveTab?: string;
}

// 6. คอนโทรลเลอร์แม่แบบรวมร่างกลาง (ProgramDetailTemplate Controller)
export function ProgramDetailTemplate({
  year,
  translationKey,
  heroTitleKey,
  heroSubtitleKey,
  overviewDescKeys,
  tabs,
  defaultActiveTab
}: Readonly<ProgramDetailTemplateProps>) {
  const t = useT()
  const firstTabId = tabs[0]?.id ?? ""
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab ?? firstTabId)

  return (
    <>
      <SharedHero translationKey={translationKey} titleKey={heroTitleKey} subtitleKey={heroSubtitleKey} />
      <SharedOverview translationKey={translationKey} descKeys={overviewDescKeys} />
      
      <TabNavigation
        tabs={tabs.map((tab) => ({ id: tab.id, label: t(tab.labelKey) }))}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="transition-all duration-300 pb-12">
        {tabs.map((tab) => {
          if (activeTab === tab.id) {
            return <div key={tab.id}>{tab.component}</div>
          }
          return null
        })}
      </div>
    </>
  )
}
