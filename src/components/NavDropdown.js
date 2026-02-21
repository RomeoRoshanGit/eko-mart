export default function NavDropdown({ items }) {
    return (
        <div className="absolute top-[100%] left-0 pt-4 z-[110] min-w-[220px] animate-fadeIn">
            <div className="bg-white rounded-[4px] shadow-xl border border-[#E6E6E6] py-4 flex flex-col">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className="px-6 py-2.5 text-[#666666] hover:text-primary hover:bg-gray-50 text-[15px] font-medium transition-all"
                    >
                        {typeof item === 'string' ? item : (
                            <div className="flex items-center justify-between gap-2">
                                <span>{item.label}</span>
                                {item.badge && (
                                    <span className="text-[12px] text-primary font-bold">
                                        ( {item.badge} )
                                    </span>
                                )}
                            </div>
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
}
