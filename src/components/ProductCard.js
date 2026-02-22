import { useState } from "react";

export default function ProductCard({ image, title, weight, price, oldPrice, discount }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="group bg-white border border-[#E6E6E6] rounded-[8px] p-4 flex flex-col hover:shadow-lg transition-all relative">
            {discount && (
                <div className="absolute top-0 left-4 z-20">
                    <div className="bg-[#FFB800] text-[#1A1A1A] text-[12px] font-bold px-2 pt-2 pb-4 relative leading-none text-center min-w-[45px]">
                        {discount}
                        <br />
                        <span className="text-[10px] font-medium">Off</span>
                        <div className="absolute bottom-0 left-0 right-0 h-3 overflow-hidden translate-y-[100%]">
                            <svg viewBox="0 0 45 12" fill="#FFB800" className="w-full h-full">
                                <path d="M0 0 L22.5 12 L45 0 Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
            <div className="relative h-[240px] flex items-center justify-center mb-6 overflow-hidden border border-[#F2F2F2] rounded-[4px]">
                <img src={image} alt={title} className="max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 rounded-t-[8px] right-0 bg-[#629D23] mx-12 flex items-center justify-center gap-2 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-8 h-8 rounded-full border border-dashed border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full border border-dashed border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" /></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full border border-dashed border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    </button>
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <h3 className="text-[#1A1A1A] font-bold text-base mb-1 leading-tight line-clamp-2">
                    {title}
                </h3>
                <p className="text-[#808080] text-sm mb-4">{weight}</p>

                <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#ED1C24] font-bold text-lg">${price}</span>
                    {oldPrice && (
                        <span className="text-[#999999] text-sm line-through font-medium">${oldPrice}</span>
                    )}
                </div>

                <div className="flex items-center justify-between gap-4 mt-auto">
                    <div className="flex items-center border border-[#E6E6E6] rounded-[6px] h-[40px] bg-white px-2 gap-2">
                        <span className="text-lg font-bold text-[#666666] min-w-[20px] text-center">{quantity}</span>
                        <div className="flex items-center border border-[#E6E6E6] rounded-[4px] overflow-hidden">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 border-r border-[#E6E6E6] transition-colors"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setQuantity(q => q + 1)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                                    <polyline points="18 15 12 9 6 15" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <button className="flex items-center justify-center gap-3 border border-[#629D23] rounded-[8px] h-[36px] px-4 bg-white group hover:bg-[#629D23] transition-all">
                        <span className="text-[#629D23] font-bold text-base group-hover:text-white">Add</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#629D23" strokeWidth="2.5" className="group-hover:stroke-white transition-colors">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
