import { LiaFirstOrderAlt, LiaToggleOnSolid } from "react-icons/lia";
import { LiaFileImportSolid } from "react-icons/lia";
import * as IconL from "react-icons/lia";
import * as IconI from "react-icons/io5";
import { Link } from "react-router-dom";

export function Head({ name }) {

    return (
        <div className="head flex gap-x-3 items-center mb-6">
            <LiaFirstOrderAlt style={{ fontSize: "1.5em" }} className="text-emerald-950" />
            <h1 className="me-auto text-2xl font-semibold">Academic</h1>
            <LiaFileImportSolid style={{ fontSize: "1.5em" }} className="text-gray-600" />
        </div>
    );
}


export function MenuItem({ iconName, title }) {
    const Icon = IconL[iconName] || IconI[iconName];
    return (
        <span className="flex gap-x-3 items-center">
            <Icon className="text-xl text-gray-600 menu-icon" />
            <span className="text-gray-600 menu-title">{title}</span>
        </span>
    );
}

export default function SideBar() {
    return (
        <nav className="py-4 px-5 flex flex-col border-e-[1px]" style={{ minWidth: "250px" }}>
            <Head />

            <ul className="menu mb-auto">
                <li className="menu-item my-3">
                    <Link to="/" className="flex menu-link">
                        <MenuItem iconName="LiaHomeSolid" title="Home" />
                    </Link>
                </li>
                <li className="menu-item my-3">
                    <Link to="/bookmark" className="flex menu-link">
                        <MenuItem iconName="LiaBookmarkSolid" title="Bookmarks" />
                    </Link>
                </li>

                <hr className="my-4" />

                <li className="menu-item my-3">
                    <Link to="/courses" className="flex menu-link">
                        <MenuItem iconName="LiaGraduationCapSolid" title="Courses" />
                    </Link>
                </li>
                <li className="menu-item my-3">
                    <Link to="/tutorials" className="flex menu-link">
                        <MenuItem iconName="LiaFolderOpen" title="Tutorials" />
                    </Link>
                </li>
                <li className="menu-item my-3">
                    <Link to="/best-practices" className="flex menu-link">
                        <MenuItem iconName="LiaLightbulb" title="Best Practices" />
                    </Link>
                </li>
                <li className="menu-item my-3">
                    <Link to="/certifications" className="flex menu-link">
                        <MenuItem iconName="LiaCertificateSolid" title="Certifications" />
                    </Link>
                </li>

                <hr className="my-4" />

                <li className="menu-item my-3">
                    <Link to="/resources" className="flex menu-link">
                        <MenuItem iconName="LiaFigma" title="Resources" />
                    </Link>
                </li>
                <li className="menu-item my-3">
                    <Link to="/events" className="flex menu-link">
                        <MenuItem iconName="LiaCalendar" title="Events" />
                    </Link>
                </li>
                <li className="menu-item my-3">
                    <Link to="/community" className="flex menu-link">
                        <MenuItem iconName="LiaGlobeSolid" title="Community" />
                    </Link>
                </li>
            </ul>

            <ul className="menu">
                <li className="menu-item my-3">
                    <Link to="/setting" className="flex menu-link">
                        <MenuItem iconName="IoSettingsOutline" title="Settings" />
                    </Link>
                </li>
                <li className="menu-item my-3">
                    <Link to="/help-center" className="flex menu-link">
                        <MenuItem iconName="LiaQuestionCircle" title="Help Center" />
                    </Link>
                </li>
                <li className="menu-item my-3">
                    <span className="flex menu-link">
                        <MenuItem iconName="LiaMoonSolid" title="Dark Mode" />
                        <LiaToggleOnSolid className="text-2xl ms-auto text-gray-400" />
                    </span>
                </li>
            </ul>

        </nav>
    );
}