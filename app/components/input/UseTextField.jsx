import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function UseTextField({ control, label = "", name, disabled = false, required = false }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    type="text"
                    size="small"
                    disabled={disabled}
                    required={required}
                    slotProps={{
                        htmlInput: {
                            autoComplete: "off",
                        },
                    }}
                    className="w-full"
                />
            )}
        />
    );
}

export default UseTextField;
