import { TemplateCard } from './components/TemplateCard';

const templates = [
  {
    id: 'classic-elegant-1',
    title: 'Classic Elegant 1',
    image: '/templates/classic-elegant-1.jpg',
    description: 'A classic and elegant template.',
    price: 99,
  },
  {
    id: 'classic-elegant-2',
    title: 'Classic Elegant 2',
    image: '/templates/classic-elegant-2.jpg',
    description: 'A classic and elegant template.',
    price: 99,
  },
  {
    id: 'classic-elegant-3',
    title: 'Classic Elegant 3',
    image: '/templates/classic-elegant-3.jpg',
    description: 'A classic and elegant template.',
    price: 99,
  },
  {
    id: 'modern-minimal-1',
    title: 'Modern Minimal 1',
    image: '/templates/modern-minimal-1.jpg',
    description: 'A modern and minimal template.',
    price: 79,
  },
  {
    id: 'modern-minimal-2',
    title: 'Modern Minimal 2',
    image: '/templates/modern-minimal-2.jpg',
    description: 'A modern and minimal template.',
    price: 79,
  },
  {
    id: 'modern-minimal-3',
    title: 'Modern Minimal 3',
    image: '/templates/modern-minimal-3.jpg',
    description: 'A modern and minimal template.',
    price: 79,
  },
];

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Website Templates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            id={template.id}
            title={template.title}
            image={template.image}
            description={template.description}
            price={template.price}
          />
        ))}
      </div>
    </main>
  );
}
