
import { HandDrawnDiagram } from "./HandDrawnDiagram";

export function TransformerArchitecture() {
  return (
    <HandDrawnDiagram 
      title="Transformer Architecture" 
      caption="High-level view of the transformer architecture showing encoder and decoder components"
    >
      <svg className="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        {/* Definitions for arrows */}
        <defs>
          <marker id="transformerArrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#cccccc" />
          </marker>
        </defs>
        
        {/* Encoder */}
        <g transform="translate(100, 60)">
          <rect x="0" y="0" width="150" height="280" rx="8" fill="#1e293b" stroke="#4dabf7" strokeWidth="3" />
          <text x="75" y="-15" textAnchor="middle" fill="#4dabf7" fontSize="18" fontWeight="bold">Encoder</text>
          
          {/* Multi-head attention */}
          <rect x="25" y="20" width="100" height="60" rx="5" fill="#1e293b" stroke="#4dabf7" strokeWidth="2" />
          <text x="75" y="50" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Multi-Head</text>
          <text x="75" y="70" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Attention</text>
          
          {/* Add & norm */}
          <rect x="25" y="100" width="100" height="30" rx="5" fill="#1e293b" stroke="#4dabf7" strokeWidth="2" />
          <text x="75" y="115" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Add & Norm</text>
          
          {/* Feed Forward */}
          <rect x="25" y="150" width="100" height="60" rx="5" fill="#1e293b" stroke="#4dabf7" strokeWidth="2" />
          <text x="75" y="180" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Feed Forward</text>
          
          {/* Add & norm */}
          <rect x="25" y="230" width="100" height="30" rx="5" fill="#1e293b" stroke="#4dabf7" strokeWidth="2" />
          <text x="75" y="245" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Add & Norm</text>
          
          {/* Nx */}
          <text x="140" y="275" textAnchor="end" fill="#4dabf7" fontSize="14" fontWeight="bold">Nx</text>
        </g>
        
        {/* Decoder */}
        <g transform="translate(350, 60)">
          <rect x="0" y="0" width="150" height="280" rx="8" fill="#1e293b" stroke="#ffa94d" strokeWidth="3" />
          <text x="75" y="-15" textAnchor="middle" fill="#ffa94d" fontSize="18" fontWeight="bold">Decoder</text>
          
          {/* Masked multi-head attention */}
          <rect x="25" y="20" width="100" height="60" rx="5" fill="#1e293b" stroke="#ffa94d" strokeWidth="2" />
          <text x="75" y="40" textAnchor="middle" dominantBaseline="middle" fill="#ffa94d" fontSize="12">Masked</text>
          <text x="75" y="60" textAnchor="middle" dominantBaseline="middle" fill="#ffa94d" fontSize="12">Multi-Head</text>
          <text x="75" y="80" textAnchor="middle" dominantBaseline="middle" fill="#ffa94d" fontSize="12">Attention</text>
          
          {/* Add & norm */}
          <rect x="25" y="100" width="100" height="30" rx="5" fill="#1e293b" stroke="#ffa94d" strokeWidth="2" />
          <text x="75" y="115" textAnchor="middle" dominantBaseline="middle" fill="#ffa94d" fontSize="14">Add & Norm</text>
          
          {/* Cross-attention */}
          <rect x="25" y="150" width="100" height="40" rx="5" fill="#1e293b" stroke="#ffa94d" strokeWidth="2" />
          <text x="75" y="170" textAnchor="middle" dominantBaseline="middle" fill="#ffa94d" fontSize="14">Cross-Attention</text>
          
          {/* Add & norm */}
          <rect x="25" y="210" width="100" height="30" rx="5" fill="#1e293b" stroke="#ffa94d" strokeWidth="2" />
          <text x="75" y="225" textAnchor="middle" dominantBaseline="middle" fill="#ffa94d" fontSize="14">Add & Norm</text>
          
          {/* Feed Forward */}
          <rect x="25" y="260" width="100" height="30" rx="5" fill="#1e293b" stroke="#ffa94d" strokeWidth="2" />
          <text x="75" y="275" textAnchor="middle" dominantBaseline="middle" fill="#ffa94d" fontSize="14">Feed Forward</text>
          
          {/* Nx */}
          <text x="140" y="275" textAnchor="end" fill="#ffa94d" fontSize="14" fontWeight="bold">Nx</text>
        </g>
        
        {/* Connections between encoder and decoder */}
        <path d="M250,170 L350,170" fill="none" stroke="#69db7c" strokeWidth="3" markerEnd="url(#transformerArrow)" />
        
        {/* Input & Output */}
        <g transform="translate(100, 370)">
          <rect x="0" y="0" width="150" height="30" rx="5" fill="#1e293b" stroke="#4dabf7" strokeWidth="2" />
          <text x="75" y="20" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Input Embeddings</text>
          <path d="M75,0 L75,-30" stroke="#4dabf7" strokeWidth="2" markerEnd="url(#transformerArrow)" />
        </g>
        
        <g transform="translate(350, 370)">
          <rect x="0" y="0" width="150" height="30" rx="5" fill="#1e293b" stroke="#ffa94d" strokeWidth="2" />
          <text x="75" y="20" textAnchor="middle" dominantBaseline="middle" fill="#ffa94d" fontSize="14">Output Embeddings</text>
          <path d="M75,0 L75,-30" stroke="#ffa94d" strokeWidth="2" markerEnd="url(#transformerArrow)" />
        </g>
      </svg>
    </HandDrawnDiagram>
  );
}
