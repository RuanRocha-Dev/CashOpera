import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ItensContainer = styled.View`
    width: 90%;
    justify-content: center;
    align-items: flex-start;
`;

export const Main = styled.View`
    width: 100%;
`; 

export const Instruction = styled.Text`
    margin-top: ${RFValue(20)}px;
`;

export const TextPhoneNunber = styled.Text`
    font-size: ${RFValue(15)}px;
    margin-top: 40px;
`;

export const Button = styled.View`
    margin-top: ${RFValue(25)}px;;
`;

export const PropsFooter = styled.View`
    width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: ${RFValue(45)}px;
`;