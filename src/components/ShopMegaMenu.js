export default function ShopMegaMenu() {
    const sections = [
        {
            title: "Shop Layout",
            links: ["Shop Grid Sidebar", "Shop list Sidebar", "Shop Top Filter Grid", "Shop Top Filter List"]
        },
        {
            title: "Shop Details",
            links: ["Shop Details", "Shop Details V2", "Shop Details V3", "Shop Details V4"]
        },
        {
            title: "Product Feature",
            links: ["Variable product", "Affiliate product", "Shop Compare"]
        },
        {
            title: "Shop Others",
            links: ["Cart", "Checkout", "Track Order"]
        }
    ];

    return (
        <div className="absolute top-[100%] left-[-150px] pt-4 z-[110] w-[1170px] animate-fadeIn">
            <div className="bg-white rounded-[4px] shadow-2xl border border-[#E6E6E6] p-10 flex gap-12">
                {sections.map((section, idx) => (
                    <div key={idx} className="flex-1">
                        <h4 className="text-primary font-bold text-[16px] mb-6">{section.title}</h4>
                        <ul className="flex flex-col gap-4">
                            {section.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                    <a href="/" className="text-[#666666] hover:text-primary text-[15px] font-medium transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="flex-[1.5] relative rounded-[8px] overflow-hidden bg-[#F5F5F0] p-8 flex flex-col justify-center min-h-[220px]">
                    <div className="z-10 relative">
                        <h5 className="text-[#1A1A1A] text-lg font-bold leading-tight max-w-[150px] mb-4">
                            Everyday Fresh & Clean with Our Products
                        </h5>
                        <button className="bg-primary text-white text-[12px] font-bold px-4 py-2 rounded-[4px] hover:bg-[#4d7a1b] transition-colors">
                            Read Details
                        </button>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop"
                        alt="Promo"
                        className="absolute bottom-0 right-0 h-[80%] object-contain mix-blend-multiply"
                    />
                </div>
            </div>
        </div>
    );
}
