"use client"

import { useState, type ReactNode } from "react"
import { useT } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { TabNavigation } from "@/components/tab-navigation"

import { SharedHero } from "./shared-hero"
import { SharedOverview } from "./shared-overview"
import { SharedObjectives } from "./shared-objectives"
import { SharedAnnouncements } from "./shared-announcements"
import { SharedGallery } from "./shared-gallery"
import type { SharedAnnouncementItem } from "./shared-announcements"
import type { SharedGalleryProps } from "./shared-gallery"

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
    <MainLayout className="animate-fade-in">
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
    </MainLayout>
  )
}
