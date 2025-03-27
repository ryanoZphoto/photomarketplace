'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [envVariables, setEnvVariables] = useState({
    API_KEY: '',
    DATABASE_URL: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEnvVariables((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Logic to save environment variables to .env file
    console.log('Saving environment variables:', envVariables);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Environment Variables</h2>
        <div className="mb-4">
          <label className="block text-gray-700">API Key</label>
          <input
            type="text"
            name="API_KEY"
            value={envVariables.API_KEY}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Database URL</label>
          <input
            type="text"
            name="DATABASE_URL"
            value={envVariables.DATABASE_URL}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </section>
      {/* Placeholder for account management */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Account Management</h2>
        <p className="text-gray-600">Account management features will be added here.</p>
      </section>
    </main>
  );
}
