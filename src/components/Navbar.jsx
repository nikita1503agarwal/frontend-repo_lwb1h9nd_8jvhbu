import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Sun, Moon, Globe } from 'lucide-react'
import { useTheme, useLocale } from './Providers'

const NavLink = ({ to, children }) => {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
        active
          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
      }`}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { locale, setLocale, t, languages } = useLocale()

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/70 bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/" className="font-semibold text-lg">Student Platform</Link>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/">{t('Home')}</NavLink>
            <NavLink to="/opportunities">{t('Opportunities')}</NavLink>
            <NavLink to="/tools">{t('Tools')}</NavLink>
            <NavLink to="/notes">{t('Notes')}</NavLink>
            <NavLink to="/assistant">{t('AI Assistant')}</NavLink>
            <NavLink to="/career">{t('Career Guidance')}</NavLink>
            <NavLink to="/dashboard">{t('Dashboard')}</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button className="px-3 py-2 text-sm rounded-md flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Language">
                <Globe className="w-4 h-4" /> {languages[locale]}
              </button>
              <div className="absolute right-0 mt-2 w-44 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg p-1 hidden group-focus:block" />
            </div>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="md:hidden pb-3 flex flex-wrap gap-2">
          <NavLink to="/">{t('Home')}</NavLink>
          <NavLink to="/opportunities">{t('Opportunities')}</NavLink>
          <NavLink to="/tools">{t('Tools')}</NavLink>
          <NavLink to="/notes">{t('Notes')}</NavLink>
          <NavLink to="/assistant">{t('AI Assistant')}</NavLink>
          <NavLink to="/career">{t('Career Guidance')}</NavLink>
          <NavLink to="/dashboard">{t('Dashboard')}</NavLink>
        </div>
      </div>
    </header>
  )
}
