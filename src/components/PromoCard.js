import { useNavigate } from "react-router-dom";

export default function PromoCard({ bgColor, badgeText, title, subtitle, image, linkText = "Shop Now" }) {
    const navigate = useNavigate();
    return (
        <div className={`relative h-[429px] overflow-hidden rounded-[12px] p-8 flex flex-col justify-between ${bgColor}`}>
            <div className="z-10 flex flex-col items-start gap-4">
                {badgeText && (
                    <span className="bg-[#E6F0DC] text-primary text-xs font-semibold px-4 py-2 rounded-[4px] uppercase">
                        {badgeText}
                    </span>
                )}
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#1A1A1A] text-2xl font-bold leading-tight">
                        {title}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                        {subtitle}
                    </p>
                </div>
                <button className="flex items-center gap-2 group mt-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white transition-transform group-hover:scale-110">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </div>
                    <span onClick={() => navigate('/shop')} className="text-[#1A1A1A] font-bold text-sm tracking-tight">{linkText}</span>
                </button>
            </div>

            {/* Product Image */}
            <div className="absolute bottom-0 right-0 w-[240px] h-[180px] flex items-end justify-end p-2 pointer-events-none">
                <img src={image} alt={title} className="max-w-full max-h-full object-contain transform translate-y-4 hover:-translate-y-2 transition-transform duration-500" />
            </div>
        </div>
    );
}
