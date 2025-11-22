import React from 'react'
import { motion } from 'framer-motion'

const categories = [
  { name: 'Software Engineering', tips: ['Build 2–3 projects (web, mobile, backend)', 'Master data structures & algorithms', 'Contribute to open-source'] },
  { name: 'Data Science', tips: ['Learn Python, pandas, scikit-learn', 'Create notebooks and dashboards', 'Show end-to-end projects'] },
  { name: 'Product Management', tips: ['Write product specs and user stories', 'Analyze metrics and outcomes', 'Lead campus initiatives'] },
  { name: 'Design (UI/UX)', tips: ['Practice Figma and design systems', 'Redesign popular apps', 'Explain decisions in case studies'] },
]

export default function Career() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Career guidance</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {categories.map((c, i) => (
          <motion.div key={c.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i*0.05 }} className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
            <div className="font-semibold">{c.name}</div>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              {c.tips.map(t => <li key={t}>{t}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
