import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductListCard from '../components/ProductListCard';

export default function ShopPage() {
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy] = useState('Latest');

    const products = [
        { id: 1, title: "Details Profitable business makes your profit", weight: "500g Pack", price: "29.00", oldPrice: "36.00", discount: "25%", image: "https://images.unsplash.com/photo-1621648057993-9c593630f9d9?q=80&w=300&auto=format&fit=crop" },
        { id: 2, title: "Firebase business makes your profit", weight: "500g Pack", price: "50.00", oldPrice: "36.00", discount: "25%", image: "https://images.unsplash.com/photo-1610832958506-ee563384239d?q=80&w=300&auto=format&fit=crop" },
        { id: 3, title: "Netlyfy business makes your profit", weight: "500g Pack", price: "19.00", oldPrice: "36.00", discount: "25%", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=300&auto=format&fit=crop" },
        { id: 4, title: "Details business makes your profit", weight: "500g Pack", price: "90.00", oldPrice: "36.00", discount: "25%", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=300&auto=format&fit=crop" },
        { id: 5, title: "Profitable business makes your profit", weight: "500g Pack", price: "30.00", oldPrice: "36.00", discount: "25%", image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=300&auto=format&fit=crop" },
    ];

    const filters = [
        { label: "All Categories", options: ["Fruits", "Vegetables", "Dairy", "Frozen"] },
        { label: "All Brands", options: ["EkoMart", "Organic", "Fresh", "Nature"] },
        { label: "All Size", options: ["Small", "Medium", "Large", "Bulk"] },
        { label: "All Weight", options: ["250g", "500g", "1kg", "5kg"] },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 w-full pb-24">
                <div className="max-w-[1385px] mx-auto px-4 mt-10">

                    <div className="bg-[#F3F4F6] px-8 py-6 rounded-t-[12px] flex items-center justify-between border-b border-gray-200">
                        <span className="text-[#666666] text-[15px]">Showing 1–20 of 57 results</span>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="text-[#666666] text-[15px]">Sort:</span>
                                <div className="bg-white border border-gray-100 rounded-[6px] px-4 py-2 flex items-center gap-3 cursor-pointer min-w-[160px] justify-between">
                                    <span className="text-[#1A1A1A] font-medium text-[15px]">Short By {sortBy}</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`w-10 h-10 rounded-[6px] flex items-center justify-center transition-colors ${viewMode === 'grid' ? "bg-[#629D23] text-white" : "bg-white text-[#666666] border border-gray-100"}`}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                                        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`w-10 h-10 rounded-[6px] flex items-center justify-center transition-colors ${viewMode === 'list' ? "bg-[#629D23] text-white" : "bg-white text-[#666666] border border-gray-100"}`}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F3F4F6] px-8 py-8 rounded-b-[12px] flex items-center gap-4 mb-10">
                        {filters.map((filter, idx) => (
                            <div key={idx} className="flex-1">
                                <div className="bg-white border border-gray-100 rounded-[6px] px-6 py-4 flex items-center justify-between cursor-pointer group hover:border-primary transition-colors">
                                    <span className="text-[#1A1A1A] font-medium text-[15px]">{filter.label}</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3" className="group-hover:stroke-primary transition-colors">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                        <button className="bg-white text-[#1A1A1A] font-bold px-8 py-4 rounded-[6px] border border-gray-100 hover:border-primary transition-colors min-w-[120px]">
                            Filter
                        </button>
                        <button className="bg-white text-[#1A1A1A] font-bold px-8 py-4 rounded-[6px] border border-gray-100 hover:border-primary transition-colors min-w-[120px]">
                            Reset Filter
                        </button>
                    </div>

                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-5 gap-6">
                            {products.concat(products).map((product, idx) => (
                                <ProductCard key={idx} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6">
                            {products.map((product) => (
                                <ProductListCard key={product.id} {...product} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
