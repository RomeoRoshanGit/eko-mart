import React from 'react';

export default function VendorCard({ name, status, rating, address, phone, logo }) {
    const stars = Array(5).fill(0).map((_, i) => (
        <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < Math.floor(rating) ? "#FFB800" : "#E6E6E6"}
            className="shrink-0"
        >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    ));

    const isOpen = status.toLowerCase() === 'open';

    return (
        <div className="bg-white border border-[#E6E6E6] rounded-[8px] p-8 flex flex-col hover:shadow-lg transition-all group">
            <div className="h-[140px] flex items-center justify-center mb-8">
                <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[#1A1A1A] font-bold text-[24px] leading-tight group-hover:text-primary transition-colors cursor-pointer">
                        {name}
                    </h3>
                    <span className={`px-4 py-1.5 rounded-[4px] text-white text-[13px] font-bold uppercase ${isOpen ? 'bg-[#629D23]' : 'bg-[#ED1C24]'}`}>
                        {status}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        {stars}
                    </div>
                    <span className="text-[#666666] text-[15px]">{rating.toFixed(2)} out of 5</span>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" className="shrink-0 mt-0.5">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <p className="text-[#666666] text-[15px] leading-relaxed">
                            {address}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" className="shrink-0">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <p className="text-[#666666] text-[15px]">
                            {phone}
                        </p>
                    </div>
                </div>

                <button className="bg-[#629D23] text-white font-bold px-10 py-3.5 rounded-[4px] flex items-center justify-center gap-2 hover:bg-[#4d7a1b] transition-colors mt-2 w-fit">
                    Visit Store
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
