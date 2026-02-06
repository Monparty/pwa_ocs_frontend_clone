"use client";
import { supabase } from "../../lib/supabase/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import UseTextField from "@/app/components/inputs/UseTextField";
import UseButton from "@/app/components/inputs/UseButton";
import { login } from "@/app/lib/auth";

export default function Page() {
    const router = useRouter();

    const { handleSubmit, control } = useForm({
        // resolver: yupResolver(schema),
        // mode: "onBlur",
    });

    const handleLogin = async (values) => {
        const { error } = await login("test@test.com", "123456"); // ม่ายต้องพิมพ์
        // const { error } = await login(values.email, values.password);

        if (!error) {
            router.refresh();
        } else {
            alert(error.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleLogin)}
            className="h-screen w-full flex items-center justify-center bg-linear-to-r from-cyan-500 to-blue-500"
        >
            <div className="gap-4 flex flex-col items-center justify-center w-1/4 p-4 rounded-lg bg-white">
                <UseTextField control={control} name="email" label="ชื่อผู้ใช้งาน" />
                <UseTextField control={control} name="password" label="รหัสผ่าน" type="password" />
                <div className="w-full flex items-center justify-center ">
                    <UseButton label="เข้าสู่ระบบ" type="submit" />
                </div>
            </div>
        </form>
    );
}
