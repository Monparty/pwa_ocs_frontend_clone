import "../globals.css";
import AppTopBar from "../components/layout/AppTopBar";
import LeftSideBar from "../components/layout/LeftSideBar";
import AppHeader from "../components/layout/AppHeader";
import AppFooter from "../components/layout/AppFooter";

export default function RootLayout({ children }) {
    return (
        <>
            <AppTopBar />
            <div className="flex">
                <LeftSideBar />
                <div className="w-full h-[calc(100dvh-3rem)] overflow-y-auto">
                    <AppHeader />
                    <main className="w-full bg-gray-100 p-4 min-h-[calc(100dvh-9rem)]">
                        <div className="border h-full w-full rounded-md p-3 border-gray-300">{children}</div>
                    </main>
                    <AppFooter />
                </div>
            </div>
        </>
    );
}
