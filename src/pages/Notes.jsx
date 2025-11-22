import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Notes() {
  const [notes, setNotes] = useState(['Active recall summary template', 'Cheat sheet: Calculus limits', 'Mind map: OOP concepts'])
  const [text, setText] = useState('')

  const add = () => {
    if (!text.trim()) return
    setNotes([text.trim(), ...notes])
    setText('')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Notes, mind maps and cheat sheets</h1>

      <div className="flex gap-2">
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Quick note title..." className="flex-1 border rounded px-3 py-2 bg-transparent" />
        <button onClick={add} className="px-4 py-2 rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:scale-[1.02] transition">Add</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((n, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i*0.03 }} className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:-translate-y-0.5 hover:shadow-md transition">
            <div className="font-medium">{n}</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">Content placeholder — organize detailed notes, attach files, or convert to mind maps.</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
