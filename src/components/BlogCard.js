export default function BlogCard({ image, date, category, title }) {
    return (
        <div className="bg-white border border-[#E6E6E6] rounded-[12px] overflow-hidden group hover:shadow-lg transition-all flex flex-col h-full">
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[#808080] text-sm mb-4">
                    <div className="flex items-center gap-1.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                        </svg>
                        <span>{category}</span>
                    </div>
                </div>
                <h3 className="text-[#1A1A1A] font-bold text-[20px] mb-8 leading-tight hover:text-primary cursor-pointer transition-colors">
                    {title}
                </h3>
                <button className="flex items-center justify-between bg-[#629D23] hover:bg-[#4d7a1b] text-white font-bold text-[15px] px-6 py-3 rounded-[8px] transition-all group/btn mt-auto w-fit gap-4">
                    <span>Read Details</span>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
}
