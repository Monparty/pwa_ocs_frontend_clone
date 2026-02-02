import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import UseHelperText from "./UseHelperText";

function UseTextField({ control, label = "", name, disabled = false, required = false }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className="grid w-full relative">
                    <TextField
                        {...field}
                        label={label}
                        type="text"
                        size="small"
                        className="w-full"
                        disabled={disabled}
                        required={required}
                        error={!!error}
                        slotProps={{
                            htmlInput: {
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

export default UseTextField;
