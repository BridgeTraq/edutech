import * as IconL from "react-icons/lia";
import * as IconI from "react-icons/lia";

export default function Theme({ iconName = "LiaThumbtackSolid", iconSize = "text-xl", iconColor = "text-white", bgColor = "rgb(219 39 119)", bgSize = "35px", gradient = "linear-gradient(to top,  rgba(255,255,255,.5) 1% 5%, rgba(255,255,255,.05) 15%)" }) {
    const Icon = IconL[iconName] || IconI[iconName];

    return (
        <span className="rounded-lg flex items-center justify-center" style={{ backgroundColor: bgColor, width: bgSize, height: bgSize, backgroundImage: gradient }}>
            <Icon className={`${iconSize} ${iconColor}`} />
        </span>
    );
}