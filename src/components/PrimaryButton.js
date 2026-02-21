export default function PrimaryButton({ children, text, icon, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary hover:bg-opacity-90 text-white font-semibold rounded-[8px] transition-all flex items-center justify-center ${className}`}
      {...props}
    >
      {text && <span className="font-semibold mr-2 text-sm">{text}</span>}
      {icon && icon}
      {children}
    </button>
  );
}
