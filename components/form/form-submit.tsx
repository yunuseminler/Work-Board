"use client";

import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { FormSpinner } from "./form-spinner";

interface FormSubmitProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    variant?: "default" | "destructive" | "outline" |  "secondary" | "ghost" | "link" | "primary";
};

export const FormSubmit = ({
    children,
    disabled,
    className,
    variant = "primary"
}: FormSubmitProps) => {
    const {pending} = useFormStatus();
    return(
        <div className="flex gap-2">
            <Button disabled={pending || disabled} type="submit" variant={variant} size="sm" className={cn(className)}>
                {children}
            </Button>
            <FormSpinner/>

        </div>
        
    );
};