import React from 'react';

export default function OfficeCard({ title, address }) {
    return (
        <div className="bg-[#F3F4F6] p-8 rounded-[12px] flex items-center gap-6 border border-transparent hover:border-primary/20 transition-all group">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110">
                <div className="w-10 h-10 rounded-full bg-[#629D23]/10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#629D23" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-[#1A1A1A] font-bold text-[20px]">{title}</h4>
                <p className="text-[#666666] text-[15px] leading-relaxed">
                    {address}
                </p>
            </div>
        </div>
    );
}
