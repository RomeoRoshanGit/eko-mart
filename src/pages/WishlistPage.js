import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function WishlistPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F3F4F6]">
            <Header />

            <main className="flex-1 w-full pb-20">
                {/* Breadcrumbs */}
                <div className="bg-white border-b border-gray-100 py-4 mb-10">
                    <div className="max-w-[1385px] mx-auto px-4 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[14px] text-[#666666]">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#999999]">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                            <span className="text-[#1A1A1A] font-medium">Wishlist</span>
                        </div>
                        <h1 className="text-[40px] font-bold text-[#1A1A1A]">Wishlist</h1>
                    </div>
                </div>

                <div className="max-w-[1385px] mx-auto px-4 flex flex-col gap-8">
                    {/* Progress Bar Card */}
                    <div className="bg-white p-10 rounded-[4px] border border-gray-100 shadow-sm flex flex-col gap-5">
                        <p className="text-[#666666] text-[15px] font-medium">
                            Add <span className="text-[#629D23] font-bold">$59.69</span> to cart and get free shipping
                        </p>
                        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#629D23] rounded-full" style={{ width: '80%' }}></div>
                        </div>
                    </div>

                    {/* Wishlist Table */}
                    <div className="bg-white rounded-[4px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                        <table className="w-full text-left border-collapse">
                            <thead className="border-b border-gray-100">
                                <tr>
                                    <th className="px-10 py-6 text-[15px] font-bold text-[#1A1A1A] text-center w-[60%]">Products</th>
                                    <th className="px-6 py-6 text-[15px] font-bold text-[#1A1A1A] text-center">Price</th>
                                    <th className="px-6 py-6 text-[15px] font-bold text-[#1A1A1A] text-center">Quantity</th>
                                    <th className="px-6 py-6 text-[15px] font-bold text-[#1A1A1A] text-center">SubTotal</th>
                                    <th className="px-6 py-6 text-[15px] font-bold text-[#1A1A1A] text-center">Add to Cart</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Empty for now as per screenshot focus */}
                                <tr className="h-40">
                                    <td colSpan="5"></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="px-10 py-8 border-t border-gray-100 flex justify-end">
                            <button className="bg-[#629D23] text-white font-bold px-10 py-4 rounded-[4px] hover:bg-[#4d7a1b] transition-colors">
                                Clear All
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Scroll to Top Mockup Button */}
            <div className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#629D23] cursor-pointer hover:bg-gray-50 transition-colors z-[100]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </div>
        </div>
    );
}
