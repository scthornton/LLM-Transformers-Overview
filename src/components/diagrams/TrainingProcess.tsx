
import { HandDrawnDiagram } from "./HandDrawnDiagram";

export function TrainingProcess() {
  return (
    <HandDrawnDiagram 
      title="LLM Training Process" 
      caption="The three major phases of training modern large language models"
    >
      <svg className="w-full h-auto" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
        {/* Phase 1: Pre-training */}
        <g transform="translate(70, 60)">
          <rect x="0" y="0" width="170" height="180" rx="8" fill="none" stroke="#4dabf7" strokeWidth="3" />
          <text x="85" y="-15" textAnchor="middle" fill="#4dabf7" fontSize="18" fontWeight="bold">Pre-training</text>
          
          {/* Data icon - simple rectangle */}
          <rect x="30" y="30" width="110" height="60" fill="none" stroke="#4dabf7" strokeWidth="2" />
          <text x="85" y="60" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">Massive Dataset</text>
          
          {/* Compute icon - simple rectangle */}
          <rect x="50" y="110" width="70" height="40" rx="5" fill="none" stroke="#4dabf7" strokeWidth="2" />
          <text x="85" y="130" textAnchor="middle" dominantBaseline="middle" fill="#4dabf7" fontSize="14">GPUs</text>
          
          <text x="85" y="170" textAnchor="middle" fill="#4dabf7" fontSize="12">Self-supervised learning</text>
        </g>
        
        {/* Phase 2: Fine-tuning */}
        <g transform="translate(310, 60)">
          <rect x="0" y="0" width="170" height="180" rx="8" fill="none" stroke="#69db7c" strokeWidth="3" />
          <text x="85" y="-15" textAnchor="middle" fill="#69db7c" fontSize="18" fontWeight="bold">Fine-tuning</text>
          
          {/* Task data - stacked rectangles */}
          <rect x="45" y="30" width="80" height="25" rx="5" fill="none" stroke="#69db7c" strokeWidth="2" />
          <rect x="45" y="65" width="80" height="25" rx="5" fill="none" stroke="#69db7c" strokeWidth="2" />
          <rect x="45" y="100" width="80" height="25" rx="5" fill="none" stroke="#69db7c" strokeWidth="2" />
          
          <text x="85" y="45" textAnchor="middle" dominantBaseline="middle" fill="#69db7c" fontSize="12">Task Data</text>
          <text x="85" y="80" textAnchor="middle" dominantBaseline="middle" fill="#69db7c" fontSize="12">Labeled</text>
          <text x="85" y="115" textAnchor="middle" dominantBaseline="middle" fill="#69db7c" fontSize="12">Examples</text>
          
          <text x="85" y="150" textAnchor="middle" fill="#69db7c" fontSize="12">Task-specific</text>
          <text x="85" y="170" textAnchor="middle" fill="#69db7c" fontSize="12">optimization</text>
        </g>
        
        {/* Phase 3: RLHF */}
        <g transform="translate(550, 60)">
          <rect x="0" y="0" width="170" height="180" rx="8" fill="none" stroke="#ffa94d" strokeWidth="3" />
          <text x="85" y="-15" textAnchor="middle" fill="#ffa94d" fontSize="18" fontWeight="bold">RLHF</text>
          
          {/* Human feedback icon - simple representation */}
          <g transform="translate(35, 30)">
            <circle cx="25" cy="25" r="20" fill="none" stroke="#ffa94d" strokeWidth="2" />
            <circle cx="17" cy="18" r="3" fill="#ffa94d" />
            <circle cx="33" cy="18" r="3" fill="#ffa94d" />
            <path d="M15,30 Q25,40 35,30" fill="none" stroke="#ffa94d" strokeWidth="2" />
            
            {/* Rating stars */}
            <text x="70" y="20" fill="#ffa94d" fontSize="14">★★★</text>
            <text x="70" y="40" fill="#ffa94d" fontSize="14">★★</text>
          </g>
          
          {/* Feedback loop - simple arrow */}
          <path d="M30,100 L140,100" stroke="#ffa94d" strokeWidth="2" fill="none" markerEnd="url(#trainingArrow)" />
          <path d="M30,120 L140,120" stroke="#ffa94d" strokeWidth="2" fill="none" markerStart="url(#trainingArrow)" />
          <text x="85" y="140" textAnchor="middle" fill="#ffa94d" fontSize="12">Reward Model</text>
          
          <text x="85" y="160" textAnchor="middle" fill="#ffa94d" fontSize="12">Human preference</text>
          <text x="85" y="180" textAnchor="middle" fill="#ffa94d" fontSize="12">alignment</text>
        </g>
        
        {/* Arrows connecting phases */}
        <line x1="240" y1="150" x2="310" y2="150" stroke="#cccccc" strokeWidth="2" markerEnd="url(#trainingArrow)" />
        <line x1="480" y1="150" x2="550" y2="150" stroke="#cccccc" strokeWidth="2" markerEnd="url(#trainingArrow)" />
        
        {/* References text */}
        <text x="400" y="280" textAnchor="middle" fill="#cccccc" fontSize="14">Based on training processes from recent LLM research literature</text>
        
        <defs>
          <marker id="trainingArrow" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#cccccc" />
          </marker>
        </defs>
      </svg>
    </HandDrawnDiagram>
  );
}
