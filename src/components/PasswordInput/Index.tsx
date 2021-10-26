import React from "react"
import { 
    PasswordInput,
    Text,
    InputArea,
    InputPassword,
    Icone,
} from "./Styles"


export function PassworInput() {

    return(
        <PasswordInput>
            <Text> Password </Text>
            <InputArea>
                <InputPassword/>
                <Icone name="eye-outline"/>
            </InputArea>
        </PasswordInput>
    )
}