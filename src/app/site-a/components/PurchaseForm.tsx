'use client'

import { useState } from "react"
import Image from "next/image"
import Script from "next/script"

export default function PurchaseForm({ templateId, templateName, price, imageUrl }: PurchaseFormProps) {
  return (
    <>
      <Script
        src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD"
        strategy="lazyOnload"
      />
      <img src="/payment-logos/paypal-logo.png" alt="PayPal" className="h-6" />
      <img src="/payment-logos/bitcoin-logo.png" alt="Bitcoin" className="h-6" />
      <img src="/payment-logos/ethereum-logo.png" alt="Ethereum" className="h-6" />
      <img src="/payment-logos/usdt-logo.png" alt="USDT" className="h-6" />
      {/* rest of your component JSX */}
    </>
  )
}
