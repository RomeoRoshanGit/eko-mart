import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MobileDrawer({ isOpen, onClose, navItems, isHome }) {
    const navigate = useNavigate();
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleSubMenu = (label) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] lg:hidden">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            />

            {/* Panel */}
            <div className={`absolute left-0 top-0 h-full w-[300px] bg-white shadow-2xl flex flex-col animate-slideRight`}>
                {/* Top Section */}
                <div className="p-5 border-b flex items-center justify-between">
                    <Link to="/" onClick={onClose}>
                        <img src="/assets/images/logo-01.svg" alt="EkoMart Logo" className="h-8" />
                    </Link>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto py-4">
                    <nav className="flex flex-col">
                        {navItems.map((item, idx) => (
                            <div key={idx} className="flex flex-col border-b border-gray-50 last:border-none">
                                <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                                    <span
                                        className="text-[#1A1A1A] font-bold text-[15px] cursor-pointer"
                                        onClick={() => {
                                            if (item.navigateTo) {
                                                navigate(item.navigateTo);
                                                onClose();
                                            } else {
                                                toggleSubMenu(item.label);
                                            }
                                        }}
                                    >
                                        {item.label}
                                        {item.label === "Dashboard" && (
                                            <span className="ml-2 text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded">New</span>
                                        )}
                                    </span>
                                    {item.items && (
                                        <button
                                            onClick={() => toggleSubMenu(item.label)}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${openSubMenus[item.label] ? "rotate-180 text-primary" : "text-gray-400"}`}
                                        >
                                            <svg width="12" height="8" viewBox="0 0 10 6" fill="none">
                                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                {/* Sub-menu Items */}
                                {item.items && openSubMenus[item.label] && (
                                    <div className="bg-gray-50/50 py-2 border-t border-gray-100 italic">
                                        {item.items.map((sub, sIdx) => {
                                            const label = typeof sub === 'string' ? sub : sub.label;
                                            const navigateTo = typeof sub === 'string' ? null : sub.navigateTo;
                                            return (
                                                <div
                                                    key={sIdx}
                                                    className="px-10 py-3 text-[14px] text-[#666666] hover:text-primary transition-colors cursor-pointer"
                                                    onClick={() => {
                                                        if (navigateTo) navigate(navigateTo);
                                                        onClose();
                                                    }}
                                                >
                                                    {label}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="p-6 bg-gray-50 border-t">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-sm text-[#666666]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>Berlin Germany Store</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-[#666666]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span>+258 3268 21485</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
