import Link from "next/link";
import React from "react";

function LeftSideBar() {
    const menus = [
        {
            title: "ข้อมูลพื้นฐาน",
            path: "/",
        },
        {
            title: "แผน",
            path: "/",
        },
        {
            title: "ข้อมูลพื้นฐานกระบวนการผลิต",
            path: "/",
        },
        {
            title: "จัดการเวลาปฏิบัติงาน",
            path: "/",
        },
        {
            title: "บันทึกผลปฏิบัติงาน(ประจำวัน) Website",
            path: "/",
        },
        {
            title: "Report",
            path: "/",
        },
        {
            title: "Authentication",
            path: "/",
        },
    ];

    return (
        <div className="w-14 bg-blue-300 h-[calc(100dvh-3rem)] block transition-all hover:w-50">
            <div className="flex flex-col w-full gap-3 p-2">
                {menus.map((item, index) => (
                    <div key={index} className="w-full overflow-hidden">
                        <Link href={item.path}>
                            <div className="bg-blue-100 text-sm w-full whitespace-nowrap p-3 rounded-md">
                                {item.title}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeftSideBar;
