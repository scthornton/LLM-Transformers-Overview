
import { HandDrawnDiagram } from "./HandDrawnDiagram";

export function AttackVectorsDiagram() {
  return (
    <HandDrawnDiagram 
      title="LLM Security Attack Vectors" 
      caption="Common security vulnerabilities in Large Language Models"
    >
      <svg className="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        {/* Arrow definitions */}
        <defs>
          <marker id="attackArrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ff6b6b" />
          </marker>
          <marker id="defenseArrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#69db7c" />
          </marker>
        </defs>

        {/* LLM in center */}
        <g transform="translate(300, 200)">
          <circle cx="0" cy="0" r="70" fill="#1e293b" stroke="#4dabf7" strokeWidth="3" />
          <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="18" fontWeight="bold">LLM</text>
        </g>
        
        {/* Prompt Injection */}
        <g transform="translate(100, 80)">
          <rect x="0" y="0" width="120" height="60" rx="5" fill="#1e293b" stroke="#ff6b6b" strokeWidth="2" />
          <text x="60" y="35" textAnchor="middle" dominantBaseline="middle" fill="#ff6b6b" fontSize="14" fontWeight="bold">Prompt Injection</text>
          
          {/* Arrow connecting to LLM */}
          <path d="M120,30 L230,170" stroke="#ff6b6b" strokeWidth="2" fill="none" markerEnd="url(#attackArrowhead)" />
        </g>
        
        {/* Data Poisoning */}
        <g transform="translate(100, 260)">
          <rect x="0" y="0" width="120" height="60" rx="5" fill="#1e293b" stroke="#ff6b6b" strokeWidth="2" />
          <text x="60" y="35" textAnchor="middle" dominantBaseline="middle" fill="#ff6b6b" fontSize="14" fontWeight="bold">Data Poisoning</text>
          
          {/* Arrow connecting to LLM */}
          <path d="M120,30 L230,230" stroke="#ff6b6b" strokeWidth="2" fill="none" markerEnd="url(#attackArrowhead)" />
        </g>
        
        {/* Model Extraction */}
        <g transform="translate(380, 80)">
          <rect x="0" y="0" width="120" height="60" rx="5" fill="#1e293b" stroke="#ff6b6b" strokeWidth="2" />
          <text x="60" y="35" textAnchor="middle" dominantBaseline="middle" fill="#ff6b6b" fontSize="14" fontWeight="bold">Model Extraction</text>
          
          {/* Arrow connecting to LLM */}
          <path d="M80,60 L350,170" stroke="#ff6b6b" strokeWidth="2" fill="none" markerEnd="url(#attackArrowhead)" />
        </g>
        
        {/* Jailbreaking */}
        <g transform="translate(380, 260)">
          <rect x="0" y="0" width="120" height="60" rx="5" fill="#1e293b" stroke="#ff6b6b" strokeWidth="2" />
          <text x="60" y="35" textAnchor="middle" dominantBaseline="middle" fill="#ff6b6b" fontSize="14" fontWeight="bold">Jailbreaking</text>
          
          {/* Arrow connecting to LLM */}
          <path d="M80,30 L350,230" stroke="#ff6b6b" strokeWidth="2" fill="none" markerEnd="url(#attackArrowhead)" />
        </g>
        
        {/* Defenses */}
        <g transform="translate(200, 340)">
          <rect x="0" y="0" width="200" height="40" rx="5" fill="#1e293b" stroke="#69db7c" strokeWidth="2" />
          <text x="100" y="25" textAnchor="middle" dominantBaseline="middle" fill="#69db7c" fontSize="16" fontWeight="bold">Security Guardrails</text>
          
          {/* Arrow connecting to LLM */}
          <path d="M100,0 L270,260" stroke="#69db7c" strokeWidth="2" fill="none" markerEnd="url(#defenseArrowhead)" />
        </g>
      </svg>
    </HandDrawnDiagram>
  );
}
