'use client'

import Link from "next/link"

type TemplateCardProps = {
  id: string
  title: string
  description: string
  price: number
  image: string
}

export function TemplateCard({ id, title, description, price, image }: TemplateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${price}</span>
          <Link
            href={`/site-a/templates/${id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Customize and Purchase
          </Link>
        </div>
      </div>
    </div>
  )
}
