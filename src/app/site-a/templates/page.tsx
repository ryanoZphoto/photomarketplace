import { TemplateCard } from '@/app/components/TemplateCard'

export default function TemplatesPage() {
  const templates = [
    {
      id: '1',
      title: 'Template 1',
      description: 'A beautiful template for your needs',
      price: 29.99,
      image: '/placeholder.jpg'
    },
    // Add more templates as needed
  ]

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Templates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map(template => (
          <TemplateCard
            key={template.id}
            {...template}
          />
        ))}
      </div>
    </main>
  )
}
