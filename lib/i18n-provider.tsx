"use client"

import { useEffect, useState, type ReactNode } from "react"
import i18n from "i18next"
import { I18nextProvider, initReactI18next } from "react-i18next"
import * as id from "../locales/id"
import * as en from "../locales/en"

const ns = Object.keys(id) as (keyof typeof id)[]
export const defaultNS: (typeof ns)[number] = "common"

export const resources = { id, en }

const initI18n = (lang: string) => {
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
      ns,
      resources,
      lng: lang,
      fallbackLng: "id",
      interpolation: { escapeValue: false },
      compatibilityJSON: "v4",
    })
  }
}

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Load from localStorage only on client
    const savedLang = localStorage.getItem("lang") ?? "id"
    initI18n(savedLang)
    setIsReady(true)
  }, [])

  // Avoid rendering until i18n is fully ready
  if (!isReady) return null

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
