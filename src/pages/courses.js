import Recommendation from "../components/recommendation";
import { Recommendations } from "../components/recommendations";
import Theme from "../components/theme";
import ProgressBar from "../components/progress-bar";
import { BsDot } from "react-icons/bs";
import { LiaClock, LiaSlidersHSolid } from "react-icons/lia";


export function Course({ iconName, iconTheme, title, progress, duration }) {
    return (
        <div className="border border-1 flex flex-col rounded-lg p-4 bg-white">
            <Theme iconName={iconName} bgColor={iconTheme} iconSize={"text-2xl"} bgSize={"40px"} gradient={""} />
            <h3 className="font-bold mt-5 mb-1">{title}</h3>
            <span className="flex items-center mb-1">
                <span className="text-gray-500">{progress + "% complete"}</span>
                <BsDot className="text-gray-500" />
                <LiaClock className="text-gray-500" />
                <span className="text-gray-500">{duration}{duration > 1 ? " Hours" : " Hour"} {"left"}</span>
            </span>
            <ProgressBar percentage={progress} height={"9px"} />

        </div>
    )
};

export default function Courses() {
    return (
        <>
            <section className="courses grid grid-cols-3 gap-x-6">
                <h3 className="text-xl font-semibold col-start-1 col-end-4 mb-4">Your Courses</h3>
                <Course iconName={"LiaHornbill"} iconTheme={"#39D0FB"} title={"Design Accessibility"} progress={25} duration={3} />
                <Course iconName={"LiaCubesSolid"} iconTheme={"#A27CFF"} title={"UX Research"} progress={70} duration={15} />
                <Course iconName={"LiaFigma"} iconTheme={"#FFBD4C"} title={"Design Terminology"} progress={100} duration={0} />
            </section>

            <section className="recommendations rounded-lg mt-3 mb-1">
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-x-5">

                        <span className="border flex gap-x-3 items-center rounded-lg text-gray-600 px-3 py-1">
                            <LiaSlidersHSolid className="text-2xl" />
                            Filters
                        </span>
                        <span className="text-lg font-bold">All Courses</span>
                    </span>
                    <span className="border rounded-lg text-gray-600 px-3 py-1">Recommendation</span>
                </div>

                <div className="grid grid-cols-3 gap-6  mb-4 mt-7">
                    {Recommendations.map(recommendation => <>
                        <Recommendation {...recommendation} />
                    </>)}
                </div>
            </section>
        </>
    );
}