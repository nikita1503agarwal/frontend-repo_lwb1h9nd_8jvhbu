import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Opportunities from './pages/Opportunities'
import Tools from './pages/Tools'
import Notes from './pages/Notes'
import Assistant from './pages/Assistant'
import Career from './pages/Career'
import Dashboard from './pages/Dashboard'
import { Providers, useTheme } from './components/Providers'

function AppShell() {
  const { theme } = useTheme()
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/career" element={<Career />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200/60 dark:border-slate-800/60 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Student Platform • Built for learners worldwide
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Providers>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </Providers>
  )
}
