'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

const ShareLinkAnimation = () => {
  const [stage, setStage] = useState(-1); // Start at -1 (not started)
  const [selectedFiles, setSelectedFiles] = useState<number[]>([]);
  const [combiningProgress, setCombiningProgress] = useState(0);
  const [linkChars, setLinkChars] = useState<string[]>([]);
  const [showCopied, setShowCopied] = useState(false);
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

  const files = [
    { name: 'design-v3.fig', size: '845 MB', icon: '🎨', type: 'Figma' },
    { name: 'hero-video.mp4', size: '1.2 GB', icon: '🎬', type: 'Video' },
    { name: 'assets.zip', size: '320 MB', icon: '📦', type: 'Archive' },
    { name: 'presentation.pptx', size: '156 MB', icon: '📊', type: 'PowerPoint' },
    { name: 'source-code.zip', size: '89 MB', icon: '💻', type: 'Code' },
  ];

  const finalLink = 'blvck.in/share/aSk09Dhs2hC';
  const linkId = 'aSk09Dhs2hC';

  const runAnimation = useCallback(async () => {
    setSelectedFiles([]);
    setCombiningProgress(0);
    setLinkChars([]);
    setShowCopied(false);

    await new Promise(r => setTimeout(r, 300));

    setStage(0);
    for (let i = 0; i < files.length; i++) {
      await new Promise(r => setTimeout(r, 400));
      setSelectedFiles(prev => [...prev, i]);
    }
    await new Promise(r => setTimeout(r, 600));

    setStage(1);
    for (let i = 0; i <= 100; i += 2) {
      await new Promise(r => setTimeout(r, 30));
      setCombiningProgress(i);
    }
    await new Promise(r => setTimeout(r, 500));

    setStage(2);
    const chars = finalLink.split('');
    for (let i = 0; i < chars.length; i++) {
      await new Promise(r => setTimeout(r, 50));
      setLinkChars(prev => [...prev, chars[i]]);
    }
    await new Promise(r => setTimeout(r, 300));

    setStage(3);
    await new Promise(r => setTimeout(r, 1000));

    setShowCopied(true);
    await new Promise(r => setTimeout(r, 2000));
    setShowCopied(false);
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
        threshold: 0.3,
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

  if (!isClient) {
    return (
      <div className="min-h-[500px] bg-card/50 rounded-2xl flex items-center justify-center">
        <div className="text-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`${isMobile ? 'p-4' : 'p-6'} bg-card/50 backdrop-blur-sm rounded-3xl border border-border relative overflow-hidden`}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none opacity-30 blur-[80px]"
        style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-full mx-auto">
        {/* Browser Window Mock */}
        <div className="bg-muted rounded-2xl overflow-hidden shadow-2xl border border-border">
          {/* Browser Header */}
          <div className={`bg-background ${isMobile ? 'px-3 py-2' : 'px-4 py-3'} flex items-center gap-3 border-b border-border`}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
            </div>

            <div className="flex-1 bg-muted rounded-lg px-3 py-2 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'} font-mono truncate`}>
                blvck.in/share/...
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} rounded-2xl flex items-center justify-center`}
                style={{
                  background: 'linear-gradient(135deg, color-mix(in srgb, var(--primary) 30%, transparent), color-mix(in srgb, var(--primary) 10%, transparent))',
                  border: '2px solid color-mix(in srgb, var(--primary) 50%, transparent)'
                }}
              >
                <svg width={isMobile ? 20 : 24} height={isMobile ? 24 : 28} viewBox="0 0 30 35" fill="none">
                  <path
                    d="M5 5C5 2.79 6.79 1 9 1H17L25 9V30C25 32.21 23.21 34 21 34H9C6.79 34 5 32.21 5 30V5Z"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    fill="color-mix(in srgb, var(--primary) 20%, transparent)"
                  />
                  <path d="M17 1V9H25" stroke="var(--primary)" strokeWidth="2" />
                  <path d="M10 18H20M10 23H17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className={`text-foreground ${isMobile ? 'text-base' : 'text-lg'} font-semibold`}>
                  Project Assets
                </h3>
                <p className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>
                  {selectedFiles.length} files • 2.4 GB total
                </p>
              </div>
            </div>

            {/* File List */}
            <div className="flex flex-col gap-2 mb-4">
              {files.slice(0, 3).map((file, i) => {
                const isSelected = selectedFiles.includes(i);
                const isSelecting = stage === 0 && selectedFiles.length === i;

                return (
                  <div
                    key={i}
                    className={`flex items-center justify-between ${isMobile ? 'px-3 py-2.5' : 'px-4 py-3'} rounded-xl transition-all duration-300`}
                    style={{
                      background: isSelected
                        ? 'linear-gradient(90deg, color-mix(in srgb, var(--primary) 15%, transparent), transparent)'
                        : 'var(--muted)',
                      border: `2px solid ${isSelected ? 'var(--primary)' : 'transparent'}`,
                      transform: isSelecting ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: isSelected ? '0 0 20px color-mix(in srgb, var(--primary) 20%, transparent)' : 'none'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center transition-all duration-300"
                        style={{
                          border: `2px solid ${isSelected ? 'var(--primary)' : 'var(--border)'}`,
                          background: isSelected ? 'var(--primary)' : 'transparent'
                        }}
                      >
                        {isSelected && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--primary-foreground)" strokeWidth="3">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-foreground ${isMobile ? 'text-sm' : 'text-base'} font-medium`}>
                        {file.name}
                      </span>
                    </div>
                    <span className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      {file.size}
                    </span>
                  </div>
                );
              })}
            </div>

            <div
              className="text-center text-muted-foreground text-sm mb-5 transition-opacity duration-300"
              style={{ opacity: selectedFiles.length >= 3 ? 1 : 0.5 }}
            >
              + {files.length - 3 + 7} more files
            </div>

            {/* Progress Bar */}
            {stage >= 1 && stage < 3 && (
              <div className="mb-4 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary text-sm font-semibold">
                    {stage === 1 ? '🔄 Combining files...' : '🔗 Generating secure link...'}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {stage === 1 ? `${combiningProgress}%` : `${linkChars.length}/${finalLink.length}`}
                  </span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-100"
                    style={{
                      width: stage === 1 ? `${combiningProgress}%` : `${(linkChars.length / finalLink.length) * 100}%`,
                      background: 'linear-gradient(90deg, var(--primary), var(--success))',
                      boxShadow: '0 0 10px var(--primary)'
                    }}
                  />
                </div>
              </div>
            )}

            {/* Link Display */}
            <div
              className={`rounded-2xl ${isMobile ? 'p-3' : 'p-4'} transition-all duration-500`}
              style={{
                background: stage >= 2 ? 'color-mix(in srgb, var(--primary) 8%, transparent)' : 'var(--muted)',
                border: `2px solid ${stage >= 3 ? 'var(--success)' : stage >= 2 ? 'var(--primary)' : 'var(--border)'}`,
                boxShadow: stage >= 3 ? '0 0 40px color-mix(in srgb, var(--success) 20%, transparent)' : 'none'
              }}
            >
              <div className={`flex items-center gap-2 ${isMobile ? 'flex-col' : 'flex-row'}`}>
                <div
                  className={`flex-1 ${isMobile ? 'w-full' : ''} bg-background rounded-xl ${isMobile ? 'px-3 py-3' : 'px-4 py-4'} font-mono relative overflow-hidden`}
                >
                  <div className="flex items-center">
                    <span className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      {stage >= 2 ? linkChars.slice(0, 21).join('') : 'blvck.in/share/'}
                    </span>
                    {stage >= 2 && (
                      <span
                        className={`text-success ${isMobile ? 'text-xs' : 'text-sm'} font-bold`}
                        style={{
                          textShadow: stage >= 3 ? '0 0 10px var(--success)' : 'none',
                          letterSpacing: '1px'
                        }}
                      >
                        {linkChars.slice(21).join('')}
                      </span>
                    )}
                    {stage < 2 && (
                      <span className="text-muted-foreground animate-blink">|</span>
                    )}
                  </div>

                  {stage === 2 && linkChars.length < finalLink.length && (
                    <div
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"
                    />
                  )}
                </div>

                <button
                  onClick={() => setShowCopied(true)}
                  disabled={stage < 3}
                  className={`${isMobile ? 'w-full h-12' : 'w-14 h-14'} rounded-xl border-none flex items-center justify-center gap-2 transition-all duration-300`}
                  style={{
                    background: stage >= 3
                      ? 'linear-gradient(135deg, var(--primary), color-mix(in srgb, var(--primary) 80%, black))'
                      : 'var(--muted)',
                    cursor: stage >= 3 ? 'pointer' : 'default',
                    transform: showCopied ? 'scale(0.95)' : 'scale(1)',
                    boxShadow: stage >= 3 ? '0 8px 25px color-mix(in srgb, var(--primary) 40%, transparent)' : 'none'
                  }}
                >
                  {showCopied ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-foreground)" strokeWidth="2">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      {isMobile && <span className="text-primary-foreground font-semibold">Copied!</span>}
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stage >= 3 ? 'var(--primary-foreground)' : 'var(--muted-foreground)'} strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                      {isMobile && <span className={`font-semibold ${stage >= 3 ? 'text-primary-foreground' : 'text-muted-foreground'}`}>Copy Link</span>}
                    </>
                  )}
                </button>
              </div>

              {stage >= 3 && (
                <div
                  className="mt-3 px-3 py-2.5 rounded-lg flex items-center gap-2 animate-slide-up"
                  style={{
                    background: 'color-mix(in srgb, var(--success) 15%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--success) 30%, transparent)'
                  }}
                >
                  <span className="text-lg">✅</span>
                  <span className={`text-success ${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>
                    Link created! Anyone with this link can download all files.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Final Link Display */}
        {stage >= 3 && (
          <div className="mt-6 text-center animate-fade-in-up">
            <div
              className={`inline-block rounded-2xl ${isMobile ? 'px-4 py-4' : 'px-6 py-5'} backdrop-blur-sm`}
              style={{
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--success) 15%, transparent), color-mix(in srgb, var(--primary) 15%, transparent))',
                border: '2px solid color-mix(in srgb, var(--success) 50%, transparent)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px color-mix(in srgb, var(--success) 20%, transparent)'
              }}
            >
              <div className="text-muted-foreground text-xs font-semibold tracking-widest mb-2 uppercase">
                Your Shareable Link
              </div>
              <div className="flex items-center gap-1 justify-center flex-wrap">
                <span className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'} font-mono`}>
                  blvck.in/share/
                </span>
                <span
                  className={`text-success ${isMobile ? 'text-base' : 'text-lg'} font-bold font-mono animate-glow`}
                  style={{ letterSpacing: '2px' }}
                >
                  {linkId}
                </span>
              </div>
              <div className="flex items-center justify-center gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-success">🔒</span>
                  <span className="text-muted-foreground text-xs">End-to-end encrypted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-primary">♾️</span>
                  <span className="text-muted-foreground text-xs">No expiry</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Status */}
      <div className={`text-center ${stage >= 3 ? 'mt-6' : 'mt-4'}`}>
        <div className="inline-flex items-center gap-3 px-4 py-3 bg-muted rounded-xl border border-border">
          <div
            className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
            style={{
              background: stage === 0 ? 'var(--primary)' : stage < 3 ? '#fbbf24' : 'var(--success)',
              boxShadow: `0 0 10px ${stage === 0 ? 'var(--primary)' : stage < 3 ? '#fbbf24' : 'var(--success)'}`,
              animation: stage < 3 ? 'pulse 1s ease-in-out infinite' : 'none'
            }}
          />
          <span className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>
            {stage === -1 && '🔗 Scroll to see how sharing works...'}
            {stage === 0 && `Selecting files... (${selectedFiles.length}/${files.length})`}
            {stage === 1 && 'Combining files securely...'}
            {stage === 2 && 'Generating unique share link...'}
            {stage >= 3 && '✨ Link ready to share!'}
          </span>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease forwards;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease forwards;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px var(--success), 0 0 40px color-mix(in srgb, var(--success) 50%, transparent); }
          50% { text-shadow: 0 0 30px var(--success), 0 0 60px color-mix(in srgb, var(--success) 80%, transparent); }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ShareLinkAnimation;
