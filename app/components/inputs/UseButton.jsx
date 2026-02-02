import { Button } from "@mui/material";
import React from "react";

function UseButton({
    onClick = () => {},
    icon: Icon,
    label,
    variant = "contained",
    loading = false,
    disabled = false,
    color,
    bg,
    type = "button",
    id,
}) {
    return (
        <Button
            className={`w-full max-w-25 h-fit normal-case! shadow-sm! transition-all! ${color ? color : ""} ${bg ? bg + " hover:opacity-80" : ""}`}
            variant={variant}
            startIcon={Icon ? <Icon /> : null}
            onClick={onClick}
            disabled={disabled}
            loading={loading}
            loadingPosition="start"
            type={type}
            id={id}
        >
            {label}
        </Button>
    );
}

export default UseButton;
