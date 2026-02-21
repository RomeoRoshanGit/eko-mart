import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

export default function BlogPage() {
    const blogs = [
        {
            id: 1,
            title: "Profitable business makes your profit Best Solution",
            date: "15 Sep, 2023",
            category: "Modern Fashion",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Details Profitable business makes your profit",
            date: "15 Sep, 2023",
            category: "Modern Fashion",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "One Profitable business makes your profit",
            date: "15 Sep, 2023",
            category: "Modern Fashion",
            image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Me Profitable business makes your profit",
            date: "15 Sep, 2023",
            category: "Modern Fashion",
            image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?q=80&w=600&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 w-full pb-24">
                <div className="max-w-[1385px] mx-auto px-4 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {blogs.concat(blogs).map((blog, idx) => (
                            <BlogCard key={idx} {...blog} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
