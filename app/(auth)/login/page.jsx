"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import UseTextField from "@/app/components/inputs/UseTextField";
import UseButton from "@/app/components/inputs/UseButton";
import { login } from "@/app/lib/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { handleSubmit, control } = useForm({
        // resolver: yupResolver(schema),
        // mode: "onBlur",
    });

    const handleLogin = async (values) => {
        setLoading(true);
        // const { error } = await login("test@test.com", "123456"); // ม่ายต้องพิมพ์
        // const { error } = await login(values.email, values.password);

        router.push("/dashboard");
        // if (!error) {
        //     router.push("/dashboard");
        // } else {
        //     alert(error.message);
        // }
        setLoading(false);
    };

    return (
        <div
            // onSubmit={handleSubmit(handleLogin)}
            className="h-screen w-full flex items-center justify-center bg-linear-to-r from-cyan-500 to-blue-500"
        >
            <div className="gap-6 flex flex-col items-center justify-center w-1/4 p-4 rounded-lg bg-white">
                <UseTextField control={control} name="email" label="ชื่อผู้ใช้งาน" />
                <UseTextField control={control} name="password" label="รหัสผ่าน" type="password" />
                <div className="w-full flex items-center justify-center ">
                    <UseButton label="เข้าสู่ระบบ" loading={loading} type="button" onClick={handleLogin} />
                    <Link href={"/dashboard"} >xxx</Link>
                </div>
            </div>
        </div>
    );
}
