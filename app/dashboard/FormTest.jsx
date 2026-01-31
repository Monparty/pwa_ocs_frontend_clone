"use client";
import { useForm } from "react-hook-form";
import UseTextField from "../components/inputs/UseTextField";
import UseNumberField from "../components/inputs/UseNumberField";
import UseSelect from "../components/inputs/UseSelect";
import UseButton from "../components/inputs/UseButton";

function FormTest() {
    const {
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    console.log(watch());

    const testBtn = () => {
        alert(123);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
                <UseTextField control={control} name="name" label="name" />
                <UseNumberField control={control} name="age" label="age" min={10} max={15} step />
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
                <UseButton onClick={testBtn} label={"monza"} />
            </form>
        </div>
    );
}

export default FormTest;
