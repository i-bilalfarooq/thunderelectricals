"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: null, message: '' })

    const form = e.currentTarget;
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      setStatus({ type: 'success', message: 'Your request has been sent successfully!' })
      form.reset()
    } catch (error: any) {
      setStatus({ type: 'error', message: error.message || 'Failed to send the request.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8">
      <h3 className="font-outfit text-xl font-bold text-slate-900 dark:text-white">Send us a message</h3>
      
      {status.type && (
        <div className={`mt-4 p-3 rounded-md text-sm ${status.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name *</label>
            <input required id="name" name="name" type="text" className="w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-thunder-500 dark:border-slate-700 dark:focus:ring-thunder-500" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone *</label>
            <input required id="phone" name="phone" type="tel" className="w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-thunder-500 dark:border-slate-700 dark:focus:ring-thunder-500" placeholder="055 123 4567" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-slate-700 dark:text-slate-300">Service Required *</label>
          <select required id="service" name="service" className="w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-thunder-500 dark:border-slate-700 dark:bg-slate-950 dark:focus:ring-thunder-500">
            <option className="dark:bg-slate-900" value="AC Repair & Maintenance">AC Repair & Maintenance</option>
            <option className="dark:bg-slate-900" value="Washing Machine / Fridge">Washing Machine / Fridge</option>
            <option className="dark:bg-slate-900" value="Electrical Work">Electrical Work</option>
            <option className="dark:bg-slate-900" value="Other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message *</label>
          <textarea required id="message" name="message" rows={4} className="w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-thunder-500 dark:border-slate-700 dark:focus:ring-thunder-500" placeholder="Describe the issue..."></textarea>
        </div>
        <Button variant="thunder" className="w-full font-semibold" type="submit" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Request'
          )}
        </Button>
        <p className="text-center text-xs text-slate-500">For faster response, please call us directly.</p>
      </form>
    </div>
  )
}
