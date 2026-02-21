import { useState } from "react";
import SaleProductCard from "./SaleProductCard";

export default function WeeklySales() {
    const tabs = ["Frozen Foods", "Diet Foods", "Healthy Foods", "Vitamin Items"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const salesData = {
        "Frozen Foods": [
            { id: 1, title: "Firebase business makes your profit", weight: "500g Pack", price: "50.00", oldPrice: "36.00", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=300&auto=format&fit=crop" },
            { id: 2, title: "Netlyfy business makes your profit", weight: "500g Pack", price: "19.00", oldPrice: "36.00", image: "https://images.unsplash.com/photo-1582910831295-df5232939989?q=80&w=300&auto=format&fit=crop" },
            { id: 3, title: "Details business makes your profit", weight: "500g Pack", price: "90.00", oldPrice: "36.00", image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=300&auto=format&fit=crop" },
            { id: 4, title: "Profitable business makes your profit", weight: "500g Pack", price: "30.00", oldPrice: "36.00", image: "https://images.unsplash.com/photo-1628102422223-2950ecb75345?q=80&w=300&auto=format&fit=crop" },
            { id: 5, title: "Valuable business makes your profit", weight: "500g Pack", price: "16.00", oldPrice: "36.00", image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=300&auto=format&fit=crop" },
        ],
        "Diet Foods": [
            { id: 6, title: "Organic Green Smoothie", weight: "500ml", price: "8.00", oldPrice: "10.00", image: "https://images.unsplash.com/photo-1610832958506-ee563384239d?q=80&w=300&auto=format&fit=crop" },
        ],
        "Healthy Foods": [
            { id: 7, title: "Mixed Organic Nuts", weight: "1kg", price: "45.00", oldPrice: "55.00", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=300&auto=format&fit=crop" },
        ],
        "Vitamin Items": [
            { id: 8, title: "Vitamin C Supplement", weight: "60 Tabs", price: "25.00", oldPrice: "30.00", image: "https://images.unsplash.com/photo-1542831371-d5393d259c1b?q=80&w=200&auto=format&fit=crop" },
        ]
    };

    return (
        <section className="w-full py-12 bg-gray-100">
            <div className="max-w-[1385px] mx-auto px-4 bg-white px-[60px] py-[60px] rounded-[8px] border border-[#E6E6E6]">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">Don't miss this week's sales</h2>

                    {/* Tabs - Pill style */}
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 text-sm font-semibold rounded-full transition-all ${activeTab === tab
                                    ? "bg-[#629D23] text-white"
                                    : "text-[#808080] hover:text-[#629D23]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {(salesData[activeTab] || []).map((product) => (
                        <SaleProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
