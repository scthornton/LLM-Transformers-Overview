
import React from "react";

interface HandDrawnDiagramProps {
  title: string;
  children: React.ReactNode;
  width?: string;
  caption?: string;
}

export function HandDrawnDiagram({ 
  title, 
  children, 
  width = "full", 
  caption 
}: HandDrawnDiagramProps) {
  return (
    <figure className={`my-12 w-${width} mx-auto`}>
      <div className="bg-slate-900 border-2 border-gray-600 dark:border-gray-500 rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6 border-b border-gray-600 dark:border-gray-500 pb-2">
          <h4 className="text-xl font-bold font-mono text-blue-300">{title}</h4>
        </div>
        <div>
          {children}
        </div>
      </div>
      {caption && (
        <figcaption className="text-center mt-3 text-sm text-gray-500 dark:text-gray-400 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
