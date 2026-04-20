import React, { useState } from 'react';

export const AIGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    // Logic for AI call would go here
    setResult(`AI response for: ${prompt}`);
  };

  // npm run dev

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl border border-slate-100">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text text-transparent">
        Blog Post Generator
      </h2>
      <textarea
        className="w-full mt-4 p-3 border rounded-lg focus:ring-2 focus:ring-ai-primary outline-none transition"
        placeholder="Enter a topic..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        className="w-full mt-4 bg-ai-primary text-white font-semibold py-2 rounded-lg hover:opacity-90 active:scale-[0.98] transition"
      >
        Generate Draft
      </button>
      {result && (
        <div className="mt-6 p-4 bg-slate-50 rounded-lg border-l-4 border-ai-secondary">
          <p className="text-slate-700">{result}</p>
        </div>
      )}
    </div>
  );
};