export default function DisplayAreaGrey({ children }) {

    return (
        <div className="display-area w-full h-full overflow-y-auto bg-[#F8F9FB] p-8 pb-32 flex flex-col gap-y-6">
            {children}
        </div>
    );
}

export function DisplayAreaWhite({ children }) {

    return (
        <div className="display-area w-full h-full overflow-y-auto bg-[#FFFFFF] p-8 pb-32 flex flex-col gap-y-6">
            {children}
        </div>
    );
}