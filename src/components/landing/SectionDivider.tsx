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
      path: "M0,0 L0,100 L1920,20 L1920,0 Z",
      line: { x1: 0, y1: 100, x2: 1920, y2: 20, curved: false }
    },
    "angle-up": {
      path: "M0,20 L0,0 L1920,0 L1920,100 Z",
      line: { x1: 0, y1: 20, x2: 1920, y2: 100, curved: false }
    },
    "wave-down": {
      path: "M0,0 L0,80 Q480,100 960,85 T1920,30 L1920,0 Z",
      line: { x1: 0, y1: 80, x2: 1920, y2: 30, curved: true }
    },
    "wave-up": {
      path: "M0,30 Q480,85 960,80 T1920,80 L1920,0 L0,0 Z",
      line: { x1: 0, y1: 30, x2: 1920, y2: 80, curved: true }
    }
  };

  const config = variants[variant];

  return (
    <div className="w-full overflow-hidden relative -mb-px" style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg
        viewBox="0 0 1920 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
        style={{ 
          minHeight: '40px',
          maxHeight: '100px',
          height: 'clamp(40px, 6vw, 100px)'
        }}
      >
        {/* Main shape */}
        <path
          d={config.path}
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
