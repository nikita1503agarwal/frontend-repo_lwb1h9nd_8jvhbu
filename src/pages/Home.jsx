import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Target, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocale } from '../components/Providers'

export default function Home() {
  const { t } = useLocale()
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-5xl font-bold tracking-tight">
          {t('WelcomeTitle')}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {t('WelcomeSubtitle')}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 flex justify-center gap-3">
          <Link to="/opportunities" className="inline-flex items-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 rounded-md hover:scale-[1.02] transition">{t('ExploreNow')} <ArrowRight className="w-4 h-4" /></Link>
          <Link to="/assistant" className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 px-4 py-2 rounded-md hover:scale-[1.02] transition">{t('AskAnything')} <Sparkles className="w-4 h-4" /></Link>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {[{title: 'Opportunities', desc: 'Scholarships, internships and competitions from around the world.' , icon: Target, to: '/opportunities'},
          {title: 'Tools', desc: 'GPA calculator, resume builder and timetable generator.', icon: Sparkles, to: '/tools'},
          {title: 'Notes', desc: 'Keep notes, mind maps and concise cheat sheets.', icon: BookOpen, to: '/notes'},
          {title: 'Dashboard', desc: 'Track your learning and application progress.', icon: ArrowRight, to: '/dashboard'}].map((card, i) => (
            <motion.link key={card.title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.05 }} className="block group" href={card.to}>
              <Link to={card.to} className="block p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-3">
                  <card.icon className="w-5 h-5" />
                  <div className="font-semibold">{card.title}</div>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{card.desc}</p>
              </Link>
            </motion.link>
        ))}
      </section>
    </div>
  )
}
