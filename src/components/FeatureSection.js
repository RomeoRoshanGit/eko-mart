import FeatureItem from "./FeatureItem";

export default function FeatureSection() {
    const features = [
        {
            title: "Installments Without Card",
            subtitle: "Easy Payment Option",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                    <line x1="7" y1="15" x2="7" y2="15.01" />
                    <line x1="11" y1="15" x2="11" y2="15.01" />
                </svg>
            )
        },
        {
            title: "Track Your Order Online",
            subtitle: "Order Location Check",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2v2" />
                </svg>
            )
        },
        {
            title: "100% Happy Customers",
            subtitle: "Happy Customer Feedbacks",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
            )
        },
        {
            title: "Free Delivery From $70",
            subtitle: "Home Delivery Available",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full bg-white border-b border-[#E6E6E6]">
            <div className="max-w-[1385px] mx-auto px-4 py-8 flex flex-wrap justify-between gap-y-6">
                {features.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        subtitle={feature.subtitle}
                    />
                ))}
            </div>
        </section>
    );
}
