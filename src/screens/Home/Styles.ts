import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.View`
    width: 90%;
`;

export const TextPhoneNunber = styled.Text`
    font-size: ${RFValue(15)}px;
    margin-top: 40px;
`;

export const AreaPassword = styled.View`
    margin-top: 25px;
`; 

export const TextPassword = styled.Text`
    margin-top: 20px;
`;

export const TextGeneric = styled.Text`
    width: 90%;
    font-size: ${RFValue(14)}px;
    margin-top: 17px;
    text-align: center;
    color: #467CFF;
`;
