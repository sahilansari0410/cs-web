'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

const SecurityFlowAnimation = () => {
  const [stage, setStage] = useState(-1); // Start at -1 (not started)
  const [uploadProgress, setUploadProgress] = useState(0);
  const [encryptProgress, setEncryptProgress] = useState(0);
  const [chunkProgress, setChunkProgress] = useState<number[]>([0, 0, 0, 0, 0]);
  const [encryptedChunks, setEncryptedChunks] = useState<boolean[]>([false, false, false, false, false]);
  const [storedChunks, setStoredChunks] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Storage locations around the world with realistic positions
  const storageLocations = [
    { name: 'Switzerland', flag: '🇨🇭', x: 52, y: 28 },
    { name: 'Japan', flag: '🇯🇵', x: 85, y: 35 },
    { name: 'Finland', flag: '🇫🇮', x: 55, y: 18 },
    { name: 'Norway', flag: '🇳🇴', x: 48, y: 20 },
    { name: 'Singapore', flag: '🇸🇬', x: 78, y: 55 },
    { name: 'Sydney', flag: '🇦🇺', x: 88, y: 75 },
    { name: 'New York', flag: '🇺🇸', x: 25, y: 38 },
    { name: 'São Paulo', flag: '🇧🇷', x: 30, y: 68 },
  ];

  const runAnimation = useCallback(async () => {
    // Reset all states
    setUploadProgress(0);
    setEncryptProgress(0);
    setChunkProgress([0, 0, 0, 0, 0]);
    setEncryptedChunks([false, false, false, false, false]);
    setStoredChunks([]);

    await new Promise(r => setTimeout(r, 300));

    setStage(0);

    // Stage 0: Upload animation
    setStage(0);
    for (let i = 0; i <= 100; i += 5) {
      await new Promise(r => setTimeout(r, 30));
      setUploadProgress(i);
    }
    await new Promise(r => setTimeout(r, 500));

    // Stage 1: Encryption animation
    setStage(1);
    for (let i = 0; i <= 100; i += 4) {
      await new Promise(r => setTimeout(r, 40));
      setEncryptProgress(i);
    }
    await new Promise(r => setTimeout(r, 500));

    // Stage 2: Chunking animation
    setStage(2);
    for (let chunk = 0; chunk < 5; chunk++) {
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(r => setTimeout(r, 30));
        setChunkProgress(prev => {
          const newProgress = [...prev];
          newProgress[chunk] = i;
          return newProgress;
        });
      }
      await new Promise(r => setTimeout(r, 100));
    }
    await new Promise(r => setTimeout(r, 500));

    // Stage 3: Re-encrypt each chunk
    setStage(3);
    for (let i = 0; i < 5; i++) {
      await new Promise(r => setTimeout(r, 300));
      setEncryptedChunks(prev => {
        const newEncrypted = [...prev];
        newEncrypted[i] = true;
        return newEncrypted;
      });
    }
    await new Promise(r => setTimeout(r, 500));

    // Stage 4: Distribute to global storage
    setStage(4);
    for (let i = 0; i < 8; i++) {
      await new Promise(r => setTimeout(r, 350));
      setStoredChunks(prev => [...prev, i]);
    }
    await new Promise(r => setTimeout(r, 800));

    // Stage 5: Final secure state
    setStage(5);
  }, []);

  // Run animation when section comes into view
  useEffect(() => {
    if (!isClient || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            runAnimation();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isClient, hasAnimated, runAnimation]);

  // Use CSS variables for theme colors
  const brandBlue = 'var(--primary, #007BFF)';
  const brandGreen = 'var(--success, #22c55e)';

  if (!isClient) {
    return (
      <div className="min-h-[500px] bg-muted/50 flex items-center justify-center rounded-2xl">
        <div className="text-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`${isMobile ? 'py-10 px-4' : 'py-16 px-10'} bg-card/50 backdrop-blur-sm rounded-3xl border border-border relative overflow-hidden`}
    >
      {/* Animation Flow - First 4 Steps */}
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center ${isMobile ? 'gap-5' : 'gap-4'} max-w-[900px] mx-auto mb-10 flex-wrap`}>
        {/* Step 1: Your File / Upload */}
        <div
          className="flex flex-col items-center gap-3 transition-all duration-500"
          style={{ opacity: stage >= 0 ? 1 : 0.3 }}
        >
          <div
            className={`${isMobile ? 'w-[70px] h-[85px]' : 'w-[90px] h-[110px]'} bg-muted/80 rounded-2xl flex flex-col items-center justify-center relative transition-all duration-300`}
            style={{
              border: `2px solid ${stage === 0 ? brandBlue : 'var(--border)'}`,
              boxShadow: stage === 0 ? `0 0 30px color-mix(in srgb, var(--primary) 30%, transparent)` : 'none'
            }}
          >
            <svg width={isMobile ? 32 : 40} height={isMobile ? 40 : 50} viewBox="0 0 40 50" fill="none">
              <path
                d="M5 5C5 2.79086 6.79086 1 9 1H25L35 11V45C35 47.2091 33.2091 49 31 49H9C6.79086 49 5 47.2091 5 45V5Z"
                stroke="var(--primary)"
                strokeWidth="2"
                fill="color-mix(in srgb, var(--primary) 10%, transparent)"
              />
              <path d="M25 1V11H35" stroke="var(--primary)" strokeWidth="2" fill="none" />
            </svg>

            {stage === 0 && uploadProgress < 100 && (
              <div className="absolute bottom-2.5 left-2.5 right-2.5 h-1 bg-muted rounded-sm overflow-hidden">
                <div
                  className="h-full bg-primary rounded-sm transition-all duration-100"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}

            {stage > 0 && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs animate-scale-in">
                ✓
              </div>
            )}
          </div>
          <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium ${stage >= 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
            Your File
          </span>
        </div>

        {/* Arrow 1 */}
        <div
          className={`${isMobile ? 'text-xl rotate-90' : 'text-2xl'} transition-colors duration-300`}
          style={{ color: stage >= 1 ? 'var(--primary)' : 'var(--muted-foreground)' }}
        >
          →
        </div>

        {/* Step 2: Encrypted */}
        <div
          className="flex flex-col items-center gap-3 transition-all duration-500"
          style={{ opacity: stage >= 1 ? 1 : 0.3 }}
        >
          <div
            className={`${isMobile ? 'w-[70px] h-[85px]' : 'w-[90px] h-[110px]'} bg-muted/80 rounded-2xl flex flex-col items-center justify-center relative transition-all duration-300`}
            style={{
              border: `2px solid ${stage === 1 ? brandBlue : 'var(--border)'}`,
              boxShadow: stage === 1 ? `0 0 30px color-mix(in srgb, var(--primary) 30%, transparent)` : 'none'
            }}
          >
            <svg width={isMobile ? 36 : 45} height={isMobile ? 44 : 55} viewBox="0 0 45 55" fill="none">
              <rect
                x="5" y="22"
                width="35" height="28"
                rx="4"
                fill={stage >= 1 ? 'var(--primary)' : 'color-mix(in srgb, var(--primary) 30%, transparent)'}
                className="transition-all duration-300"
              />
              <path
                d="M12 22V15C12 8.37258 17.3726 3 24 3H21C27.6274 3 33 8.37258 33 15V22"
                stroke="var(--primary)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                className="transition-transform duration-300"
                style={{ transform: stage >= 1 ? 'translateY(0)' : 'translateY(-5px)' }}
              />
              <circle cx="22.5" cy="36" r="4" fill="var(--background)" />
              <rect x="20.5" y="38" width="4" height="6" rx="1" fill="var(--background)" />
            </svg>

            {stage === 1 && encryptProgress < 100 && (
              <div className="absolute bottom-2.5 left-2.5 right-2.5 h-1 bg-muted rounded-sm overflow-hidden">
                <div
                  className="h-full rounded-sm transition-all duration-100"
                  style={{
                    width: `${encryptProgress}%`,
                    background: 'linear-gradient(90deg, var(--primary), var(--success))'
                  }}
                />
              </div>
            )}

            {stage > 1 && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs animate-scale-in">
                ✓
              </div>
            )}
          </div>
          <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium ${stage >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>
            Encrypted
          </span>
        </div>

        {/* Arrow 2 */}
        <div
          className={`${isMobile ? 'text-xl rotate-90' : 'text-2xl'} transition-colors duration-300`}
          style={{ color: stage >= 2 ? 'var(--primary)' : 'var(--muted-foreground)' }}
        >
          →
        </div>

        {/* Step 3: Chunks */}
        <div
          className="flex flex-col items-center gap-3 transition-all duration-500"
          style={{ opacity: stage >= 2 ? 1 : 0.3 }}
        >
          <div
            className={`flex gap-1.5 ${isMobile ? 'p-4' : 'p-5'} bg-muted/50 rounded-2xl relative transition-all duration-300`}
            style={{
              border: `2px solid ${stage === 2 ? brandBlue : 'var(--border)'}`,
              boxShadow: stage === 2 ? `0 0 30px color-mix(in srgb, var(--primary) 30%, transparent)` : 'none'
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`${isMobile ? 'w-3.5 h-[50px]' : 'w-5 h-[70px]'} rounded-md relative overflow-hidden transition-all duration-300`}
                style={{
                  background: chunkProgress[i] >= 100
                    ? 'linear-gradient(180deg, var(--muted) 0%, color-mix(in srgb, var(--muted) 80%, var(--primary)) 100%)'
                    : 'var(--muted)'
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 rounded-md transition-all duration-100"
                  style={{
                    height: `${chunkProgress[i]}%`,
                    background: 'linear-gradient(180deg, var(--secondary), var(--primary))'
                  }}
                />
              </div>
            ))}

            {stage > 2 && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs animate-scale-in">
                ✓
              </div>
            )}
          </div>
          <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium ${stage >= 2 ? 'text-foreground' : 'text-muted-foreground'}`}>
            20+ Chunks
          </span>
        </div>

        {/* Arrow 3 */}
        <div
          className={`${isMobile ? 'text-xl rotate-90' : 'text-2xl'} transition-colors duration-300`}
          style={{ color: stage >= 3 ? 'var(--primary)' : 'var(--muted-foreground)' }}
        >
          →
        </div>

        {/* Step 4: Re-Encrypted Chunks */}
        <div
          className="flex flex-col items-center gap-3 transition-all duration-500"
          style={{ opacity: stage >= 3 ? 1 : 0.3 }}
        >
          <div
            className={`flex gap-1.5 ${isMobile ? 'p-4' : 'p-5'} bg-muted/50 rounded-2xl relative transition-all duration-300`}
            style={{
              border: `2px solid ${stage === 3 ? 'var(--success)' : 'var(--border)'}`,
              boxShadow: stage === 3 ? `0 0 30px color-mix(in srgb, var(--success) 30%, transparent)` : 'none'
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`${isMobile ? 'w-3.5 h-[50px]' : 'w-5 h-[70px]'} rounded-md relative flex items-center justify-center`}
                style={{
                  background: 'linear-gradient(180deg, var(--muted) 0%, color-mix(in srgb, var(--muted) 80%, var(--primary)) 100%)'
                }}
              >
                {encryptedChunks[i] && (
                  <div className="animate-scale-in flex items-center justify-center">
                    <svg width={isMobile ? 10 : 14} height={isMobile ? 12 : 16} viewBox="0 0 14 16" fill="none">
                      <rect x="1" y="6" width="12" height="9" rx="2" fill="var(--success)" />
                      <path d="M4 6V4.5C4 2.84315 5.34315 1.5 7 1.5C8.65685 1.5 10 2.84315 10 4.5V6" stroke="var(--success)" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}

            {stage > 3 && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs animate-scale-in">
                ✓
              </div>
            )}
          </div>
          <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium ${stage >= 3 ? 'text-foreground' : 'text-muted-foreground'}`}>
            Re-Encrypted
          </span>
        </div>
      </div>

      {/* Global Storage Section - Full Width World Map */}
      <div
        className="transition-all duration-500 mt-5"
        style={{ opacity: stage >= 4 ? 1 : 0.3 }}
      >
        <div className="text-center mb-5 flex items-center justify-center gap-2.5">
          <div
            className="text-2xl transition-colors duration-300"
            style={{ color: stage >= 4 ? 'var(--success)' : 'var(--muted-foreground)' }}
          >
            ↓
          </div>
          <span className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold tracking-wider ${stage >= 4 ? 'text-foreground' : 'text-muted-foreground'}`}>
            DISTRIBUTED TO GLOBAL SERVERS
          </span>
          <div
            className="text-2xl transition-colors duration-300"
            style={{ color: stage >= 4 ? 'var(--success)' : 'var(--muted-foreground)' }}
          >
            ↓
          </div>
        </div>

        {/* World Map Container */}
        <div
          className={`relative w-full max-w-[800px] ${isMobile ? 'h-[250px]' : 'h-[350px]'} mx-auto bg-muted/30 rounded-2xl overflow-hidden transition-all duration-500`}
          style={{
            border: `2px solid ${stage >= 4 ? 'color-mix(in srgb, var(--success) 40%, transparent)' : 'var(--border)'}`,
            boxShadow: stage >= 4 ? `0 0 50px color-mix(in srgb, var(--success) 15%, transparent)` : 'none'
          }}
        >
          {/* World Map Background */}
          <svg
            viewBox="0 0 800 400"
            className="absolute w-full h-full opacity-15"
          >
            <ellipse cx="400" cy="200" rx="380" ry="180" stroke="var(--success)" strokeWidth="1" fill="none" opacity="0.3" />
            <ellipse cx="400" cy="200" rx="250" ry="180" stroke="var(--success)" strokeWidth="0.5" fill="none" opacity="0.2" />
            <line x1="20" y1="200" x2="780" y2="200" stroke="var(--success)" strokeWidth="0.5" opacity="0.2" />
            <line x1="400" y1="20" x2="400" y2="380" stroke="var(--success)" strokeWidth="0.5" opacity="0.2" />

            {[100, 200, 300, 500, 600, 700].map(x => (
              <line key={`v${x}`} x1={x} y1="50" x2={x} y2="350" stroke="var(--success)" strokeWidth="0.3" opacity="0.1" />
            ))}
            {[100, 150, 250, 300].map(y => (
              <line key={`h${y}`} x1="50" y1={y} x2="750" y2={y} stroke="var(--success)" strokeWidth="0.3" opacity="0.1" />
            ))}
          </svg>

          {/* Connection Lines */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute w-full h-full pointer-events-none"
          >
            {storedChunks.length > 1 && storedChunks.slice(0, -1).map((idx, i) => {
              const from = storageLocations[idx];
              const to = storageLocations[storedChunks[i + 1]];
              return (
                <line
                  key={i}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke="var(--success)"
                  strokeWidth="0.3"
                  strokeDasharray="2,2"
                  opacity="0.5"
                  className="animate-dash-move"
                />
              );
            })}
          </svg>

          {/* Storage Location Points */}
          {storageLocations.map((location, i) => {
            const isStored = storedChunks.includes(i);
            const isSecured = stage === 5;

            return (
              <div
                key={i}
                className="absolute flex flex-col items-center gap-1 transition-all duration-500"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: 'translate(-50%, -50%)',
                  opacity: isStored ? 1 : 0.3,
                  zIndex: isStored ? 10 : 1,
                  filter: isSecured ? 'blur(8px)' : 'none'
                }}
              >
                {/* Pulse ring */}
                {isStored && !isSecured && (
                  <div
                    className="absolute w-[50px] h-[50px] rounded-full animate-pulse-ring"
                    style={{ border: '2px solid var(--success)', opacity: 0.5 }}
                  />
                )}

                {/* Location dot */}
                <div
                  className={`rounded-full flex items-center justify-center transition-all duration-500 ${isStored ? 'animate-scale-in' : ''}`}
                  style={{
                    width: isStored ? (isMobile ? '32px' : '40px') : (isMobile ? '12px' : '16px'),
                    height: isStored ? (isMobile ? '32px' : '40px') : (isMobile ? '12px' : '16px'),
                    background: isStored
                      ? 'linear-gradient(135deg, var(--success), color-mix(in srgb, var(--success) 80%, black))'
                      : 'var(--muted-foreground)',
                    border: isStored ? '3px solid color-mix(in srgb, white 30%, transparent)' : 'none',
                    boxShadow: isStored ? '0 0 20px var(--success), 0 0 40px color-mix(in srgb, var(--success) 50%, transparent)' : 'none',
                    fontSize: isMobile ? '14px' : '18px'
                  }}
                >
                  {isStored && !isSecured && location.flag}
                  {isStored && isSecured && '🔒'}
                </div>

                {/* Location label */}
                <div
                  className="px-2.5 py-1 rounded-md transition-all duration-300"
                  style={{
                    background: isStored ? 'var(--card)' : 'transparent',
                    border: isStored ? '1px solid color-mix(in srgb, var(--success) 50%, transparent)' : 'none',
                    opacity: isStored ? 1 : 0,
                    transform: isStored ? 'translateY(0)' : 'translateY(-10px)'
                  }}
                >
                  <span className={`text-success ${isMobile ? 'text-[10px]' : 'text-xs'} font-semibold whitespace-nowrap`}>
                    {isSecured ? 'Unknown' : location.name}
                  </span>
                </div>

                {/* Chunk indicator */}
                {isStored && !isSecured && (
                  <div
                    className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold text-white animate-scale-in"
                    style={{ border: '2px solid color-mix(in srgb, white 30%, transparent)' }}
                  >
                    {i + 1}
                  </div>
                )}
              </div>
            );
          })}

          {/* Final Secure Shield */}
          {stage === 5 && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in z-20">
              <div
                className={`${isMobile ? 'w-[70px] h-[70px]' : 'w-[90px] h-[90px]'} rounded-full flex items-center justify-center backdrop-blur-sm`}
                style={{
                  background: 'linear-gradient(135deg, color-mix(in srgb, var(--success) 30%, transparent), color-mix(in srgb, var(--primary) 30%, transparent))',
                  boxShadow: '0 0 40px color-mix(in srgb, var(--success) 50%, transparent), 0 0 80px color-mix(in srgb, var(--success) 30%, transparent)',
                  border: '3px solid var(--success)'
                }}
              >
                <svg width={isMobile ? 40 : 50} height={isMobile ? 48 : 60} viewBox="0 0 50 60" fill="none">
                  <path
                    d="M25 5L5 15V30C5 42 15 52 25 55C35 52 45 42 45 30V15L25 5Z"
                    fill="var(--success)"
                    stroke="var(--success)"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 30L23 35L33 25"
                    stroke="var(--background)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Location Legend */}
        <div className={`flex flex-wrap justify-center ${isMobile ? 'gap-2' : 'gap-4'} mt-5 px-5`}>
          {storageLocations.map((loc, i) => {
            const isSecured = stage === 5;
            return (
              <div
                key={i}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300`}
                style={{
                  background: storedChunks.includes(i) ? 'color-mix(in srgb, var(--success) 15%, transparent)' : 'var(--muted)',
                  border: `1px solid ${storedChunks.includes(i) ? 'color-mix(in srgb, var(--success) 50%, transparent)' : 'var(--border)'}`,
                  filter: isSecured ? 'blur(4px)' : 'none'
                }}
              >
                <span className="text-sm">{isSecured ? '🔒' : loc.flag}</span>
                <span className={`${isMobile ? 'text-[11px]' : 'text-xs'} font-medium ${storedChunks.includes(i) ? 'text-success' : 'text-muted-foreground'}`}>
                  {isSecured ? 'Unknown' : loc.name}
                </span>
                {storedChunks.includes(i) && (
                  <span className="text-success text-xs">✓</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Status Message */}
      <div className="text-center mt-10">
        <div
          className={`inline-block px-8 py-4 rounded-xl transition-all duration-500`}
          style={{
            background: stage === 5
              ? 'linear-gradient(90deg, color-mix(in srgb, var(--success) 15%, transparent), color-mix(in srgb, var(--primary) 15%, transparent))'
              : 'var(--muted)',
            border: `1px solid ${stage === 5 ? 'var(--success)' : 'var(--border)'}`,
            boxShadow: stage === 5 ? '0 0 30px color-mix(in srgb, var(--success) 20%, transparent)' : 'none'
          }}
        >
          <p className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold m-0 ${stage === 5 ? 'text-success' : 'text-muted-foreground'}`}>
            {stage === -1 && '🔒 Scroll to see how we protect your files...'}
            {stage === 0 && '📤 Uploading your file...'}
            {stage === 1 && '🔐 Encrypting with AES-256...'}
            {stage === 2 && '📦 Splitting into secure chunks...'}
            {stage === 3 && '🔒 Re-encrypting each chunk...'}
            {stage === 4 && `🌍 Distributing to global servers... (${storedChunks.length}/8)`}
            {stage === 5 && '✅ Your file is now completely secure across unknown locations!'}
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes scale-in {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease forwards;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
        @keyframes dash-move {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -20; }
        }
        .animate-dash-move {
          animation: dash-move 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SecurityFlowAnimation;
