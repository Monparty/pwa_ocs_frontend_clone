import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import UseHelperText from "./UseHelperText";

function UseSelect({ control, label = "", name, options = [], multiple = false, disabled = false, required = false }) {
    const formatOptions = [{ label: "-", value: "" }, ...options];

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className="grid w-full relative">
                    <FormControl className="w-full">
                        <InputLabel id={label} size="small" error={!!error} required={required}>
                            {label}
                        </InputLabel>
                        <Select
                            {...field}
                            labelId={label}
                            id="demo-simple-select"
                            value={field.value ?? []}
                            label={label}
                            onChange={field.onChange}
                            size="small"
                            error={!!error}
                            disabled={disabled}
                            multiple={multiple}
                        >
                            {formatOptions.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {error && <UseHelperText errorMessage={error.message} />}
                </div>
            )}
        />
    );
}

export default UseSelect;
