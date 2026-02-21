import { useState } from "react";
import SaleProductCard from "./SaleProductCard";

export default function BestSales() {
    const tabs = ["All", "Baking material", "Milks & Dairies", "Vagetable"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const salesData = {
        "All": [
            { id: 1, title: "Firebase business makes your profit", weight: "500g Pack", price: "50.00", oldPrice: "36.00", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=300&auto=format&fit=crop" },
            { id: 2, title: "Netlyfy business makes your profit", weight: "500g Pack", price: "19.00", oldPrice: "36.00", image: "https://images.unsplash.com/photo-1582910831295-df5232939989?q=80&w=300&auto=format&fit=crop" },
            { id: 3, title: "Details business makes your profit", weight: "500g Pack", price: "90.00", oldPrice: "36.00", image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=300&auto=format&fit=crop" },
            { id: 4, title: "Profitable business makes your profit", weight: "500g Pack", price: "30.00", oldPrice: "36.00", image: "https://images.unsplash.com/photo-1628102422223-2950ecb75345?q=80&w=300&auto=format&fit=crop" },
            { id: 5, title: "Valuable business makes your profit", weight: "500g Pack", price: "16.00", oldPrice: "36.00", image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=300&auto=format&fit=crop" },
        ],
        "Baking material": [
            { id: 6, title: "Organic Wheat Flour", weight: "2kg", price: "15.00", oldPrice: "20.00", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop" },
            { id: 7, title: "Pure Cane Sugar", weight: "1kg", price: "5.00", oldPrice: "7.00", image: "https://images.unsplash.com/photo-1544208062-346704944855?q=80&w=300&auto=format&fit=crop" },
        ],
        "Milks & Dairies": [
            { id: 8, title: "Fresh Organic Milk", weight: "1L", price: "3.50", oldPrice: "4.50", image: "https://images.unsplash.com/photo-1550583724-1255d1426639?q=80&w=300&auto=format&fit=crop" },
            { id: 9, title: "Natural Greek Yogurt", weight: "500ml", price: "6.00", oldPrice: "8.00", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=300&auto=format&fit=crop" },
        ],
        "Vagetable": [
            { id: 10, title: "Fresh Spinach Pack", weight: "250g", price: "2.00", oldPrice: "3.00", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=300&auto=format&fit=crop" },
            { id: 11, title: "Organic Tomatoes", weight: "500g", price: "4.00", oldPrice: "6.00", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=300&auto=format&fit=crop" },
        ]
    };

    const filteredProducts = activeTab === "All"
        ? salesData["All"]
        : salesData[activeTab] || [];

    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-[1385px] mx-auto px-4 bg-[#F9F9F9] px-[60px] py-[60px] rounded-[8px] border border-[#E6E6E6]">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">Don't miss this week's sales</h2>

                    {/* Tabs - Box style */}
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-sm font-semibold rounded-[4px] border transition-all ${activeTab === tab
                                    ? "bg-white text-[#1A1A1A] border-[#E6E6E6] shadow-sm"
                                    : "text-[#808080] border-transparent"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {filteredProducts.map((product) => (
                        <SaleProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
