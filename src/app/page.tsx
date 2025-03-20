import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6">
          Photography Template Marketplace
        </h1>
        <p className="text-center text-lg mb-8">
          Choose from our collection of modern, professional photography templates
        </p>
        <div className="flex justify-center">
          <a
            href="/templates"
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Templates
          </a>
        </div>
      </div>
    </main>
  );
}
