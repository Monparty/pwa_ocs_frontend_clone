"use client";
import { useForm } from "react-hook-form";
import UseTextField from "../components/inputs/UseTextField";
import UseNumberField from "../components/inputs/UseNumberField";
import UseSelect from "../components/inputs/UseSelect";
import UseButton from "../components/inputs/UseButton";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import SaveIcon from '@mui/icons-material/Save';

function FormTest() {
    const {
        handleSubmit,
        watch,
        control,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log("data submit",data);
    }

    console.log(watch());

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
                <UseTextField control={control} name="name" label="name" />
                <UseNumberField control={control} name="age" label="age" min={0} max={15} step />
                <UseSelect
                    control={control}
                    name="gender"
                    label="gender"
                    options={[
                        {
                            label: "mon 11111",
                            value: "1",
                        },
                        {
                            label: "maii 22222",
                            value: "2",
                        },
                        {
                            label: "kwan 333333",
                            value: "3",
                        },
                    ]}
                />
                <UseButton type="submit" icon={SaveIcon} label="save" />
            </form>
        </div>
    );
}

export default FormTest;
