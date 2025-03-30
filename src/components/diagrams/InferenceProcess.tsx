
import { HandDrawnDiagram } from "./HandDrawnDiagram";

export function InferenceProcess() {
  return (
    <HandDrawnDiagram 
      title="LLM Inference Pipeline" 
      caption="The step-by-step process of how an LLM generates text"
    >
      <svg className="w-full h-auto" viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">        
        {/* Process flow */}
        <g>
          {/* Step 1: Tokenization */}
          <g transform="translate(40, 50)">
            <rect x="0" y="0" width="100" height="60" rx="8" fill="none" stroke="#9775fa" strokeWidth="2.5" />
            <text x="50" y="30" textAnchor="middle" dominantBaseline="middle" fill="#9775fa" fontSize="14" fontWeight="bold">Tokenization</text>
            <text x="50" y="80" textAnchor="middle" fill="#9775fa" fontSize="11">"text → tokens"</text>
          </g>
          
          {/* Step 2: Forward Pass */}
          <g transform="translate(190, 50)">
            <rect x="0" y="0" width="100" height="60" rx="8" fill="none" stroke="#9775fa" strokeWidth="2.5" />
            <text x="50" y="30" textAnchor="middle" dominantBaseline="middle" fill="#9775fa" fontSize="14" fontWeight="bold">Forward Pass</text>
            <text x="50" y="80" textAnchor="middle" fill="#9775fa" fontSize="11">"transformer layers"</text>
          </g>
          
          {/* Step 3: Token Prediction */}
          <g transform="translate(340, 50)">
            <rect x="0" y="0" width="120" height="60" rx="8" fill="none" stroke="#9775fa" strokeWidth="2.5" />
            <text x="60" y="25" textAnchor="middle" dominantBaseline="middle" fill="#9775fa" fontSize="14" fontWeight="bold">Next Token</text>
            <text x="60" y="45" textAnchor="middle" dominantBaseline="middle" fill="#9775fa" fontSize="14" fontWeight="bold">Prediction</text>
            <text x="60" y="80" textAnchor="middle" fill="#9775fa" fontSize="11">"probability distribution"</text>
          </g>
          
          {/* Step 4: Token Selection */}
          <g transform="translate(510, 50)">
            <rect x="0" y="0" width="100" height="60" rx="8" fill="none" stroke="#9775fa" strokeWidth="2.5" />
            <text x="50" y="25" textAnchor="middle" dominantBaseline="middle" fill="#9775fa" fontSize="14" fontWeight="bold">Token</text>
            <text x="50" y="45" textAnchor="middle" dominantBaseline="middle" fill="#9775fa" fontSize="14" fontWeight="bold">Selection</text>
            <text x="50" y="80" textAnchor="middle" fill="#9775fa" fontSize="11">"sampling strategies"</text>
          </g>
          
          {/* Sampling Methods */}
          <g transform="translate(510, 110)">
            <line x1="0" y1="0" x2="100" y2="0" stroke="#9775fa" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="15" y="15" fill="#9775fa" fontSize="10">Greedy</text>
            <text x="30" y="30" fill="#9775fa" fontSize="10">Beam Search</text>
            <text x="45" y="45" fill="#9775fa" fontSize="10">Temperature</text>
            <text x="60" y="60" fill="#9775fa" fontSize="10">Top-p</text>
          </g>
          
          {/* Arrows */}
          <line x1="140" y1="80" x2="190" y2="80" stroke="#dddddd" strokeWidth="2" markerEnd="url(#arrowheadInf)" />
          <line x1="290" y1="80" x2="340" y2="80" stroke="#dddddd" strokeWidth="2" markerEnd="url(#arrowheadInf)" />
          <line x1="460" y1="80" x2="510" y2="80" stroke="#dddddd" strokeWidth="2" markerEnd="url(#arrowheadInf)" />
          <path d="M400,110 C400,150 250,180 150,130" stroke="#dddddd" strokeWidth="2" strokeDasharray="6,3" markerEnd="url(#arrowheadInf)" />
          <text x="250" y="165" textAnchor="middle" fill="#dddddd" fontSize="12">Repeat until complete</text>
        </g>
        
        <defs>
          <marker id="arrowheadInf" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#dddddd" />
          </marker>
        </defs>
      </svg>
    </HandDrawnDiagram>
  );
}
