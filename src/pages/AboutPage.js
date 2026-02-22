import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
            <Header />

            <section className="relative h-[600px] w-full flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 max-w-[900px] mx-auto text-center px-4">
                    <h1 className="text-white text-[64px] font-bold leading-tight mb-6">
                        Do You Want To Know Us?
                    </h1>
                    <p className="text-white/80 text-[16px] leading-relaxed mb-10 max-w-[700px] mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.
                    </p>
                    <button className="bg-[#629D23] text-white font-bold px-10 py-4 rounded-[4px] hover:bg-[#4d7a1b] transition-colors">
                        Contact Us
                    </button>
                </div>

                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[1385px] px-4">
                    <div className="bg-white rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-16 px-10 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <span className="text-[48px] font-bold text-[#1A1A1A]">60M+</span>
                            <span className="text-[#666666] text-[15px] font-medium leading-tight">Happy<br />Customers</span>
                        </div>
                        <div className="h-16 w-[1px] bg-gray-100"></div>
                        <div className="flex items-center gap-6">
                            <span className="text-[48px] font-bold text-[#1A1A1A]">105M+</span>
                            <span className="text-[#666666] text-[15px] font-medium leading-tight">Grocery<br />Products</span>
                        </div>
                        <div className="h-16 w-[1px] bg-gray-100"></div>
                        <div className="flex items-center gap-6">
                            <span className="text-[48px] font-bold text-[#1A1A1A]">80K+</span>
                            <span className="text-[#666666] text-[15px] font-medium leading-tight">Active<br />Salesman</span>
                        </div>
                        <div className="h-16 w-[1px] bg-gray-100"></div>
                        <div className="flex items-center gap-6">
                            <span className="text-[48px] font-bold text-[#1A1A1A]">60K+</span>
                            <span className="text-[#666666] text-[15px] font-medium leading-tight">Store<br />Worldwide</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-52 pb-24 max-w-[1385px] mx-auto px-4 w-full">
                <div className="grid grid-cols-2 gap-20 items-center">
                    <div className="rounded-[12px] overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1000&auto=format&fit=crop"
                            alt="Mission"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="flex flex-col gap-8">
                        <h2 className="text-[48px] font-bold text-[#1A1A1A] leading-tight">
                            Your Destination for Quality Produce and Pantry Essentials
                        </h2>
                        <p className="text-[#666666] text-[15px] leading-relaxed">
                            Venenatis augue consequat class magnis sed purus, euismod ligula nibh congue quis vestibulum nostra, cubilia varius velit vitae rhoncus. Turpis malesuada fringilla urna dui est torquent aliquet, mi nec fermentum placerat nisi venenatis sapien, mattis nunc nullam rutrum feugiat porta. Pharetra mi nisl consequat semper quam litora aenean eros conubia molestie erat, et cursus integer rutrum sollicitudin auctor curae inceptos senectus sagittis est.
                        </p>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Elementum sociis rhoncus aptent auctor urna justo",
                                "Habitasse venenatis gravida nisl, sollicitudin posuere",
                                "Uisque cum convallis nostra in sapien nascetur, netus",
                                "Class nunc aliquet nulla dis senectus Iputate porta",
                                "Aenean gravida a est ante nisl nostra dui hendrerit",
                                "Bibendum venenatis dignissim non himenaeos eget"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-[#666666] text-[15px]">
                                    <span className="w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-[1385px] mx-auto px-4 text-center">
                    <h2 className="text-[48px] font-bold text-[#1A1A1A] mb-4">Meet Our Expert Team</h2>
                    <p className="text-[#666666] text-[15px] max-w-[600px] mx-auto mb-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
                    </p>
                    <div className="grid grid-cols-4 gap-8">
                        {[
                            { name: "Samuel Alexander", role: "Design Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
                            { name: "Isabella Charlotte", role: "Design Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
                            { name: "William Ethan", role: "Design Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
                            { name: "Sophia Amelia", role: "Design Director", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" }
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-full aspect-square rounded-[12px] overflow-hidden mb-6 shadow-md border border-gray-100">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-[24px] font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
                                <p className="text-[#666666] text-[13px] mb-6 uppercase tracking-wider">{member.role}</p>
                                <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                                <div className="flex items-center gap-3 text-[#629D23] font-bold text-[15px] cursor-pointer hover:underline">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>+25896 3158 3228</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#F9F9F9]">
                <div className="max-w-[1385px] mx-auto px-4 text-center">
                    <h2 className="text-[48px] font-bold text-[#1A1A1A] mb-4">Why You Choose Us?</h2>
                    <p className="text-[#666666] text-[15px] max-w-[600px] mx-auto mb-16 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
                    </p>
                    <div className="grid grid-cols-3 gap-8">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="bg-white p-16 rounded-[12px] shadow-sm border border-gray-100 flex flex-col items-center relative group hover:shadow-lg transition-all">
                                <span className="absolute top-2  text-[80px] font-bold text-[#F3F4F6] select-none group-hover:text-primary/10 transition-colors">0{num}</span>
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-10 relative z-10">
                                    <div className="w-16 h-16 border-2 border-[#629D23] rounded-[16px] flex items-center justify-center">
                                        {num === 1 && (
                                            <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#629D23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                            </svg>
                                        )}
                                        {num === 2 && (
                                            <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#629D23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M8 12h8M12 8v8" />
                                            </svg>
                                        )}
                                        {num === 3 && (
                                            <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#629D23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <h3 className="text-[28px] font-bold text-[#1A1A1A] mb-6 relative z-10">Organic Food Services</h3>
                                <p className="text-[#666666] text-[15px] leading-relaxed relative z-10">
                                    When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-[1385px] mx-auto px-4">
                    <h2 className="text-[48px] font-bold text-[#1A1A1A] mb-16">Customer Feedbacks</h2>
                    <div className="grid grid-cols-2 gap-8">
                        {[1, 2].map((num) => (
                            <div key={num} className="bg-white p-12 rounded-[12px] border border-gray-100 shadow-sm flex flex-col gap-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                                            <img
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
                                                alt="User"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-[20px] font-bold text-[#1A1A1A]">Andrew D. Smith</h4>
                                            <p className="text-[#629D23] text-[15px] font-medium">Manager</p>
                                        </div>
                                    </div>
                                    <div className="text-primary flex items-center gap-2">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M15 11l-3-3h-5l3 3h5zm4 4l-3-3h-5l3 3h5z" />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                        </svg>
                                        <span className="font-bold text-[24px]">posthill</span>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-gray-50"></div>
                                <p className="text-[#666666] text-[18px] leading-relaxed italic">
                                    "According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <div className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#629D23] cursor-pointer hover:bg-gray-50 transition-colors z-[100]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </div>
        </div>
    );
}
