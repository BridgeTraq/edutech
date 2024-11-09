import { LiaFirstOrderAlt, LiaToggleOnSolid } from "react-icons/lia";
import { LiaFileImportSolid } from "react-icons/lia";
import * as IconL from "react-icons/lia";
import * as IconI from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export function Head({ name }) {

    return (
        <div className="head flex gap-x-3 items-center mb-6">
            <LiaFirstOrderAlt style={{ fontSize: "1.5em" }} className="text-emerald-950" />
            <h1 className="me-auto text-2xl font-semibold">Academic</h1>
            <LiaFileImportSolid style={{ fontSize: "1.5em" }} className="text-gray-600" />
        </div>
    );
}


export function MenuItem({ iconName, title, path }) {
    const Icon = IconL[iconName] || IconI[iconName];
    const { pathname } = useLocation();
    return (

        path === pathname
            ?
            <span className="rounded-lg w-full px-1 py-2 flex gap-x-2 items-center bg-gray-100">
                <Icon className="text-xl text-[#208A7C]  menu-icon" />
                <span className="text-[#208A7C] menu-title">{title}</span>
            </span>
            :
            <span className="rounded-lg w-full px-1 py-2 flex gap-x-2 items-center">
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
                <li className="menu-item my-1">
                    <Link to="/" className="flex menu-link">
                        <MenuItem iconName="LiaHomeSolid" title="Home" path="/" />
                    </Link>
                </li>
                <li className="menu-item my-1">
                    <Link to="/bookmarks" className="flex menu-link">
                        <MenuItem iconName="LiaBookmarkSolid" title="Bookmarks" path="/bookmarks" />
                    </Link>
                </li>

                <hr className="my-4" />

                <li className="menu-item my-1">
                    <Link to="/courses" className="flex menu-link">
                        <MenuItem iconName="LiaGraduationCapSolid" title="Courses" path="/courses" />
                    </Link>
                </li>
                <li className="menu-item my-1">
                    <Link to="/tutorials" className="flex menu-link">
                        <MenuItem iconName="LiaFolderOpen" title="Tutorials" path="/tutorials" />
                    </Link>
                </li>
                <li className="menu-item my-1">
                    <Link to="/best-practices" className="flex menu-link">
                        <MenuItem iconName="LiaLightbulb" title="Best Practices" path="/best-practices" />
                    </Link>
                </li>
                <li className="menu-item my-1">
                    <Link to="/certifications" className="flex menu-link">
                        <MenuItem iconName="LiaCertificateSolid" title="Certifications" path="/certifications" />
                    </Link>
                </li>

                <hr className="my-4" />

                <li className="menu-item my-1">
                    <Link to="/resources" className="flex menu-link">
                        <MenuItem iconName="LiaFigma" title="Resources" path="/resources" />
                    </Link>
                </li>
                <li className="menu-item my-1">
                    <Link to="/events" className="flex menu-link">
                        <MenuItem iconName="LiaCalendar" title="Events" path="/events" />
                    </Link>
                </li>
                <li className="menu-item my-1">
                    <Link to="/community" className="flex menu-link">
                        <MenuItem iconName="LiaGlobeSolid" title="Community" path="/community" />
                    </Link>
                </li>
            </ul>

            <ul className="menu">
                <li className="menu-item my-1">
                    <Link to="/settings" className="flex menu-link">
                        <MenuItem iconName="IoSettingsOutline" title="Settings" path="/settings" />
                    </Link>
                </li>
                <li className="menu-item my-1">
                    <Link to="/help-center" className="flex menu-link">
                        <MenuItem iconName="LiaQuestionCircle" title="Help Center" path="/help-center" />
                    </Link>
                </li>
                <li className="menu-item my-1">
                    <span className="flex items-center menu-link">
                        <MenuItem iconName="LiaMoonSolid" title="Dark Mode" />
                        <LiaToggleOnSolid className="text-2xl ms-auto mt-1 text-gray-400" />
                    </span>
                </li>
            </ul>

        </nav>
    );
}