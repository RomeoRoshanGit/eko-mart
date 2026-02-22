import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import WhiteButton from "./WhiteButton";
import NavDropdown from "./NavDropdown";
import ShopMegaMenu from "./ShopMegaMenu";
import CartDropdown from "./CartDropdown";
import CategoryDropdown from "./CategoryDropdown";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [isSticky, setIsSticky] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isWishlistHovered, setIsWishlistHovered] = useState(false);
    const [isCartHovered, setIsCartHovered] = useState(false);
    const [isCategoryHovered, setIsCategoryHovered] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const navItems = [
        { label: "Home", navigateTo: "/", items: ["Home One", "Home Two", "Home Three", "Home Four", "Home Five"] },
        { label: "About", navigateTo: "/about" },
        { label: "Shop", type: "mega", navigateTo: "/shop" },
        { label: "Vendors", items: ["Vendor List", "Vendor Grid", "Vendor Details"], navigateTo: "/vendors" },
        {
            label: "Pages",
            items: [
                { label: "Dashboard", badge: "New", navigateTo: "/account" },
                { label: "About", navigateTo: "/about" },
                { label: "Store", navigateTo: "/shop" },
                { label: "Contact", navigateTo: "/contact" },
                { label: "Wishlist", navigateTo: "/wishlist" },
                { label: "Compare", navigateTo: "/compare" },
                "Invoice", "Register", "Login", "Privacy Policy", "Cookies Policy", "Terms & Condition"
            ]
        },
        { label: "Blog", navigateTo: "/blog", items: ["Blog", "Blog List Left Sidebar", "Blog List Right Sidebar", "Blog Details"] },
        { label: "Dashboard", navigateTo: "/account" },
        { label: "Contact", navigateTo: "/contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full flex flex-col font-sans">
            <MobileDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                navItems={navItems}
                isHome={isHome}
            />

            <div className="w-full bg-primary text-[#B3B3B3] text-sm py-2 hidden lg:block">
                <div className="max-w-[1385px] mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-4 text-white">
                        <p>FREE delivery & 40% Discount for next 3 orders! <span className="text-white cursor-pointer">Place your 1st order in.</span></p>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                        <p>Need help? Call Us: <span className="text-white font-semibold">+258 3268 21485</span></p>
                    </div>
                </div>
            </div>

            {/* Tier 1.5: Secondary Utility Bar (Visible on non-home pages) */}
            {!isHome && (
                <div className="w-full bg-white border-b border-gray-100 py-2.5 hidden lg:block">
                    <div className="max-w-[1385px] mx-auto px-4 flex justify-between items-center text-[#666666] text-[13px] font-medium">
                        <div className="flex items-center gap-6">
                            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                            <Link to="/account" className="hover:text-primary transition-colors">My Account</Link>
                            <Link to="/wishlist" className="hover:text-primary transition-colors">Wishlist</Link>
                        </div>
                        <div className="flex items-center gap-8">
                            <span className="text-[#888888]">We deliver to your everyday from 7:00 to 22:00</span>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                                    <span>English</span>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                                    <span>USD</span>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <Link to="/track-order" className="hover:text-primary transition-colors">Track Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className={`w-full transition-colors duration-300 ${isHome ? "bg-[#629D23] border-t border-white/20" : "bg-white"} py-4 lg:py-5`}>
                <div className="max-w-[1385px] mx-auto px-4 flex items-center justify-between gap-4 lg:gap-10">
                    <div className="flex items-center shrink-0">
                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsDrawerOpen(true)}
                            className={`lg:hidden mr-4 p-2 rounded-md ${isHome ? "text-white hover:bg-white/10" : "text-[#1A1A1A] hover:bg-gray-100"}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>

                        <Link to="/">
                            <img src={isHome ? "/assets/images/logo.svg" : "/assets/images/logo-01.svg"} alt="EkoMart Logo" className="h-8 lg:h-10" />
                        </Link>
                    </div>

                    <div className="flex-1 max-w-[700px] hidden lg:block">
                        <div className={`flex items-center rounded-md shadow-sm relative ${isHome ? "bg-white" : "bg-[#F3F4F6]"}`}>
                            <div
                                className={`flex items-center px-5 py-3 border-r cursor-pointer group relative ${isHome ? "border-gray-200 hover:bg-gray-50" : "border-gray-300 hover:bg-gray-200/50"}`}
                                onMouseEnter={() => setIsCategoryHovered(true)}
                                onMouseLeave={() => setIsCategoryHovered(false)}
                            >
                                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className={`mr-2 ${isHome ? "text-gray-800" : "text-[#1A1A1A]"}`}>
                                    <path d="M1 1H19M1 7H19M1 13H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <span className={`font-semibold text-sm whitespace-nowrap ${isHome ? "text-gray-800" : "text-[#1A1A1A]"}`}>Categories</span>
                                {isCategoryHovered && <CategoryDropdown />}
                            </div>
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className={`flex-1 px-5 py-3 outline-none text-sm placeholder-gray-400 bg-transparent ${isHome ? "text-gray-500" : "text-[#1A1A1A]"}`}
                            />
                            {isHome && (
                                <PrimaryButton
                                    className="h-10 px-6 mr-[2px]"
                                    text="Search"
                                    icon={
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2" />
                                            <path d="M14 14L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    }
                                />
                            )}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-3 shrink-0">
                        <WhiteButton
                            className="hidden sm:flex px-4 py-3 h-10 lg:h-12"
                            text="Account"
                            icon={
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            }
                            onClick={() => navigate("/account")}
                        />
                        <WhiteButton
                            className="w-10 h-10 lg:w-12 lg:h-12"
                            badge={0}
                            icon={
                                <img src="/assets/icons/account.svg" alt="EkoMart Logo" className="h-5" />
                            }
                            onClick={() => navigate("/compare")}
                        />

                        <div
                            className="relative"
                            onMouseEnter={() => setIsWishlistHovered(true)}
                            onMouseLeave={() => setIsWishlistHovered(false)}
                        >
                            <WhiteButton
                                className={`px-4 py-3 h-10 lg:h-12 transition-colors flex items-center justify-center`}
                                textClassName="hidden md:block"
                                text="Wishlist"
                                badge={0}
                                icon={
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                    </svg>
                                }
                                onClick={() => navigate("/wishlist")}
                            />
                            {isWishlistHovered && <CartDropdown type="wishlist" count="00" subtotal="0.00" />}
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => setIsCartHovered(true)}
                            onMouseLeave={() => setIsCartHovered(false)}
                        >
                            <WhiteButton
                                className={`px-4 py-3 h-10 lg:h-12 transition-colors flex items-center justify-center`}
                                textClassName="hidden md:block"
                                text="Cart"
                                badge={0}
                                icon={
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                                        <circle cx="8" cy="21" r="1" />
                                        <circle cx="19" cy="21" r="1" />
                                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                    </svg>
                                }
                                onClick={() => navigate("/wishlist")}
                            />
                            {isCartHovered && <CartDropdown type="cart" count="00" subtotal="0.00" />}
                        </div>
                    </div>
                </div>

                <div className="px-4 mt-3 lg:hidden">
                    <div className={`flex items-center rounded-md p-1 ${isHome ? "bg-white" : "bg-gray-100"}`}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="flex-1 px-4 py-2 outline-none bg-transparent text-sm"
                        />
                        <button className="bg-primary text-white p-2 rounded-md">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`w-full border-t py-3 transition-all duration-300 hidden lg:block ${isHome ? "bg-[#629D23] border-white/10" : "bg-white border-gray-100"} ${isSticky ? "fixed top-0 left-0 z-[100] shadow-lg animate-slideDown" : ""}`}>
                <div className="max-w-[1385px] mx-auto px-4 flex items-center justify-between">
                    <nav className={`flex items-center gap-8 ${isHome ? "text-white" : "text-[#1A1A1A]"} text-sm font-semibold relative`}>
                        {navItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative py-2 group cursor-pointer"
                                onMouseEnter={() => setActiveMenu(item.label)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <span onClick={() => navigate(item.navigateTo)} className={`flex items-center gap-1 transition-colors`}>
                                    {item.label}
                                    {item.label === "Dashboard" && (
                                        <span className="absolute -top-1 -right-4 text-[10px] text-primary font-bold">New</span>
                                    )}
                                </span>

                                {activeMenu === item.label && item.items && <NavDropdown items={item.items} />}
                                {activeMenu === item.label && item.type === "mega" && <ShopMegaMenu />}
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-10">
                        <div className={`flex items-center ${isHome ? "text-white" : "text-[#666666]"} text-sm font-medium gap-2`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>Delivery: <span className="font-normal opacity-90">258 FKD Street, Berlin</span></span>
                        </div>
                    </div>
                </div>
            </div>
            {isSticky && <div className="hidden lg:block h-[48px]"></div>}
        </header>
    );
}