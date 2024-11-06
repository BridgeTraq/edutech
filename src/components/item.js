import { LiaAngleRightSolid } from "react-icons/lia";
import { BsDot } from "react-icons/bs";
import ProgressBar from "./progress-bar";
import Status from "./status";
import Theme from "./theme";

export default function Item({ theme, iconName, iconSize, title, bgSize, category, duration, progress, status }) {

    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-start gap-x-3 basis-[36%]">
                <Theme bgColor={theme} iconName={iconName} iconSize={iconSize} bgSize={bgSize} gradient={"linear-gradient(to top, rgba(0,0,0,.08) 40%, rgba(255,255,255,.001))"} />
                <span className="block">
                    <span className="block font-bold text-[.95rem] mb-[2px] mt-[-5px]">{title}</span>
                    <span className="block text-gray-600 text-sm flex items-center" >{category} <BsDot className="mt-1" /> {duration + `${duration > 1 ? " Hours" : " Hour"}`}</span>
                </span>
            </div>

            <div className="flex gap-x-3 items-center basis-[30%] pe-3" style={{ width: "200px" }}>
                <ProgressBar percentage={progress} height={"5px"} className="basis-[90%]" />
                <span className="text-gray-500 text-sm">{progress + '%'}</span>
            </div>

            <div className="flex justify-between items-center basis-[28%] pe-4">
                <Status status={status} />
                <LiaAngleRightSolid className="text-xl text-gray-600" />
            </div>
        </div>
    )
}