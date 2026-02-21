export default function Footer() {
    const shopLinks = [
        "Contact Us", "Information", "About Us", "Careers", "Nest Stories"
    ];

    const storeLinks = [
        "Delivery Information", "Privacy Policy", "Terms & Conditions", "Support Center", "Careers"
    ];

    const socialIcons = [
        { icon: "f", name: "facebook" },
        { icon: "t", name: "twitter" },
        { icon: "in", name: "linkedin" },
        { icon: "y", name: "youtube" },
        { icon: "i", name: "instagram" }
    ];

    return (
        <footer className="w-full bg-[#1A1A1A] text-white pt-16 pb-8">
            {/* Main Footer Container */}
            <div className="max-w-[1385px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Column 1: Info & Subscription */}
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                        <img src="/assets/images/logo.svg" alt="Ekomart" className="h-10" />
                    </div>
                    <p className="text-[#999999] text-sm leading-relaxed max-w-[280px]">
                        What's inside: New Arrivals, Exclusive Sales, News & Mores
                    </p>
                    <div className="relative max-w-[320px]">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-white text-[#1A1A1A] py-3 pl-4 pr-14 rounded-[4px] outline-none text-sm"
                        />
                        <button className="absolute right-1 top-1 bottom-1 w-10 bg-[#629D23] rounded-[4px] flex items-center justify-center hover:bg-[#4d7a1b] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/60 hover:text-white">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/60 hover:text-white">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/60 hover:text-white">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/60 hover:text-white">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Column 2: Our Stores */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-lg font-bold">Our Stores</h4>
                    <ul className="flex flex-col gap-4">
                        {storeLinks.map(link => (
                            <li key={link}>
                                <a href="#" className="text-[#999999] hover:text-white text-sm transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Shop Categories */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-lg font-bold">Shop Categories</h4>
                    <ul className="flex flex-col gap-4">
                        {shopLinks.map(link => (
                            <li key={link}>
                                <a href="#" className="text-[#999999] hover:text-white text-sm transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact Us */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-lg font-bold">Need Help? / Contact Us</h4>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4">
                            <div className="w-6 h-6 text-[#629D23] shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <p className="text-[#999999] text-sm leading-relaxed">
                                258 Daniel Street, 2589 Phones Line Berlin, Germany
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-6 h-6 text-[#629D23] shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#999999] text-xs">Call us between 8:00 AM - 12PM</span>
                                <span className="text-[#629D23] font-bold text-xl">+25896 3158 3228</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-6 h-6 text-[#629D23] shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#999999] text-xs">Live Chat</span>
                                <span className="text-sm font-bold">Chat With an Experts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar Area */}
            <div className="border-t border-white/10 pt-8">
                <div className="max-w-[1385px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#999999] text-sm text-center md:text-left">
                        Copyright 2025 ©Ekomart. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <span className="text-sm font-bold">Payment Accepts:</span>
                        <div className="flex gap-2 h-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-full grayscale hover:grayscale-0 transition-all cursor-pointer bg-white px-1 rounded-[2px]" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-full grayscale hover:grayscale-0 transition-all cursor-pointer bg-white px-1 rounded-[2px]" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-full grayscale hover:grayscale-0 transition-all cursor-pointer bg-white px-1 rounded-[2px]" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Skrill_logo.svg" alt="Skrill" className="h-full grayscale hover:grayscale-0 transition-all cursor-pointer bg-white px-1 rounded-[2px]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] shadow-xl hover:bg-[#629D23] hover:text-white transition-all group z-50"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-90">
                    <polyline points="13 17 18 12 13 7" /><line x1="6" y1="12" x2="18" y2="12" />
                </svg>
            </button>
        </footer>
    );
}
