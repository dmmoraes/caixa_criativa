import React from 'react';

export const EnergyRobotIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
      <title>Ilustração de um robô de energia amigável</title>
      <defs>
        <linearGradient id="aurora-gradient-robot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8A3FFC' }} />
          <stop offset="50%" style={{ stopColor: '#F53D9A' }} />
          <stop offset="100%" style={{ stopColor: '#33FFD1' }} />
        </linearGradient>
        <filter id="glow-filter-robot" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="core-glow-filter-robot" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
           <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Group for floating animation */}
      <g>
        <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -8; 0 0"
            dur="4s"
            repeatCount="indefinite"
            additive="sum"
            />
        
        {/* Shadow */}
        <ellipse cx="100" cy="185" rx="45" ry="8" fill="url(#aurora-gradient-robot)" opacity="0.2" filter="url(#glow-filter-robot)" />

        {/* Body */}
        <rect x="70" y="90" width="60" height="60" rx="20"
              fill="none"
              stroke="url(#aurora-gradient-robot)"
              strokeWidth="3"
              filter="url(#glow-filter-robot)"
              />

        {/* Head */}
         <rect x="75" y="40" width="50" height="45" rx="15"
              fill="none"
              stroke="url(#aurora-gradient-robot)"
              strokeWidth="3"
              filter="url(#glow-filter-robot)"
              />
        {/* Eye */}
        <line x1="88" y1="63" x2="112" y2="63" stroke="url(#aurora-gradient-robot)" strokeWidth="3.5" strokeLinecap="round" filter="url(#glow-filter-robot)" />

         {/* Core */}
        <circle cx="100" cy="120" r="12" fill="url(#aurora-gradient-robot)" filter="url(#core-glow-filter-robot)">
             <animate
                attributeName="r"
                values="10;13;10"
                dur="3s"
                repeatCount="indefinite"
                begin="0s"
              />
              <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur="3s"
                repeatCount="indefinite"
                begin="0s"
              />
        </circle>

        {/* Floating Hands */}
         <g>
            <circle cx="45" cy="115" r="10"
                fill="none"
                stroke="url(#aurora-gradient-robot)"
                strokeWidth="3"
                filter="url(#glow-filter-robot)"
                />
             <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 -4; 0 0"
                dur="2.5s"
                repeatCount="indefinite"
                direction="alternate"
                additive="sum"
                />
        </g>
         <g>
            <circle cx="155" cy="115" r="10"
                fill="none"
                stroke="url(#aurora-gradient-robot)"
                strokeWidth="3"
                filter="url(#glow-filter-robot)"
                />
            <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 4; 0 0"
                dur="2.5s"
                repeatCount="indefinite"
                direction="alternate"
                additive="sum"
                />
        </g>
      </g>
    </svg>
  );
};

export default EnergyRobotIllustration;
