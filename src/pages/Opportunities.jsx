import React from 'react'
import { motion } from 'framer-motion'

const data = [
  { title: 'Google STEP Internship', region: 'Global', type: 'Internship', deadline: 'Mar 15, 2025', link: 'https://careers.google.com' },
  { title: 'Rhodes Scholarship', region: 'Global', type: 'Scholarship', deadline: 'Jul 31, 2025', link: 'https://www.rhodeshouse.ox.ac.uk/' },
  { title: 'ICPC Programming Contest', region: 'Global', type: 'Competition', deadline: 'Varies', link: 'https://icpc.global' },
  { title: 'UNICEF Internship Programme', region: 'Global', type: 'Internship', deadline: 'Rolling', link: 'https://www.unicef.org/careers/internships' },
]

export default function Opportunities() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Global opportunities</h1>
          <p className="text-slate-600 dark:text-slate-400">Scholarships, internships and competitions. Browse and visit official links to learn more.</p>
        </div>
        <div className="text-sm text-slate-500">No accounts or apply buttons — view only</div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="block p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:-translate-y-0.5 hover:shadow-md transition"
          >
            <div className="text-xs uppercase tracking-wide text-slate-500">{item.type} • {item.region}</div>
            <div className="mt-1 font-semibold">{item.title}</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">Deadline: {item.deadline}</div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
