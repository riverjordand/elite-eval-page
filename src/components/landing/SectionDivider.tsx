interface SectionDividerProps {
  variant?: "angle-down" | "angle-up" | "wave-down" | "wave-up";
  color?: string;
}

const SectionDivider = ({ 
  variant = "angle-down",
  color = "hsl(var(--background))"
}: SectionDividerProps) => {
  const paths = {
    "angle-down": "M0,0 L1920,0 L1920,30 L0,80 Z",
    "angle-up": "M0,80 L1920,30 L1920,0 L0,0 Z",
    "wave-down": "M0,0 L1920,0 L1920,30 Q1440,80 960,50 T0,80 Z",
    "wave-up": "M0,80 Q480,30 960,50 T1920,30 L1920,0 L0,0 Z"
  };

  return (
    <div className="w-full overflow-hidden -mb-px relative z-20">
      <svg
        viewBox="0 0 1920 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
        style={{ display: 'block', minHeight: '40px', maxHeight: '80px' }}
      >
        {/* Subtle shadow line for depth */}
        <path
          d={paths[variant]}
          fill="hsl(var(--border))"
          opacity="0.1"
          transform="translate(0, -2)"
        />
        {/* Main divider */}
        <path
          d={paths[variant]}
          fill={color}
        />
        {/* White accent line */}
        <line
          x1="0"
          y1={variant.includes("down") ? "2" : "78"}
          x2="1920"
          y2={variant.includes("down") ? "32" : "28"}
          stroke="white"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
