export default function WhiteButton({ text, icon, badge, onClick, className = "", textClassName = "", ...props }) {
    return (
        <button
            onClick={onClick}
            className={`bg-white rounded-[8px] flex gap-2 items-center justify-center border border-[#E6E6E6] transition-all relative ${className}`}
            {...props}
        >
            <div className="relative flex items-center justify-center">
                {icon && icon}
                {badge !== undefined && badge !== null && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                        {badge}
                    </span>
                )}
            </div>
            {text && <span className={`text-[#1A1A1A] font-semibold text-sm ${textClassName}`}>{text}</span>}
        </button>
    );
}
