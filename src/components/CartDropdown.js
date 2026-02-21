export default function CartDropdown({ type = "cart", count = "00", subtotal = "0.00", shippingLimit = 125 }) {
    const isWishlist = type === "wishlist";
    const title = isWishlist ? `Wishlist (${count})` : `Shopping Cart (${count})`;
    const remaining = shippingLimit - parseFloat(subtotal);
    const progress = Math.min((parseFloat(subtotal) / shippingLimit) * 100, 100);

    return (
        <div className="absolute top-[100%] right-0 z-[110] w-[350px] animate-fadeIn">
            <div className="bg-white rounded-[4px] shadow-2xl border border-[#E6E6E6] p-6 flex flex-col">
                <h4 className="text-[#1A1A1A] font-bold text-[16px] mb-6">{title}</h4>

                <div className="flex items-center justify-between mb-2">
                    <span className="text-[#1A1A1A] font-semibold text-sm">Sub Total:</span>
                    <span className="text-[#1A1A1A] font-bold text-sm">${subtotal}</span>
                </div>

                <div className="w-full h-1.5 bg-[#F0F0F0] rounded-full mb-4 overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <p className="text-[#808080] text-[13px] mb-8">
                    Spend More <span className="text-[#1A1A1A] font-bold">${remaining.toFixed(2)}</span> to reach <span className="text-[#1A1A1A] font-bold">Free Shipping</span>
                </p>

                <div className="flex gap-3">
                    {isWishlist ? (
                        <button className="w-full bg-primary text-white font-bold h-[44px] rounded-[4px] hover:bg-[#4d7a1b] transition-colors text-sm">
                            View Wishlist
                        </button>
                    ) : (
                        <>
                            <button className="flex-1 bg-primary text-white font-bold h-[44px] rounded-[4px] hover:bg-[#4d7a1b] transition-colors text-sm">
                                View Cart
                            </button>
                            <button className="flex-1 bg-white text-[#1A1A1A] border border-[#E6E6E6] font-bold h-[44px] rounded-[4px] hover:bg-gray-50 transition-colors text-sm">
                                CheckOut
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
