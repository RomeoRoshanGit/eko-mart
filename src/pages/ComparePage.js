import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function ComparePage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 w-full bg-white">
                <div className="border-b border-gray-100 py-4">
                    <div className="max-w-[1385px] mx-auto px-4 flex items-center gap-2 text-[14px] text-[#666666]">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#999999]">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                        <span className="text-[#1A1A1A] font-medium">Shop</span>
                    </div>
                </div>

                <div className="max-w-[1385px] mx-auto px-4 py-16">
                    <h1 className="text-[40px] font-bold text-[#1A1A1A] mb-12">Products Compare</h1>

                    <div className="w-full py-20 px-10 border border-gray-100 rounded-[4px] bg-white">
                        <p className="text-[#FF4D4D] text-[18px] font-medium">
                            No products to compare.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
