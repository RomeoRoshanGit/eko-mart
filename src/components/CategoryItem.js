export default function CategoryItem({ image, name }) {
    return (
        <div className="flex flex-col items-center justify-center bg-white border border-[#E6E6E6] rounded-[8px] w-[180px] aspect-square transition-all hover:border-primary cursor-pointer group shrink-0">
            <div className="w-[120px] h-[120px] flex items-center justify-center mb-4">
                <img src={image} alt={name} className="max-w-full max-h-full object-cover rounded-[8px]" />
            </div>
            <p className="text-[#1A1A1A] font-bold text-sm text-center mb-4">{name}</p>
        </div>
    );
}
