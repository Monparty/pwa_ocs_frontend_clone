"use client";
import { useForm } from "react-hook-form";
import UseTextField from "../components/input/UseTextField";
import UseNumberField from "../components/input/UseNumberField";

function FormTest() {
    const {
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    console.log(watch());
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <UseTextField control={control} name="name" label="name" />
                <UseNumberField control={control} name="age" label="age" min={10} max={15} step />
            </form>
        </div>
    );
}

export default FormTest;
