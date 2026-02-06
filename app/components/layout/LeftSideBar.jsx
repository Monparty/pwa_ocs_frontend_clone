"use client";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GridViewIcon from "@mui/icons-material/GridView";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useEffect, useState } from "react";
import { getMenus } from "../../services/menu.service";

function LeftSideBar() {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        const onGetmenu = async () => {
            const { data, error } = await getMenus();
            if (error) {
                alert(error.message);
                return;
            }
            setMenuList(data);
        };
        onGetmenu();
    }, []);

    console.log("menuList", menuList);

    const menus = [
        {
            title: "ข้อมูลพื้นฐาน",
            path: "/dashboard",
            icon: <GridViewIcon fontSize="small" />,
        },
        {
            title: "แผน",
            path: "/dashboard",
            icon: <ListAltIcon fontSize="small" />,
        },
        {
            title: "ข้อมูลพื้นฐานกระบวนการผลิต",
            path: "/dashboard",
            icon: <FolderOutlinedIcon fontSize="small" />,
        },
        {
            title: "จัดการเวลาปฏิบัติงาน",
            path: "/dashboard",
            icon: <CalendarMonthOutlinedIcon fontSize="small" />,
        },
        {
            title: "บันทึกผลปฏิบัติงาน(ประจำวัน) Website",
            path: "/dashboard",
            icon: <SaveOutlinedIcon fontSize="small" />,
        },
        {
            title: "Report",
            path: "/dashboard",
            icon: <InsertDriveFileOutlinedIcon fontSize="small" />,
        },
        {
            title: "Authentication",
            path: "/dashboard",
            icon: <SettingsOutlinedIcon fontSize="small" />,
        },
    ];

    return (
        <div className="hidden md:block w-15 bg-white h-[calc(100dvh-3rem)] hover:w-64 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-all">
            <div className="flex flex-col w-full p-3">
                {menus.map((item, index) => (
                    <div key={index} className="w-full overflow-hidden">
                        <div className="w-48">
                            <Accordion className="m-0! rounded-none! bg-white! shadow-none! w-full">
                                <AccordionSummary
                                    className="m-0! mb-2! p-2! min-h-10! hover:bg-gray-100! rounded-md!"
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <div className="text-sm whitespace-nowrap rounded-md gap-3 flex items-center">
                                        {item.icon}
                                        <div className="truncate w-26 overflow-hidden">{item.title}</div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails className="m-0! py-0! rounded-none!">
                                    <div className="flex flex-col gap-1 border-l ms-0.5 border-gray-300 pl-5">
                                        {[1, 2, 3, 4, 5].map((arr) => (
                                            <Link key={arr} href={item.path}>
                                                <div className="hover:bg-gray-100 text-sm rounded-sm px-2 py-1">
                                                    menu {arr}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeftSideBar;
