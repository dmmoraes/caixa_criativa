import React from 'react';

export const FriendlyRobotIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const primaryColor = '#3b82f6'; // blue-500
  const secondaryColor = '#8b5cf6'; // violet-500
  const bodyColor = '#e5e7eb'; // gray-200
  const accentColor = '#d1d5db'; // gray-300
  const eyeColor = '#1f2937'; // gray-800

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
      <title>Ilustração de um robô amigável</title>
      <g transform="translate(0 -5)">
        <defs>
          <filter id="shadow-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Shadow */}
        <ellipse cx="100" cy="180" rx="60" ry="10" fill={primaryColor} opacity="0.2" filter="url(#shadow-blur)" />

        {/* Body */}
        <rect x="50" y="90" width="100" height="80" rx="30" fill={bodyColor} stroke={accentColor} strokeWidth="4" />

        {/* Head */}
        <rect x="65" y="30" width="70" height="70" rx="20" fill={bodyColor} stroke={accentColor} strokeWidth="4" />
        
        {/* Antenna */}
        <g>
          <line x1="100" y1="30" x2="100" y2="15" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
          <circle cx="100" cy="10" r="6" fill={secondaryColor} stroke={eyeColor} strokeWidth="2"/>
        </g>

        {/* Eyes */}
        <g>
          <circle cx="85" cy="65" r="12" fill={primaryColor} />
          <circle cx="85" cy="65" r="5" fill={eyeColor} />
           <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 85 65"
            to="5 85 65"
            dur="0.5s"
            begin="0s; eyes.end+2s"
            end="eyes.begin+0.5s"
            fill="freeze"
            id="eyes"
          />
           <animateTransform
            attributeName="transform"
            type="rotate"
            from="5 85 65"
            to="0 85 65"
            dur="0.5s"
            begin="eyes.end"
            fill="freeze"
          />
        </g>
         <g>
          <circle cx="115" cy="65" r="12" fill={primaryColor} />
          <circle cx="115" cy="65" r="5" fill={eyeColor} />
            <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 115 65"
            to="-5 115 65"
            dur="0.5s"
            begin="0s; eyes2.end+2s"
            end="eyes2.begin+0.5s"
            fill="freeze"
            id="eyes2"
          />
           <animateTransform
            attributeName="transform"
            type="rotate"
            from="-5 115 65"
            to="0 115 65"
            dur="0.5s"
            begin="eyes2.end"
            fill="freeze"
          />
        </g>

        {/* Arms */}
        <g>
          <line x1="50" y1="110" x2="20" y2="90" stroke={accentColor} strokeWidth="12" strokeLinecap="round" />
          <circle cx="20" cy="90" r="10" fill={secondaryColor} />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 110"
            to="-10 50 110"
            dur="1.5s"
            begin="0s"
            repeatCount="indefinite"
            direction="alternate"
            additive="sum"
          />
        </g>
        <g>
          <line x1="150" y1="110" x2="180" y2="90" stroke={accentColor} strokeWidth="12" strokeLinecap="round" />
          <circle cx="180" cy="90" r="10" fill={secondaryColor} />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 150 110"
            to="10 150 110"
            dur="1.5s"
            begin="0s"
            repeatCount="indefinite"
            direction="alternate"
            additive="sum"
          />
        </g>

        {/* Floating Animation */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -10; 0 0"
          dur="3s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>
    </svg>
  );
};