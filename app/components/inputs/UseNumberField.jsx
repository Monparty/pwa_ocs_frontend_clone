import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function UseNumberField({
    control,
    label = "",
    name,
    min = undefined,
    max = undefined,
    disabled = false,
    required = false,
    step = false,
}) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    className="w-full"
                    type="number"
                    size="small"
                    minRows={10}
                    disabled={disabled}
                    required={required}
                    slotProps={{
                        htmlInput: {
                            min: min,
                            max: max,
                            step: step ? 0.01 : undefined,
                            inputMode: "numeric",
                            autoComplete: "off",
                        },
                    }}
                />
            )}
        />
    );
}

export default UseNumberField;
