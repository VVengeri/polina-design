
import React from 'react';

interface HtmlInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const HtmlInput: React.FC<HtmlInputProps> = ({ value, onChange }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
      <label htmlFor="html-input" className="block text-xl font-semibold text-slate-700 mb-3">
        HTML Document
      </label>
      <textarea
        id="html-input"
        value={value}
        onChange={onChange}
        placeholder="Paste your HTML content here..."
        className="w-full h-64 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-mono text-sm"
      />
    </div>
  );
};

export default HtmlInput;
