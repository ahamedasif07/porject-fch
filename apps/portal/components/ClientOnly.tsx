"use client"
import { useState, useEffect } from "react"

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode
}) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return (
      <div className="flex h-64 w-full items-center justify-center text-slate-400">
        Loading Chart...
      </div>
    )
  }

  return <>{children}</>
}
