import { useState } from "react";

export default function CategoryDropdown() {
    const [expandedCategory, setExpandedCategory] = useState("Breakfast & Dairy");

    const categories = [
        {
            name: "Breakfast & Dairy",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
            ),
            subCategories: ["Breakfast", "Dinner", "Pumking"]
        },
        {
            name: "Meats & Seafood",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
            ),
            hasMore: true
        },
        {
            name: "Breads & Bakery",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 13h18M3 7h18M3 19h18" strokeLinecap="round" />
                </svg>
            )
        },
        {
            name: "Chips & Snacks",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
            ),
            hasMore: true
        },
        {
            name: "Medical Healthcare",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                </svg>
            )
        },
        {
            name: "Breads & Bakery",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 13h18M3 7h18M3 19h18" strokeLinecap="round" />
                </svg>
            )
        },
        {
            name: "Biscuits & Snacks",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            ),
            hasMore: true
        },
        {
            name: "Frozen Foods",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            )
        },
        {
            name: "Grocery & Staples",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
                    <path d="M3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
            )
        },
        {
            name: "Other Items",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                </svg>
            )
        }
    ];

    return (
        <div className="absolute top-[100%] left-0 pt-4 z-[110] w-[280px] animate-fadeIn">
            <div className="bg-white rounded-b-[8px] shadow-2xl border border-[#E6E6E6] overflow-hidden">
                {categories.map((cat, idx) => {
                    const isExpanded = expandedCategory === cat.name;
                    return (
                        <div key={idx} className="flex flex-col">
                            <div
                                className={`flex items-center justify-between px-6 py-3.5 cursor-pointer transition-colors ${isExpanded ? "bg-[#629D23] text-white" : "text-[#1A1A1A] hover:bg-gray-50"
                                    }`}
                                onClick={() => setExpandedCategory(isExpanded ? null : cat.name)}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={isExpanded ? "text-white" : "text-[#629D23]"}>{cat.icon}</span>
                                    <span className="text-[15px] font-bold">{cat.name}</span>
                                </div>
                                {(cat.subCategories || cat.hasMore) && (
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isExpanded ? "bg-white text-[#629D23]" : "bg-[#F0F5E9] text-[#629D23]"}`}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            {isExpanded ? (
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            ) : (
                                                <>
                                                    <line x1="12" y1="5" x2="12" y2="19" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                </>
                                            )}
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {isExpanded && cat.subCategories && (
                                <div className="bg-white py-2">
                                    {cat.subCategories.map((sub, sIdx) => (
                                        <div key={sIdx} className="flex items-center gap-3 px-12 py-2 hover:text-[#629D23] cursor-pointer group">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#888] group-hover:text-primary transition-colors">
                                                <path d="M9 18l6-6-6-6" />
                                            </svg>
                                            <span className="text-[14px] text-[#444] font-medium group-hover:text-primary transition-colors">{sub}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
