import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VendorCard from '../components/VendorCard';

export default function VendorsPage() {
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy] = useState('Latest');

    const vendors = [
        {
            id: 1,
            name: "Fresh Juice Bar",
            status: "Closed",
            rating: 4.50,
            address: "530 Post Ct El Dorado Hills California, United States",
            phone: "+1 (511) 934-8170",
            logo: "https://t3.ftcdn.net/jpg/04/17/84/87/360_F_417848729_p9pWpXm45QREzGkC7vR6K7j4pTfI8pMh.jpg"
        },
        {
            id: 2,
            name: "Food Character",
            status: "Open",
            rating: 4.50,
            address: "530 Post Ct El Dorado Hills California, United States",
            phone: "+1 (511) 934-8170",
            logo: "https://t4.ftcdn.net/jpg/02/86/35/05/360_F_286350550_19lP4wG42uS6XfO9pG3VzFh0y3nNnJj0.jpg"
        },
        {
            id: 3,
            name: "Food Forulard",
            status: "Open",
            rating: 4.50,
            address: "530 Post Ct El Dorado Hills California, United States",
            phone: "+1 (511) 934-8170",
            logo: "https://t3.ftcdn.net/jpg/03/06/63/13/360_F_306631332_Hk9jN9g9W4pS9fB6T5q9VzFh0y3nNnJj0.jpg"
        },
        {
            id: 4,
            name: "Authentic Grocery",
            status: "Closed",
            rating: 4.50,
            address: "530 Post Ct El Dorado Hills California, United States",
            phone: "+1 (511) 934-8170",
            logo: "https://t4.ftcdn.net/jpg/02/75/39/21/360_F_275392181_pP9pWpXm45QREzGkC7vR6K7j4pTfI8pMh.jpg"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
            <Header />

            <main className="flex-1 w-full pb-24">
                <section className="pt-20 pb-24 text-center bg-white px-4">
                    <h1 className="text-[64px] font-bold text-[#1A1A1A] mb-12">Vendors List</h1>

                    <div className="max-w-[800px] mx-auto relative flex items-center">
                        <input
                            type="text"
                            placeholder="Search vendors (by name or ID)..."
                            className="w-full bg-[#F3F4F6] border-none rounded-full px-10 py-6 text-[16px] outline-none focus:ring-2 focus:ring-[#629D23]/50 transition-all placeholder:text-[#999999]"
                        />
                        <button className="absolute right-3 bg-[#629D23] text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#4d7a1b] transition-colors shadow-lg shadow-[#629D23]/20">
                            Search
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                            </svg>
                        </button>
                    </div>
                </section>

                <div className="max-w-[1385px] mx-auto px-4">
                    <div className="flex items-center justify-between py-8 border-t border-gray-100 mb-4">
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

                    <div className="grid grid-cols-4 gap-8">
                        {vendors.concat(vendors).map((vendor, idx) => (
                            <VendorCard key={idx} {...vendor} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />

            <div className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#629D23] cursor-pointer hover:bg-gray-50 transition-colors z-[100]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </div>
        </div>
    );
}
