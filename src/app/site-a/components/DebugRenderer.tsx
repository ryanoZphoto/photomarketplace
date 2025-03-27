'use client'

import { useEffect, useLayoutEffect } from 'react'

export default function DebugRenderer() {
  useEffect(() => {
    console.log('Client Render - Body classes:', document.body.className)

    // Create MutationObserver to track class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          console.log('Body class changed:', {
            oldValue: mutation.oldValue,
            newValue: document.body.className,
            timestamp: new Date().toISOString(),
            stack: new Error().stack
          })
        }
      })
    })

    observer.observe(document.body, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return null
}