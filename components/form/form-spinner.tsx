"use client";

import { useFormStatus } from "react-dom";
import React from "react";
import BeatLoader from "react-spinners/ClipLoader";



export const FormSpinner = () => {
    const {pending} = useFormStatus();
    if(pending){
        return(
            <div className="ml-1">
                <BeatLoader  color="#36d7b7" />
            </div>
        )
    }
};