import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Assistant() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const ask = async () => {
    if (!question.trim()) return
    setLoading(true)
    setAnswer('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/assist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      })
      const data = await res.json()
      setAnswer(data.answer || 'No answer')
    } catch (e) {
      setAnswer('Could not reach assistant. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">AI Q&A</h1>
      <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
        <div className="flex gap-2">
          <input value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Ask about homework, exams, careers..." className="flex-1 border rounded px-3 py-2 bg-transparent" />
          <button onClick={ask} disabled={loading} className="px-4 py-2 rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 disabled:opacity-60">{loading ? 'Thinking...' : 'Ask'}</button>
        </div>
        {answer && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mt-4 text-slate-700 dark:text-slate-300">
            {answer}
          </motion.div>
        )}
      </div>
    </div>
  )
}
