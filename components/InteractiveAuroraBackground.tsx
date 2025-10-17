import React, { useState, useEffect, useRef } from 'react';

const InteractiveAuroraBackground: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [useLoop, setUseLoop] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // This component relies on browser APIs, so we ensure it only runs on the client.
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const pointerFine = window.matchMedia('(pointer: fine)').matches;
    setUseLoop(!pointerFine);

    if (pointerFine) {
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isClient]);

  useEffect(() => {
    if (!isClient || !useLoop) return;
    let start: number | null = null;
    const amplitudeX = Math.min(window.innerWidth, 800) * 0.25;
    const amplitudeY = Math.min(window.innerHeight, 800) * 0.2;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const tick = (t: number) => {
      if (start === null) start = t;
      const elapsed = (t - start) / 1000; // seconds
      const x = centerX + amplitudeX * Math.sin(elapsed * 0.6);
      const y = centerY + amplitudeY * Math.cos(elapsed * 0.8);
      setPosition({ x, y });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isClient, useLoop]);

  if (!isClient) {
    return null; // Don't render server-side
  }

  const tracker1Style: React.CSSProperties = {
      transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))` 
  };

  const tracker2Style: React.CSSProperties = {
      transform: `translate(calc(100vw - ${position.x}px - 50%), calc(100vh - ${position.y}px - 50%))` 
  };

  return (
    <div className="aurora-container">
      <div className="aurora-tracker" style={tracker1Style}>
        <div className="aurora-blob aurora-blob-1"></div>
      </div>
      <div className="aurora-tracker" style={tracker2Style}>
        <div className="aurora-blob aurora-blob-2"></div>
      </div>
    </div>
  );
};

export default InteractiveAuroraBackground;
