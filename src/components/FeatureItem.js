export default function FeatureItem({ icon, title, subtitle }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-[56px] h-[56px] rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                <div className="text-primary">
                    {icon}
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="text-[#1A1A1A] font-bold text-base leading-tight">{title}</h3>
                <p className="text-[#808080] text-sm mt-1">{subtitle}</p>
            </div>
        </div>
    );
}
