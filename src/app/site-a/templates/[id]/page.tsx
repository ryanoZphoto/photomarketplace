import PurchaseForm from '../../components/PurchaseForm';

// Placeholder data for templates (replace with actual data fetching)
const templates: Record<string, { id: string; title: string; image: string; description: string; price: number }> = {
  'classic-elegant-1': {
    id: 'classic-elegant-1',
    title: 'Classic Elegant 1',
    image: '/templates/classic-elegant-1.jpg',
    description: 'A classic and elegant template.',
    price: 99,
  },
  'classic-elegant-2': {
    id: 'classic-elegant-2',
    title: 'Classic Elegant 2',
    image: '/templates/classic-elegant-2.jpg',
    description: 'A classic and elegant template.',
    price: 99,
  },
  'classic-elegant-3': {
    id: 'classic-elegant-3',
    title: 'Classic Elegant 3',
    image: '/templates/classic-elegant-3.jpg',
    description: 'A classic and elegant template.',
    price: 99,
  },
  'modern-minimal-1': {
    id: 'modern-minimal-1',
    title: 'Modern Minimal 1',
    image: '/templates/modern-minimal-1.jpg',
    description: 'A modern and minimal template.',
    price: 79,
  },
  'modern-minimal-2': {
    id: 'modern-minimal-2',
    title: 'Modern Minimal 2',
    image: '/templates/modern-minimal-2.jpg',
    description: 'A modern and minimal template.',
    price: 79,
  },
  'modern-minimal-3': {
    id: 'modern-minimal-3',
    title: 'Modern Minimal 3',
    image: '/templates/modern-minimal-3.jpg',
    description: 'A modern and minimal template.',
    price: 79,
  },
};

type PageProps = {
  params: { id: string };
};

export default function TemplatePage({ params }: PageProps) {
  const template = templates[params.id];

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{template.title}</h1>
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <img
            src={template.image}
            alt={template.title}
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-gray-600 mt-2">{template.description}</p>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          {/* Placeholder for customization options */}
          <h2 className="text-xl font-semibold mb-2">Customize</h2>
          <p className="text-gray-600 mb-4">
            Customization options will be added here.
          </p>

          <PurchaseForm price={template.price} />
        </div>
      </div>
    </main>
  );
}
