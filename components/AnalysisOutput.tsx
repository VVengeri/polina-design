
import React from 'react';
import type { Analysis } from '../types';

interface AnalysisOutputProps {
  analysis: Analysis;
}

const AnalysisCard: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold text-indigo-700 mb-2">{title}</h3>
        {children}
    </div>
);

const AnalysisOutput: React.FC<AnalysisOutputProps> = ({ analysis }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900">{analysis.title}</h2>
        <p className="text-lg text-slate-600">{analysis.companyName}</p>
      </div>

      <AnalysisCard title="Executive Summary">
        <p className="text-slate-700">{analysis.summary}</p>
      </AnalysisCard>

       <AnalysisCard title="Brand Identity">
         <p className="text-slate-600 mb-3">{analysis.brandIdentity.logoDescription}</p>
         <div className="flex flex-wrap gap-4 items-center">
            {analysis.brandIdentity.colorPalette.map((color) => (
              <div key={color.hex} className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-full border border-slate-300" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div>
                    <p className="font-semibold text-sm text-slate-800">{color.name}</p>
                    <p className="text-xs text-slate-500 font-mono">{color.hex}</p>
                </div>
              </div>
            ))}
         </div>
      </AnalysisCard>

      <AnalysisCard title="Key Sections">
        <ul className="space-y-3">
          {analysis.keySections.map((section, index) => (
            <li key={index} className="border-l-4 border-slate-300 pl-3">
              <p className="font-semibold text-slate-800">{section.title}</p>
              <p className="text-sm text-slate-600">{section.content}</p>
            </li>
          ))}
        </ul>
      </AnalysisCard>

       <AnalysisCard title="Competitor Analysis">
        <ul className="space-y-2">
          {analysis.competitorAnalysis.map((competitor, index) => (
            <li key={index}>
              <p><strong>{competitor.name}:</strong> <span className="text-slate-600">{competitor.description}</span></p>
            </li>
          ))}
        </ul>
      </AnalysisCard>

      <AnalysisCard title="Document UI/UX Critique">
        <div>
          <h4 className="font-semibold text-green-700">Positive Points</h4>
          <ul className="list-disc list-inside text-slate-600 text-sm mt-1 mb-3">
            {analysis.uiUxCritique.positive.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
           <h4 className="font-semibold text-amber-700">Suggestions for Improvement</h4>
          <ul className="list-disc list-inside text-slate-600 text-sm mt-1">
            {analysis.uiUxCritique.suggestions.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      </AnalysisCard>
    </div>
  );
};

export default AnalysisOutput;
