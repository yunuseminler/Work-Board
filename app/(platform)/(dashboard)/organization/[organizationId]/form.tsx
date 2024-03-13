"use client";

import { Create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { FormInput } from "./settings/form-input";
import { FormButton } from "./form-button";

export const Form = () =>{
    const initialState = {message: null, errors:{} };
    const [state,dispatch] = useFormState(Create, initialState);

    return(
        <form action={dispatch}>
            <div className="flex flex-col space-y-2">
                <FormInput errors={state?.errors}/>
            </div>

        <FormButton/>

        </form>
    )
}