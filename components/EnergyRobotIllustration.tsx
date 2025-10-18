import React from 'react';

export const EnergyRobotIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
      <title>Ilustração de um robô de energia amigável</title>
      <defs>
        {/* Gradiente global (continua igual para corpo, mãos, core, etc.) */}
        <linearGradient id="aurora-gradient-robot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8A3FFC' }} />
          <stop offset="50%" style={{ stopColor: '#F53D9A' }} />
          <stop offset="100%" style={{ stopColor: '#33FFD1' }} />
        </linearGradient>

        {/* NOVO: gradiente "fixo" no espaço do SVG, alinhado ao retângulo da cabeça */}
        {/* Faz as orelhas/olhos/antena acompanharem o mesmo degradê da cabeça */}
        <linearGradient
          id="aurora-gradient-robot-head"
          gradientUnits="userSpaceOnUse"
          x1="75" y1="40"  /* canto sup. esquerdo da cabeça */
          x2="125" y2="85" /* canto inf. direito da cabeça */
        >
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

        {/* Body (sem mudanças) */}
        <rect
          x="70" y="90" width="60" height="60" rx="20"
          fill="none"
          stroke="url(#aurora-gradient-robot)"
          strokeWidth="3"
          filter="url(#glow-filter-robot)"
        />

        {/* Head border usa o gradiente da cabeça */}
        <rect
          x="75" y="40" width="50" height="44" rx="10"
          fill="none"
          stroke="url(#aurora-gradient-robot-head)"
          strokeWidth="3"
          filter="url(#glow-filter-robot)"
        />

        {/* ===== DETALHES DA CABEÇA (todos usando o gradiente da cabeça) ===== */}
        <g id="head-details" filter="url(#glow-filter-robot)">
          {/* Orelhas (horizontais e menores) */}
          <rect x="66.4"  y="60" width="10" height="4" rx="2" fill="url(#aurora-gradient-robot-head)" />
          <rect x="123.4" y="60" width="10" height="4" rx="2" fill="url(#aurora-gradient-robot-head)" />

          {/* Olhos (pílulas verticais) */}
          <rect x="87"  y="55" width="6" height="14" rx="3" fill="url(#aurora-gradient-robot-head)" />
          <rect x="106.5" y="55" width="6" height="14" rx="3" fill="url(#aurora-gradient-robot-head)" />

          {/* Antena (para a ESQUERDA, mais grossa) */}
          <path
            d="M100 38 V 28 H 86"
            fill="none"
            stroke="url(#aurora-gradient-robot-head)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
        {/* ===== FIM DETALHES ===== */}

        {/* Core (pulso) */}
        <circle cx="100" cy="120" r="12" fill="url(#aurora-gradient-robot)" filter="url(#core-glow-filter-robot)">
          <animate attributeName="r" values="10;13;10" dur="3s" repeatCount="indefinite" begin="0s" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" begin="0s" />
        </circle>

        {/* Floating Hands */}
        <g>
          <circle cx="53" cy="115" r="10" fill="none" stroke="url(#aurora-gradient-robot)" strokeWidth="3" filter="url(#glow-filter-robot)" />
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -4; 0 0" dur="2.5s" repeatCount="indefinite" direction="alternate" additive="sum" />
        </g>
        <g>
          <circle cx="147" cy="115" r="10" fill="none" stroke="url(#aurora-gradient-robot)" strokeWidth="3" filter="url(#glow-filter-robot)" />
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 4; 0 0" dur="2.5s" repeatCount="indefinite" direction="alternate" additive="sum" />
        </g>
      </g>
    </svg>
  );
};

export default EnergyRobotIllustration;
