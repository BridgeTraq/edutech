import SideBar from "./side-nav";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <body className="h-screen w-screen flex overflow-clip">
            <SideBar />
            <main className="grow">
                <Outlet />
            </main>
        </body>

    );
}