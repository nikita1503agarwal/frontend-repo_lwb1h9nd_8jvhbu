import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

function GPACalculator() {
  const [rows, setRows] = useState([{ grade: 'A', credits: 3 }])

  const gradePoints = { A: 4, B: 3, C: 2, D: 1, F: 0 }

  const gpa = useMemo(() => {
    const totalCredits = rows.reduce((s, r) => s + Number(r.credits || 0), 0)
    const totalPoints = rows.reduce((s, r) => s + (gradePoints[r.grade] || 0) * Number(r.credits || 0), 0)
    return totalCredits ? (totalPoints / totalCredits).toFixed(2) : '0.00'
  }, [rows])

  const update = (i, key, val) => {
    const next = [...rows]
    next[i] = { ...next[i], [key]: val }
    setRows(next)
  }

  return (
    <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">GPA Calculator</h3>
        <div className="text-sm text-slate-500">4.0 scale</div>
      </div>
      <div className="mt-3 space-y-2">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-3 gap-2">
            <select value={r.grade} onChange={(e)=>update(i,'grade',e.target.value)} className="border rounded px-2 py-1 bg-transparent">
              {['A','B','C','D','F'].map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            <input value={r.credits} onChange={(e)=>update(i,'credits',e.target.value)} type="number" min="0" className="border rounded px-2 py-1 bg-transparent" />
            <div className="text-sm text-slate-600 dark:text-slate-400 self-center">Points: {(gradePoints[r.grade]||0) * Number(r.credits||0)}</div>
          </div>
        ))}
        <div className="flex gap-2">
          <button onClick={()=>setRows([...rows,{grade:'A',credits:3}])} className="px-3 py-1 rounded border hover:bg-slate-50 dark:hover:bg-slate-800">Add course</button>
          <button onClick={()=>setRows([{grade:'A',credits:3}])} className="px-3 py-1 rounded border hover:bg-slate-50 dark:hover:bg-slate-800">Reset</button>
        </div>
      </div>
      <div className="mt-3 font-semibold">Estimated GPA: {gpa}</div>
    </div>
  )
}

function PlaceholderCard({ title, description }) {
  return (
    <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{description}</p>
      <div className="mt-3 text-xs text-slate-500">Coming soon</div>
    </div>
  )
}

export default function Tools() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Tools</h1>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-4">
        <GPACalculator />
        <PlaceholderCard title="Resume Builder" description="Create a clean, ATS-friendly resume with guided sections and tips." />
        <PlaceholderCard title="Timetable Generator" description="Plan your week and balance study time using blocks and priorities." />
        <PlaceholderCard title="Mind Map Builder" description="Visualize topics and link ideas to understand faster." />
      </motion.div>
    </div>
  )
}
