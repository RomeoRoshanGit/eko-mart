import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import FeaturedCategories from "../components/FeaturedCategories";
import PromoSection from "../components/PromoSection";
import PopularProducts from "../components/PopularProducts";
import WeeklySales from "../components/WeeklySales";
import BestSales from "../components/BestSales";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div>
            <Header />
            <FeatureSection />
            <HeroSection />
            <FeaturedCategories />
            <PromoSection />
            <PopularProducts />
            <WeeklySales />
            <BestSales />
            <BlogSection />
            <Footer />
        </div>
    );
}