import React, { createContext, useContext, useMemo, useState } from 'react'

const ThemeContext = createContext({ theme: 'light', setTheme: () => {} })
const LocaleContext = createContext({ locale: 'en', setLocale: () => {}, t: (k)=>k, languages: {} })

const translations = {
  en: {
    'Home': 'Home',
    'Opportunities': 'Opportunities',
    'Tools': 'Tools',
    'Notes': 'Notes',
    'AI Assistant': 'AI Assistant',
    'Career Guidance': 'Career Guidance',
    'Dashboard': 'Dashboard',
    'WelcomeTitle': 'A modern hub for students',
    'WelcomeSubtitle': 'Explore global opportunities, organize notes, plan your week, and get instant AI help.',
    'ExploreNow': 'Explore now',
    'ViewAll': 'View all',
    'AskAnything': 'Ask anything',
  },
  es: {
    'Home': 'Inicio',
    'Opportunities': 'Oportunidades',
    'Tools': 'Herramientas',
    'Notes': 'Notas',
    'AI Assistant': 'Asistente IA',
    'Career Guidance': 'Orientación Profesional',
    'Dashboard': 'Panel',
    'WelcomeTitle': 'Un centro moderno para estudiantes',
    'WelcomeSubtitle': 'Explora oportunidades, organiza notas y recibe ayuda instantánea.',
    'ExploreNow': 'Explorar',
    'ViewAll': 'Ver todo',
    'AskAnything': 'Pregunta lo que sea',
  },
  fr: {
    'Home': 'Accueil',
    'Opportunities': 'Opportunités',
    'Tools': 'Outils',
    'Notes': 'Notes',
    'AI Assistant': 'Assistant IA',
    'Career Guidance': 'Orientation',
    'Dashboard': 'Tableau de bord',
    'WelcomeTitle': 'Un hub moderne pour les étudiants',
    'WelcomeSubtitle': 'Découvrez des opportunités, organisez vos notes et obtenez de l\'aide IA.',
    'ExploreNow': 'Explorer',
    'ViewAll': 'Tout voir',
    'AskAnything': 'Posez une question',
  }
}

const languageNames = { en: 'EN', es: 'ES', fr: 'FR' }

export function Providers({ children }) {
  const [theme, setTheme] = useState('light')
  const [locale, setLocale] = useState('en')

  const t = useMemo(() => {
    return (key) => (translations[locale] && translations[locale][key]) || key
  }, [locale])

  const themeValue = useMemo(() => ({ theme, setTheme }), [theme])
  const localeValue = useMemo(() => ({ locale, setLocale, t, languages: languageNames }), [locale, t])

  return (
    <ThemeContext.Provider value={themeValue}>
      <LocaleContext.Provider value={localeValue}>{children}</LocaleContext.Provider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
export const useLocale = () => useContext(LocaleContext)
