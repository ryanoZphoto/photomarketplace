'use client'

import { useEffect, useLayoutEffect } from 'react'

export default function DebugRenderer() {
  // Use layout effect to catch earliest possible changes
  useLayoutEffect(() => {
    console.log('DebugRenderer - Initial mount:', {
      bodyClasses: document.body.className,
      bodyDataset: document.body.dataset,
      timestamp: new Date().toISOString()
    })
  }, [])

  useEffect(() => {
    console.log('DebugRenderer - Client hydration:', {
      bodyClasses: document.body.className,
      bodyDataset: document.body.dataset,
      timestamp: new Date().toISOString()
    })

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          console.log('DebugRenderer - Class mutation:', {
            oldValue: mutation.oldValue,
            newValue: document.body.className,
            target: (mutation.target as Element).tagName,
            timestamp: new Date().toISOString()
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