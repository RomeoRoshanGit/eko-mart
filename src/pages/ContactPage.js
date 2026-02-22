import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OfficeCard from '../components/OfficeCard';

export default function ContactPage() {
    const offices = [
        {
            id: 1,
            title: "Berlin Germany Store",
            address: "259 Daniel Road, FKT 2589 Berlin, Germany."
        },
        {
            id: 2,
            title: "Berlin Germany Store",
            address: "259 Daniel Road, FKT 2589 Berlin, Germany."
        },
        {
            id: 3,
            title: "Berlin Germany Store",
            address: "259 Daniel Road, FKT 2589 Berlin, Germany."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 w-full pb-24">
                <section className="relative h-[480px] w-full flex items-center justify-center overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
                        alt="Contact Hero"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />

                    <div className="relative z-10 text-center text-white max-w-[800px] px-4">
                        <h1 className="text-[64px] font-bold mb-6">Ask Us Question</h1>
                        <p className="text-[18px] leading-relaxed text-white/90">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
                        </p>
                    </div>
                </section>

                <div className="max-w-[1385px] mx-auto px-4 mt-24">
                    <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
                        <div className="flex-1">
                            <h2 className="text-[40px] font-bold text-[#1A1A1A] mb-6">You can ask us questions !</h2>
                            <p className="text-[#666666] text-[18px] leading-relaxed mb-10 max-w-[500px]">
                                Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.
                            </p>

                            <div className="flex flex-col gap-6">
                                {offices.slice(0, 1).map(office => (
                                    <OfficeCard key={office.id} {...office} />
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 w-full h-[450px] rounded-[12px] overflow-hidden shadow-sm border border-gray-100">
                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.27291880564!2d90.4125181!3d23.7431252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b859345efbff%3A0x6e6e6e6e6e6e6e6e!2sBerlin!5e0!3m2!1sen!2sbd!4v1713500000000!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offices.map(office => (
                            <OfficeCard key={office.id} {...office} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
