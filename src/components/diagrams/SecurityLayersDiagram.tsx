
import { HandDrawnDiagram } from "./HandDrawnDiagram";

export function SecurityLayersDiagram() {
  return (
    <HandDrawnDiagram 
      title="LLM Security Defense Layers" 
      caption="Multi-layered security approach for protecting LLM systems"
    >
      <svg className="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        {/* Concentric security layers */}
        <g transform="translate(300, 200)">
          {/* Outer layer - Monitoring & Detection */}
          <circle cx="0" cy="0" r="180" fill="none" stroke="#f08c00" strokeWidth="3" strokeDasharray="8 4" />
          <text x="0" y="-160" textAnchor="middle" fill="#f08c00" fontSize="16" fontWeight="bold">Monitoring & Detection</text>
          
          {/* Layer 4 - Access Control */}
          <circle cx="0" cy="0" r="140" fill="none" stroke="#fa5252" strokeWidth="3" />
          <text x="0" y="-120" textAnchor="middle" fill="#fa5252" fontSize="16" fontWeight="bold">Access Control</text>
          
          {/* Layer 3 - Input/Output Filtering */}
          <circle cx="0" cy="0" r="100" fill="none" stroke="#be4bdb" strokeWidth="3" />
          <text x="0" y="-80" textAnchor="middle" fill="#be4bdb" fontSize="16" fontWeight="bold">Input/Output Filtering</text>
          
          {/* Layer 2 - System Prompts */}
          <circle cx="0" cy="0" r="60" fill="none" stroke="#15aabf" strokeWidth="3" />
          <text x="0" y="-40" textAnchor="middle" fill="#15aabf" fontSize="16" fontWeight="bold">System Prompts</text>
          
          {/* Core - LLM */}
          <circle cx="0" cy="0" r="30" fill="none" stroke="#40c057" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#40c057" fontSize="16" fontWeight="bold">LLM</text>
          
          {/* Security elements */}
          {/* Layer 1 elements - simple shapes */}
          <g>
            <rect x="-15" y="-15" width="10" height="10" fill="#40c057" />
            <rect x="5" y="-15" width="10" height="10" fill="#40c057" />
            <rect x="-15" y="5" width="10" height="10" fill="#40c057" />
            <rect x="5" y="5" width="10" height="10" fill="#40c057" />
          </g>
          
          {/* Layer 2 elements - System prompts */}
          <g>
            <text x="-45" y="10" fill="#15aabf" fontSize="9">Role Definition</text>
            <text x="15" y="30" fill="#15aabf" fontSize="9">Safety Rules</text>
          </g>
          
          {/* Layer 3 elements - Input/Output Filtering */}
          <g>
            <rect x="-80" y="70" width="40" height="15" rx="2" fill="none" stroke="#be4bdb" strokeWidth="1.5" />
            <text x="-60" y="80" textAnchor="middle" dominantBaseline="middle" fill="#be4bdb" fontSize="9">Content Filter</text>
            
            <rect x="40" y="70" width="40" height="15" rx="2" fill="none" stroke="#be4bdb" strokeWidth="1.5" />
            <text x="60" y="80" textAnchor="middle" dominantBaseline="middle" fill="#be4bdb" fontSize="9">PII Detection</text>
          </g>
          
          {/* Layer 4 elements - Access Control */}
          <g>
            <rect x="-120" y="-20" width="30" height="20" rx="3" fill="none" stroke="#fa5252" strokeWidth="1.5" />
            <text x="-105" y="-10" textAnchor="middle" dominantBaseline="middle" fill="#fa5252" fontSize="9">Auth</text>
            
            <rect x="90" y="-20" width="40" height="20" rx="3" fill="none" stroke="#fa5252" strokeWidth="1.5" />
            <text x="110" y="-10" textAnchor="middle" dominantBaseline="middle" fill="#fa5252" fontSize="9">Rate Limit</text>
          </g>
          
          {/* Layer 5 elements - Monitoring */}
          <g>
            <rect x="-140" y="-100" width="60" height="20" rx="3" fill="none" stroke="#f08c00" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="-110" y="-90" textAnchor="middle" dominantBaseline="middle" fill="#f08c00" fontSize="9">Anomaly Detection</text>
            
            <rect x="80" y="-100" width="60" height="20" rx="3" fill="none" stroke="#f08c00" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="110" y="-90" textAnchor="middle" dominantBaseline="middle" fill="#f08c00" fontSize="9">Audit Logging</text>
          </g>
        </g>
        
        {/* Legend */}
        <g transform="translate(20, 380)">
          <text x="0" y="0" fill="#cccccc" fontSize="11">Defense in Depth: Multiple security layers working together</text>
        </g>
      </svg>
    </HandDrawnDiagram>
  );
}
