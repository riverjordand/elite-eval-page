interface SectionDividerProps {
  fromColor?: string;
  toColor?: string;
}

const SectionDivider = ({ 
  fromColor = "#1a1a1a",
  toColor = "#0a0a0a"
}: SectionDividerProps) => {
  return (
    <div className="w-full h-8 md:h-12" style={{
      background: `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`
    }} />
  );
};

export default SectionDivider;
