
interface IDividingLineProps {
  className?: string;
  color?: string;
  type?: 'solid' | 'dashed' | 'dotted' | 'double';
}

const DividingLine: React.FC<IDividingLineProps> = ({ color = 'border-black', className = "", type = 'solid'}: IDividingLineProps) => {
  return (
    <div className={`${className} w-full border-${type} border ${color}`}></div>
  )
}

export default DividingLine;