import { BsDot } from "react-icons/bs";
import { LiaSignalSolid, LiaStarSolid, LiaClock } from "react-icons/lia";
import Theme from "../components/theme";


export default function Recommendation({ theme, iconTheme, iconName, iconSize, bgSize, gradient, title, summary, category, duration, rating, ratingAmmount }) {
    return (
        <div className="recommendation flex flex-col gap-y-2 rounded-lg border border-1 p-3">
            <div style={{ backgroundColor: theme, height: "170px" }} className="rounded-lg flex items-center justify-center">
                <Theme iconName={iconName} bgColor={iconTheme} iconSize={iconSize} bgSize={bgSize} gradient={gradient} />
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-600">{summary}</p>

            <hr className="border-dashed border-[1px] my-2" />

            <footer className="flex items-center justify-between">
                <div className="flex items-center gap-x-[3px]">
                    <LiaSignalSolid className="text-gray-600" />
                    <span className="text-sm text-gray-600">{category}</span>
                    <BsDot className="text-gray-600" />
                    <LiaClock />
                    <span className="text-sm text-gray-600">{duration}{duration > 1 ? " Hours" : " Hour"}</span>
                </div>

                <div className="flex items-center gap-x-[3px] mb-2">
                    <LiaStarSolid className="text-[#FFBB4E]" />
                    <span className="text-sm font-bold">{rating}</span>
                    <span className="text-sm text-gray-600">({ratingAmmount})</span>

                </div>
            </footer>
        </div>
    );
}
