import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";


export default function Head({ title, user, image }) {

    return (
        <header className="head flex items-center justify-between border-b-[1px] sticky top-0 px-8 py-5">
            <h2 className="text-2xl font-semibold">{title || "Dashboard"}</h2>

            <ul className="flex items-center gap-x-4">
                <li><CiSearch className="text-xl text-gray-900" /></li>
                <li><IoNotificationsOutline className="text-xl text-gray-600" /></li>
                <li><span className="w-0.5 bg-gray-200 block" style={{ height: ".85rem" }}>&nbsp;</span></li>
                <li className="flex gap-x-3 items-center">
                    <img src={image} alt={user.firstName + " " + user.lastName} className="rounded-full object-cover" style={{ width: "32px", height: "32px" }} />
                    <span className="inline-flex flex-col gap-y-0.5 ">
                        <span className="font-bold text-sm mb-[-5px]" >{user.firstName + " " + user.lastName[0] + "."}</span>
                        <span className="text-gray-600 text-sm">{user.membership}</span>
                    </span>
                </li>

            </ul>
        </header>
    );
}