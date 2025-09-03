import { redirect } from "next/navigation";

export default function AppRedirect() {
    const appBase = process.env.NEXT_PUBLIC_APP_URL || "/";
    redirect(appBase);
}
