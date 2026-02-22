import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState("Dashboard");

    const sidebarItems = [
        { name: "Dashboard", icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
        { name: "Order", icon: <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /> },
        { name: "Track Your Order", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
        { name: "My Address", icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /> },
        { name: "Account Details", icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /> },
        { name: "Log Out", icon: <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /> }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "Dashboard":
                return (
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[28px] font-bold text-[#1A1A1A]">
                            Hello Raisa! (Not Raisa?) <span className="text-[#629D23] cursor-pointer hover:underline">Log Out.</span>
                        </h2>
                        <p className="text-[#666666] text-[15px] max-w-[800px] leading-relaxed">
                            From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                        </p>
                    </div>
                );
            case "Order":
                return (
                    <div className="flex flex-col gap-8">
                        <h2 className="text-[32px] font-bold text-[#1A1A1A]">Your Orders</h2>
                        <div className="w-full overflow-hidden rounded-[4px] border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-white">
                                    <tr className="border-b border-gray-100">
                                        <th className="px-6 py-4 text-[14px] font-bold text-[#1A1A1A] uppercase tracking-wider">Order</th>
                                        <th className="px-6 py-4 text-[14px] font-bold text-[#1A1A1A] uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-4 text-[14px] font-bold text-[#1A1A1A] uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-[14px] font-bold text-[#1A1A1A] uppercase tracking-wider">Total</th>
                                        <th className="px-6 py-4 text-[14px] font-bold text-[#1A1A1A] uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { id: "#1357", date: "March 45, 2020", status: "Processing", total: "$125.00 for 2 item" },
                                        { id: "#2468", date: "June 29, 2020", status: "Completed", total: "$364.00 for 5 item" },
                                        { id: "#2366", date: "August 02, 2020", status: "Completed", total: "$280.00 for 3 item" }
                                    ].map((order, idx) => (
                                        <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-5 text-[15px] font-semibold text-[#1A1A1A]">{order.id}</td>
                                            <td className="px-6 py-5 text-[15px] text-[#666666]">{order.date}</td>
                                            <td className="px-6 py-5 text-[15px] text-[#666666]">{order.status}</td>
                                            <td className="px-6 py-5 text-[15px] text-[#666666]">{order.total}</td>
                                            <td className="px-6 py-5 text-[15px] font-bold text-[#1A1A1A] underline cursor-pointer hover:text-primary">View</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case "Track Your Order":
                return (
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[32px] font-bold text-[#1A1A1A]">Orders tracking</h2>
                        <p className="text-[#666666] text-[15px] max-w-[800px] leading-relaxed">
                            To keep up with the status of your order, kindly input your OrderID in the designated box below and click the "Track" button.
                        </p>
                        <div className="max-w-[800px] flex flex-col gap-8 mt-4">
                            <div className="flex flex-col gap-3">
                                <label className="text-[#1A1A1A] font-semibold text-sm">Order Id</label>
                                <input
                                    type="text"
                                    placeholder="Found in your order confirmation email"
                                    className="w-full px-6 py-4 rounded-[4px] border border-gray-100 bg-[#F9F9F9] text-sm focus:outline-none focus:border-[#629D23]"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-[#1A1A1A] font-semibold text-sm">Billing email</label>
                                <input
                                    type="email"
                                    placeholder="Email You use during checkout"
                                    className="w-full px-6 py-4 rounded-[4px] border border-gray-100 bg-[#F9F9F9] text-sm focus:outline-none focus:border-[#629D23]"
                                />
                            </div>
                            <button className="bg-[#629D23] text-white font-bold px-7 py-3 rounded-[4px] w-fit hover:bg-[#4d7a1b] transition-colors">
                                Track
                            </button>
                        </div>
                    </div>
                );
            case "My Address":
                return (
                    <div className="flex flex-col gap-10">
                        <div className="grid grid-cols-2 gap-20">
                            <div className="flex flex-col gap-6">
                                <h2 className="text-[32px] font-bold text-[#1A1A1A]">Billing Address</h2>
                                <div className="text-[#666666] text-[15px] flex flex-col gap-1 leading-relaxed">
                                    <p>3522 Interstate</p>
                                    <p>75 Business Spur,</p>
                                    <p>Sault Ste.</p>
                                    <p>Marie, MI 49783</p>
                                    <p>New York</p>
                                </div>
                                <span className="text-primary font-bold text-[15px] cursor-pointer hover:underline mt-2">Edit</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <h2 className="text-[32px] font-bold text-[#1A1A1A]">Shipping Address</h2>
                                <div className="text-[#666666] text-[15px] flex flex-col gap-1 leading-relaxed">
                                    <p>3522 Interstate</p>
                                    <p>75 Business Spur,</p>
                                    <p>Sault Ste.</p>
                                    <p>Marie, MI 49783</p>
                                    <p>New York</p>
                                </div>
                                <span className="text-primary font-bold text-[15px] cursor-pointer hover:underline mt-2">Edit</span>
                            </div>
                        </div>
                    </div>
                );
            case "Account Details":
                return (
                    <div className="flex flex-col gap-8">
                        <h2 className="text-[32px] font-bold text-[#1A1A1A]">Account Details</h2>
                        <div className="max-w-[800px] flex flex-col gap-8 mt-4">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-3">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-6 py-4 rounded-[4px] border border-gray-100 bg-white text-sm focus:outline-none focus:border-[#629D23]"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full px-6 py-4 rounded-[4px] border border-gray-100 bg-white text-sm focus:outline-none focus:border-[#629D23]"
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                placeholder="Display Name"
                                className="w-full px-6 py-4 rounded-[4px] border border-gray-100 bg-white text-sm focus:outline-none focus:border-[#629D23]"
                            />
                            <input
                                type="email"
                                placeholder="Email Address *"
                                className="w-full px-6 py-4 rounded-[4px] border border-gray-100 bg-white text-sm focus:outline-none focus:border-[#629D23]"
                            />
                            <input
                                type="password"
                                placeholder="Current Password *"
                                className="w-full px-6 py-4 rounded-[4px] border border-gray-100 bg-white text-sm focus:outline-none focus:border-[#629D23]"
                            />
                            <input
                                type="password"
                                placeholder="New Password *"
                                className="w-full px-6 py-4 rounded-[4px] border border-gray-100 bg-white text-sm focus:outline-none focus:border-[#629D23]"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password *"
                                className="w-full px-6 py-4 rounded-[4px] border border-gray-100 bg-white text-sm focus:outline-none focus:border-[#629D23]"
                            />
                            <button className="bg-[#629D23] text-white font-bold px-7 py-3 rounded-[4px] w-fit hover:bg-[#4d7a1b] transition-colors">
                                Save Change
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 max-w-[1385px] mx-auto px-4 py-20 w-full flex gap-10">
                <aside className="w-[300px] shrink-0">
                    <div className="flex flex-col gap-3">
                        {sidebarItems.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveTab(item.name)}
                                className={`flex items-center gap-4 px-6 py-4 rounded-[4px] border transition-all cursor-pointer group ${activeTab === item.name
                                    ? "bg-[#629D23] border-[#629D23] text-white"
                                    : "bg-white border-gray-300 text-[#666666] hover:border-[#629D23] hover:text-[#629D23]"
                                    }`}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {item.icon}
                                    {item.name === "Log Out" && <path d="M16 17l5-5-5-5M21 12H9" />}
                                    {item.name === "Order" && <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />}
                                    {item.name === "Account Details" && <circle cx="12" cy="7" r="4" />}
                                </svg>
                                <span className="font-semibold text-sm">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </aside>

                <section className="flex-1 min-h-[500px]">
                    {renderContent()}
                </section>
            </main>

            <Footer />

            <div className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#629D23] cursor-pointer hover:bg-gray-50 transition-colors z-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </div>
        </div>
    );
}
