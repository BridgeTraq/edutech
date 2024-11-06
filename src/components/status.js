import { LiaHourglass } from "react-icons/lia";
import { LiaCheckSolid } from "react-icons/lia";

export function Shell({ children }) {
    return (
        <span className="border rounded-md p-1 flex items-center gap-x-2 w-[110px]">
            {children}
        </span>
    );
}

export default function Status({ status }) {
    if (status.toLowerCase() === "in progress") {
        return (
            <Shell>
                <LiaHourglass className="text-orange-600 text-sm" />
                <span className="text-sm font-semibold text-gray-500 mt-[-2px]">In progress</span>
            </Shell>
        );
    } else if (status.toLowerCase() === "completed") {
        return (
            <Shell>
                <LiaCheckSolid className="text-green-700 text-sm" />
                <span className="text-sm font-semibold text-gray-500 mt-[-2px]">Completed</span>
            </Shell>
        );

    } else {
        return "...";
    }
}