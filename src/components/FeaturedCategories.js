import { useRef } from "react";
import CategoryItem from "./CategoryItem";

export default function FeaturedCategories() {
    const scrollRef = useRef(null);

    const categories = [
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },
        { name: "Organic Vegetable", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop" },

    ];

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    return (
        <section className="w-full py-12">
            <div className="max-w-[1385px] mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-[#1A1A1A]">Featured Categories</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={scrollLeft}
                            className="w-10 h-10 rounded-[4px] border border-primary flex items-center justify-center text-black-400 hover:border-primary hover:text-white hover:bg-primary transition-all active:scale-95"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-10 h-10 rounded-[4px] border border-primary flex items-center justify-center text-black-400 hover:border-primary hover:text-white hover:bg-primary transition-all active:scale-95"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="bg-[#F2F2F2] p-8 rounded-[8px]">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
                    >
                        {categories.map((cat, index) => (
                            <CategoryItem key={index} name={cat.name} image={cat.image} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
