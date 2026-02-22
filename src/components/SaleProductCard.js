export default function SaleProductCard({ image, title, weight, price, oldPrice }) {
    return (
        <div className="group bg-white border border-[#E6E6E6] rounded-[8px] p-4 flex flex-col hover:shadow-lg transition-all relative">
            <div className="absolute top-0 left-0 z-10 bg-[#629D23] text-white text-[12px] font-bold px-4 py-2 rounded-tl-[8px] rounded-br-[12px] uppercase">
                On Sale
            </div>

            <div className="relative h-[200px] flex items-center justify-center mb-4 overflow-hidden">
                <img src={image} alt={title} className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105" />

                <div className="absolute bottom-0 left-0 right-0 bg-[#629D23] mx-8 rounded-t-[8px] flex items-center justify-center gap-2 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-8 h-8 rounded-full border border-dashed border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full border border-dashed border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" /></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full border border-dashed border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    </button>
                </div>
            </div>

            <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" strokeWidth="1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                ))}
            </div>

            <div className="flex flex-col flex-1">
                <h3 className="text-[#1A1A1A] font-bold hover:text-primary cursor-pointer text-base mb-1 leading-tight line-clamp-2 min-h-[40px]">
                    {title}
                </h3>
                <p className="text-[#808080] text-sm mb-4">{weight}</p>

                <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#ED1C24] font-bold text-lg">${price}</span>
                    <span className="text-[#999999] text-sm line-through font-medium">${oldPrice}</span>
                </div>

                <button className="w-full bg-[#629D23] text-white font-bold h-[44px] rounded-[8px] flex items-center justify-center gap-3 hover:bg-[#4d7a1b] transition-all group mt-auto">
                    <span className="text-base">Add</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
