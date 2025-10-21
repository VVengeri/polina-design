
import React from 'react';

interface OriginalContentViewProps {
  htmlContent: string;
}

const OriginalContentView: React.FC<OriginalContentViewProps> = ({ htmlContent }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 flex-grow">
      <h3 className="text-xl font-semibold text-slate-700 mb-3 border-b pb-2">
        Live Preview
      </h3>
      <div
        className="prose max-w-none rounded-lg border border-slate-200 p-4 bg-slate-50 overflow-auto h-96"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default OriginalContentView;
