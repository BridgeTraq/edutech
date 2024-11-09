import SideBar from "./side-nav";
import { Outlet, useLocation } from "react-router-dom";
import Head from "./head";
import { User } from "../components/users";
import Image from '../images/woman-dp.png'
import DisplayAreaGrey from "./display-area";
import { DisplayAreaWhite } from "./display-area";

export default function Layout() {
    const { pathname } = useLocation();
    let title = ""

    switch (pathname) {
        case '/':
            title = `Welcome back, ${User.firstName} 👋`;
            break;
        case '/bookmarks':
            title = "Bookmarks";
            break;
        case '/courses':
            title = "Courses";
            break;
        case '/tutorials':
            title = "Tutorials";
            break;
        case '/best-practices':
            title = "Best Practices";
            break;
        case '/certifications':
            title = "Certifications";
            break;
        case '/resources':
            title = "Resources";
            break;
        case '/events':
            title = "Events";
            break;
        case '/community':
            title = "Community";
            break;
        case '/settings':
            title = "Settings";
            break;
        case '/help-center':
            title = "Help Center";
            break;

        default:
            title = "Dashboard";
    }

    return (
        <body className="h-screen w-screen flex overflow-clip">
            <SideBar />
            <main className="grow">
                <Head title={title} user={User} image={Image} />

                {
                    pathname === '/courses'
                        ?
                        <DisplayAreaWhite>
                            <Outlet />
                        </DisplayAreaWhite>
                        :
                        <DisplayAreaGrey>
                            <Outlet />
                        </DisplayAreaGrey>
                }
            </main>
        </body>

    );
}