
import { HandDrawnDiagram } from "./HandDrawnDiagram";

export function SelfAttentionMechanism() {
  return (
    <HandDrawnDiagram 
      title="Self-Attention Mechanism" 
      caption="How tokens attend to each other in the self-attention mechanism"
    >
      <svg className="w-full h-auto" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="attentionArrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#cccccc" />
          </marker>
        </defs>
        
        {/* Input tokens */}
        <g transform="translate(70, 50)">
          <text x="230" y="-20" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">Input Tokens</text>
          
          <rect x="0" y="0" width="60" height="40" rx="5" fill="#1e293b" stroke="#4dabf7" strokeWidth="2" />
          <text x="30" y="25" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Token 1</text>
          
          <rect x="100" y="0" width="60" height="40" rx="5" fill="#1e293b" stroke="#4dabf7" strokeWidth="2" />
          <text x="130" y="25" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Token 2</text>
          
          <rect x="200" y="0" width="60" height="40" rx="5" fill="#1e293b" stroke="#4dabf7" strokeWidth="2" />
          <text x="230" y="25" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Token 3</text>
          
          <rect x="300" y="0" width="60" height="40" rx="5" fill="#1e293b" stroke="#4dabf7" strokeWidth="2" />
          <text x="330" y="25" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Token 4</text>
          
          <rect x="400" y="0" width="60" height="40" rx="5" fill="#1e293b" stroke="#4dabf7" strokeWidth="2" />
          <text x="430" y="25" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Token 5</text>
        </g>
        
        {/* Q, K, V Projections */}
        <g transform="translate(70, 150)">
          <text x="-20" y="15" textAnchor="end" fill="#ffa94d" fontSize="14" fontWeight="bold">Q:</text>
          <rect x="0" y="0" width="460" height="30" rx="5" fill="#1e293b" stroke="#ffa94d" strokeWidth="2" />
          
          <text x="-20" y="55" textAnchor="end" fill="#ffa94d" fontSize="14" fontWeight="bold">K:</text>
          <rect x="0" y="40" width="460" height="30" rx="5" fill="#1e293b" stroke="#ffa94d" strokeWidth="2" />
          
          <text x="-20" y="95" textAnchor="end" fill="#ffa94d" fontSize="14" fontWeight="bold">V:</text>
          <rect x="0" y="80" width="460" height="30" rx="5" fill="#1e293b" stroke="#ffa94d" strokeWidth="2" />
        </g>
        
        {/* Attention Matrix */}
        <g transform="translate(200, 220)">
          <rect x="0" y="0" width="200" height="60" rx="5" fill="#1e293b" stroke="#cc5de8" strokeWidth="2" />
          <text x="100" y="25" textAnchor="middle" dominantBaseline="middle" fill="#cc5de8" fontSize="16" fontWeight="bold">Attention Matrix</text>
          <text x="100" y="45" textAnchor="middle" dominantBaseline="middle" fill="#cc5de8" fontSize="12">softmax(QK^T / √d_k)</text>
        </g>
        
        {/* Arrows from Q,K to Attention */}
        <path d="M100,195 L200,245" stroke="#ffa94d" strokeWidth="2" fill="none" markerEnd="url(#attentionArrow)" />
        <path d="M100,235 L200,245" stroke="#ffa94d" strokeWidth="2" fill="none" markerEnd="url(#attentionArrow)" />
        
        {/* Output */}
        <g transform="translate(70, 310)">
          <text x="230" y="-20" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">Output Tokens</text>
          
          <rect x="0" y="0" width="60" height="40" rx="5" fill="#1e293b" stroke="#69db7c" strokeWidth="2" />
          <text x="30" y="25" textAnchor="middle" dominantBaseline="middle" fill="#69db7c" fontSize="14">Token 1'</text>
          
          <rect x="100" y="0" width="60" height="40" rx="5" fill="#1e293b" stroke="#69db7c" strokeWidth="2" />
          <text x="130" y="25" textAnchor="middle" dominantBaseline="middle" fill="#69db7c" fontSize="14">Token 2'</text>
          
          <rect x="200" y="0" width="60" height="40" rx="5" fill="#1e293b" stroke="#69db7c" strokeWidth="2" />
          <text x="230" y="25" textAnchor="middle" dominantBaseline="middle" fill="#69db7c" fontSize="14">Token 3'</text>
          
          <rect x="300" y="0" width="60" height="40" rx="5" fill="#1e293b" stroke="#69db7c" strokeWidth="2" />
          <text x="330" y="25" textAnchor="middle" dominantBaseline="middle" fill="#69db7c" fontSize="14">Token 4'</text>
          
          <rect x="400" y="0" width="60" height="40" rx="5" fill="#1e293b" stroke="#69db7c" strokeWidth="2" />
          <text x="430" y="25" textAnchor="middle" dominantBaseline="middle" fill="#69db7c" fontSize="14">Token 5'</text>
        </g>
        
        {/* V to Output via Attention */}
        <path d="M300,260 L230,310" stroke="#cc5de8" strokeWidth="2" fill="none" markerEnd="url(#attentionArrow)" />
        <path d="M300,245 L300,310" stroke="#cc5de8" strokeWidth="2" fill="none" markerEnd="url(#attentionArrow)" />
        
        {/* Connection from V */}
        <path d="M450,245 C500,250 500,280 450,310" stroke="#ffa94d" strokeWidth="2" fill="none" markerEnd="url(#attentionArrow)" />
      </svg>
    </HandDrawnDiagram>
  );
}
