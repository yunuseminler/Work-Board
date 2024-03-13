"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
    errors?:{
        title?: string[];
    },
    message?: string | null;
};

const CreateBoard = z.object({
    title: z.string().min(3,{
        message: "Minimum lenght of 3 letters is required"
    })
});

export async function Create(prevState: State, formdata:FormData) {
const validatedFields = CreateBoard.safeParse({
    title: formdata.get("title"),
})    
if(!validatedFields.success){
    return{
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Missing fields."
    }
}

const {title} = validatedFields.data;

try{
    await db.board.create({
        data:{
            title,
        }
    });
} catch(error){
    return{
        message: "Database error",
    }
}

    revalidatePath("/organization/org_2dVpqaAT7JkyCpkyd08niretxLP");
    redirect("/organization/org_2dVpqaAT7JkyCpkyd08niretxLP");
}