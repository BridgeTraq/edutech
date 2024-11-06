import { LiaArrowRightSolid } from "react-icons/lia";
import Theme from "./theme";


export default function Stats({ theme, iconName, amount, title }) {
    return (
        <div className="stats p-4 rounded-lg bg-white">
            <div className="flex items-start gap-x-3 pb-4">
                <Theme bgColor={theme} iconName={iconName} bgSize="40px" />
                <span className="block">
                    <span className="block font-bold text-xl mb-[2px] mt-[-5px]">{amount}</span>
                    <span className="block text-gray-600 text-sm " >{title}</span>
                </span>
            </div>
            <hr className="border-dashed border-[1px]" />

            <div className="flex items-center justify-between mt-1 pt-1">
                <span className="text-gray-600">View details</span>
                <LiaArrowRightSolid />
            </div>
        </div>
    );
}