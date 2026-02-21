import { useState } from "react";

export default function ProductListCard({ image, title, weight, price, oldPrice, discount }) {
    const [quantity, setQuantity] = useState(1);

    const nutritionalValues = [
        { label: "Energy(kcal):", value: "211" },
        { label: "Protein(g):", value: "211" },
        { label: "magnetiam(kcal):", value: "211" },
        { label: "Calory(kcal):", value: "211" },
        { label: "Vitamine(kcal):", value: "211" },
    ];

    return (
        <div className="bg-[#F3F4F6] rounded-[8px] p-6 flex gap-10 hover:shadow-md transition-shadow relative">
            {/* Ribbon Discount Badge */}
            {discount && (
                <div className="absolute top-0 left-6 z-20">
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

            {/* Product Image */}
            <div className="w-[200px] h-[200px] bg-white rounded-[4px] border border-gray-100 flex items-center justify-center p-4 shrink-0">
                <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-center gap-4">
                <div className="flex flex-col gap-1">
                    <h3 className="text-[#1A1A1A] font-bold text-[24px] leading-tight hover:text-primary transition-colors cursor-pointer">
                        {title}
                    </h3>
                    <p className="text-[#808080] text-[15px]">{weight}</p>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-[#ED1C24] font-bold text-[28px]">${price}</span>
                    {oldPrice && (
                        <span className="text-[#999999] text-[15px] line-through font-medium">${oldPrice}</span>
                    )}
                </div>

                <div className="flex items-center gap-4 mt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#E6E6E6] rounded-[6px] h-[48px] bg-white px-3 gap-3">
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

                    {/* Add to Cart Button */}
                    <button className="flex items-center justify-center gap-3 border border-[#629D23] rounded-[8px] h-[48px] px-8 bg-white group hover:bg-[#629D23] transition-all">
                        <span className="text-[#629D23] font-bold text-base group-hover:text-white">Add To Cart</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#629D23" strokeWidth="2.5" className="group-hover:stroke-white transition-colors">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Nutritional Values Column */}
            <div className="w-[200px] flex flex-col gap-2 shrink-0 justify-center">
                <h4 className="text-[#1A1A1A] font-bold text-[15px] mb-2">Nutritional Values</h4>
                {nutritionalValues.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-[14px]">
                        <span className="text-[#999999]">{item.label}</span>
                        <span className="text-[#666666] font-medium">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
