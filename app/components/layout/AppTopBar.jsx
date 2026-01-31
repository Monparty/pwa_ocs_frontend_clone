"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/pwa_logo_circle.png";
import IconButton from "@mui/material/IconButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import UseModal from "../utils/UseModal";

function AppTopBar() {
    const [userMenu, setUserMenu] = useState(null);
    const openUserMenu = Boolean(userMenu);
    const handleClickOpenUserMenu = (event) => {
        setUserMenu(event.currentTarget);
    };
    const handleCloseOpenUserMenu = () => {
        setUserMenu(null);
    };

    // Modal
    const [manualModal, setManualModal] = useState({
        isOpen: false,
        data: null,
    });

    const handleOpenManualModal = () => {
        setManualModal((prev) => ({ ...prev, isOpen: true }));
    };
    const handleCloseManualModal = () => {
        setManualModal((prev) => ({ ...prev, isOpen: false }));
    };

    return (
        <div className="h-12 bg-blue-400 border-b border-gray-300 flex items-center justify-between px-3">
            <div className="flex gap-2 items-center">
                <div className="relative w-9 h-9">
                    <Image src={logo} unoptimized alt="banner" fill className="object-cover" />
                </div>
                <h1 className="text-white font-medium text-lg">PWA</h1>
                <h2 className="text-white font-medium text-md">ระบบควบคุมกระบวนการผลิตน้ําประปา (OCS)</h2>
            </div>
            <div className="flex items-center gap-2">
                <Tooltip title="คู่มือการใช้งาน" enterDelay={500} onClick={handleOpenManualModal}>
                    <IconButton>
                        <MenuBookIcon sx={{ color: "#ffffff" }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="การแจ้งเตือน" enterDelay={500}>
                    <IconButton>
                        <NotificationsIcon sx={{ color: "#ffffff" }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="ระบบ" enterDelay={500}>
                    <IconButton>
                        <WindowOutlinedIcon sx={{ color: "#ffffff" }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="ข้อมูล" enterDelay={500}>
                    <IconButton
                        onClick={handleClickOpenUserMenu}
                        aria-controls={openUserMenu ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUserMenu ? "true" : undefined}
                    >
                        <AccountCircleIcon sx={{ color: "#ffffff" }} />
                    </IconButton>
                </Tooltip>

                <Menu anchorEl={userMenu} open={openUserMenu} onClose={handleCloseOpenUserMenu}>
                    <MenuItem onClick={handleCloseOpenUserMenu}>
                        <div className="flex items-center gap-2 text-sm w-40 py-1">
                            <PersonOutlineOutlinedIcon fontSize="small" /> ข้อมูลส่วนตัว
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseOpenUserMenu}>
                        <div className="flex items-center gap-2 text-sm w-40 py-1">
                            <LogoutOutlinedIcon fontSize="small" /> ออกจากระบบ
                        </div>
                    </MenuItem>
                </Menu>
            </div>

            <UseModal open={manualModal} onClose={handleCloseManualModal} header={"modal จ้า"}>
                <p id="parent-modal-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <p id="parent-modal-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <p id="parent-modal-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            </UseModal>
        </div>
    );
}

export default AppTopBar;
