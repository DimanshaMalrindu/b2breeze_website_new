"use client";

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button"> & {
    asChild?: boolean;
    variant?: "primary" | "ghost" | "outline";
};

function cn(...inputs: (string | false | null | undefined)[]) {
    return twMerge(clsx(inputs));
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ asChild, className, variant = "ghost", ...props }, ref) => {
        const Comp: ElementType = asChild ? Slot : "button";
        const base =
            "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 active:scale-[.98]";
        const styles = {
            primary:
                "bg-gradient-to-b from-indigo-500 to-indigo-600 text-white shadow-[0_6px_30px_-10px_rgba(79,70,229,.7)] hover:brightness-110",
            ghost: "bg-white/0 text-foreground hover:bg-white/5",
            outline: "border border-white/10 text-foreground hover:bg-white/5",
        } as const;
        return (
            <Comp ref={ref} className={cn(base, styles[variant], className)} {...props} />
        );
    }
);
Button.displayName = "Button";
