import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  { title: 'Courses', value: '5', subtitle: 'Enrolled this term' },
  { title: 'Applications', value: '3', subtitle: 'Opportunities tracking' },
  { title: 'Study Hours', value: '42h', subtitle: 'This month' },
  { title: 'Notes', value: '18', subtitle: 'Active notes' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i*0.05 }} className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
            <div className="text-sm text-slate-500">{c.title}</div>
            <div className="mt-1 text-2xl font-semibold">{c.value}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">{c.subtitle}</div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.2 }} className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
        <div className="font-semibold">Progress</div>
        <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">Simple placeholders to visualize study streaks, upcoming deadlines and tasks.</div>
      </motion.div>
    </div>
  )
}
