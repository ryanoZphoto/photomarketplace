'use client'

import { useLayoutEffect } from 'react'

export function ClassInitializer() {
  useLayoutEffect(() => {
    const body = document.body
    if (body.dataset.addPerkspot === 'true') {
      body.classList.add('perkspotbx')
    }
  }, [])

  return null
}