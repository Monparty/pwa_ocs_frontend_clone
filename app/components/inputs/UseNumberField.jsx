import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import UseHelperText from "./UseHelperText";

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
            render={({ field, fieldState: { error } }) => (
                <div className="grid w-full relative">
                    <TextField
                        {...field}
                        label={label}
                        type="number"
                        size="small"
                        className="w-full"
                        minRows={10}
                        disabled={disabled}
                        required={required}
                        error={!!error}
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
                    {error && <UseHelperText errorMessage={error.message} />}
                </div>
            )}
        />
    );
}

export default UseNumberField;
