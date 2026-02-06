import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function proxy(request) {
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

    // ยังไม่ login → ไป login
    if (!user && (isRootRoute || isProtectedRoute)) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // login แล้ว → ไป dashboard
    if (user && (isRootRoute || isAuthRoute)) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return response;
}

export const config = {
    matcher: ["/((?!_next|favicon.ico|api).*)"],
};
