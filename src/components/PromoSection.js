import PromoCard from "./PromoCard";

export default function PromoSection() {
    const promos = [
        {
            bgColor: "bg-[#F3F4F0]",
            badgeText: "Weekend Discount",
            title: "Drink Fresh Corn Juice",
            subtitle: "Good Taste",
            image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=400&auto=format&fit=crop",
        },
        {
            bgColor: "bg-[#FFF6E9]",
            badgeText: "Weekend Discount",
            title: "Organic Lemon Flavored Banana Chips",
            subtitle: "Crispy & Crunchy",
            image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=400&auto=format&fit=crop",
        },
        {
            bgColor: "bg-[#F1F3F2]",
            badgeText: "Weekend Discount",
            title: "Nozes Pecanera Brasil Chocolate Snacks",
            subtitle: "Healthy & Sweet",
            image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=400&auto=format&fit=crop",
        }
    ];

    return (
        <section className="w-full py-12">
            <div className="max-w-[1385px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promos.map((promo, index) => (
                    <PromoCard key={index} {...promo} />
                ))}
            </div>
        </section>
    );
}
