import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function middleware(request) {
    let response = NextResponse.next();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        response.cookies.set(name, value, options);
                    });
                },
            },
        },
    );

    const { data } = await supabase.auth.getUser();
    const user = data.user;
    const pathname = request.nextUrl.pathname;
    const isAuthRoute = pathname.startsWith("/login");
    const isProtectedRoute = pathname.startsWith("/dashboard");
    const isRootRoute = pathname === "/";

    // เข้าเว็บครั้งแรก (/) แล้วยังไม่ login → ไป login
    if (!user && isRootRoute) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // ยังไม่ login จะเข้า dashboard ไม่ได้
    if (!user && isProtectedRoute) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // login แล้วจะเข้า login ไม่ได้
    if (user && isAuthRoute) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return response;
}

export const config = {
    matcher: ["/((?!_next|favicon.ico|api).*)"],
};
