import { useState } from "react";
import ProductCard from "./ProductCard";

export default function PopularProducts() {
    const tabs = ["Frozen Foods", "Diet Foods", "Healthy Foods", "Vitamin Items"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const products = {
        "Frozen Foods": [
            { id: 1, title: "Dalivaring business makes your profit", weight: "500g Pack", price: "63.00", oldPrice: "36.00", discount: "25%", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=300&auto=format&fit=crop" },
            { id: 2, title: "Firebase business makes your profit", weight: "500g Pack", price: "50.00", oldPrice: "36.00", discount: "25%", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=300&auto=format&fit=crop" },
            { id: 3, title: "Netlyfy business makes your profit", weight: "500g Pack", price: "19.00", oldPrice: "36.00", discount: "25%", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=300&auto=format&fit=crop" },
            { id: 4, title: "Details business makes your profit", weight: "500g Pack", price: "90.00", oldPrice: "36.00", discount: "25%", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=300&auto=format&fit=crop" },
        ],
        "Diet Foods": [
            { id: 5, title: "Healthy Salad Mix Organic", weight: "250g Pack", price: "12.00", oldPrice: "15.00", discount: "20%", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=300&auto=format&fit=crop" },
            { id: 6, title: "Organic Green Smoothie", weight: "500ml", price: "8.00", oldPrice: "10.00", discount: "20%", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=300&auto=format&fit=crop" },
        ],
        "Healthy Foods": [
            { id: 7, title: "Mixed Organic Nuts", weight: "1kg", price: "45.00", oldPrice: "55.00", discount: "18%", image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=300&auto=format&fit=crop" },
        ],
        "Vitamin Items": [
            { id: 8, title: "Vitamin C Supplement", weight: "60 Tabs", price: "25.00", oldPrice: "30.00", discount: "15%", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=300&auto=format&fit=crop" },
        ]
    };

    return (
        <section className="w-full py-12 bg-gray-100">
            <div className="max-w-[1385px] mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">Popular Products</h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-sm font-semibold transition-all ${activeTab === tab
                                    ? "bg-white"
                                    : "text-black"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(products[activeTab] || []).map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
