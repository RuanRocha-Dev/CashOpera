import React from "react"
import { SignInButton, NameSigIn } from "./Styles"

interface Props {
    name: string
}

export function ButtonGeneric({name} : Props) {

    return(
        <SignInButton>
            <NameSigIn> {name} </NameSigIn>    
        </SignInButton>
    )
}