import { Navigate, useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

export default function HeroSection() {
    const navigate = useNavigate();
    return (
        <section className="relative w-full h-[720px] bg-[#0A0A0A] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: "url('/assets/images/hero_bg.png')" }}
            ></div>

            {/* Content Overlay */}
            <div className="relative h-full max-w-[1385px] mx-auto px-4 flex items-center">
                <div className="max-w-[600px] text-left">
                    <p className="text-[#FFD700] font-semibold text-sm tracking-wider mb-4 uppercase">
                        Get up to 30% off on your first $150 purchase
                    </p>
                    <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Don't miss our amazing grocery deals
                    </h1>
                    <p className="text-gray-300 text-lg mb-8 max-w-[500px]">
                        We have prepared special discounts for you on grocery products. Don't miss these opportunities...
                    </p>
                    <PrimaryButton
                        className="h-12 px-8 rounded-full"
                        text="Shop Now"
                        icon={
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        }
                        onClick={() => navigate('/shop')}
                    />
                </div>
            </div>

            {/* Slider Arrows */}
            <div className="absolute inset-y-0 left-12 flex items-center">
                <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all shadow-xl">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
            </div>
            <div className="absolute inset-y-0 right-12 flex items-center">
                <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all shadow-xl">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
