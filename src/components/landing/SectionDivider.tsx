interface SectionDividerProps {
  variant?: "angle-down" | "angle-up" | "wave-down" | "wave-up";
  color?: string;
}

const SectionDivider = ({ 
  variant = "angle-down",
  color = "hsl(var(--background))"
}: SectionDividerProps) => {
  const variants = {
    "angle-down": {
      path: "M0,0 L0,40 L1920,10 L1920,0 Z",
      line: { x1: 0, y1: 40, x2: 1920, y2: 10, curved: false }
    },
    "angle-up": {
      path: "M0,10 L0,0 L1920,0 L1920,40 Z",
      line: { x1: 0, y1: 10, x2: 1920, y2: 40, curved: false }
    },
    "wave-down": {
      path: "M0,0 L0,30 Q480,40 960,35 T1920,15 L1920,0 Z",
      line: { x1: 0, y1: 30, x2: 1920, y2: 15, curved: true }
    },
    "wave-up": {
      path: "M0,15 Q480,35 960,30 T1920,30 L1920,0 L0,0 Z",
      line: { x1: 0, y1: 15, x2: 1920, y2: 30, curved: true }
    }
  };

  const config = variants[variant];

  return (
    <div className="w-full overflow-hidden relative -mb-px" style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg
        viewBox="0 0 1920 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
        style={{ 
          minHeight: '20px',
          maxHeight: '60px',
          height: 'clamp(20px, 4vw, 60px)'
        }}
      >
        {/* Main shape */}
        <path
          d={config.path}
          fill={color}
        />
        {/* White accent line */}
        {config.line.curved ? (
          <path
            d={variant === "wave-down" 
              ? "M0,30 Q480,40 960,35 T1920,15"
              : "M0,15 Q480,35 960,30 T1920,30"
            }
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            fill="none"
          />
        ) : (
          <line
            x1={config.line.x1}
            y1={config.line.y1}
            x2={config.line.x2}
            y2={config.line.y2}
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
          />
        )}
      </svg>
    </div>
  );
};

export default SectionDivider;
