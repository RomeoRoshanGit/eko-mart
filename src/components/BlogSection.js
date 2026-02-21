import BlogCard from "./BlogCard";

export default function BlogSection() {
    const posts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
            date: "15 Sep, 2023",
            category: "Modern Fashion",
            title: "Shion Fixation: Fueling Your Passion for All Things Stylish",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1547517023-7ca0c162f816?q=80&w=800&auto=format&fit=crop",
            date: "15 Sep, 2023",
            category: "Modern Fashion",
            title: "Ashion Fixation: Fueling Your Passion for All Things Stylish",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
            date: "15 Sep, 2023",
            category: "Modern Fashion",
            title: "Fixation: Fueling Your Passion for All Things Stylish",
        },
    ];

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1385px] mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-10">Latest Blog Post Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
