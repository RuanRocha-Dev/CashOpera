import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    width: 90%;
    margin-top: ${RFValue(150)}px;
`;

export const ButtonFooter = styled.TouchableOpacity`
    height: ${RFValue(40)}px;
    border: 0.8px solid #cccc;
    border-radius: 7px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
`;

export const TextGeneric = styled.Text`
    font-size: ${RFValue(14)}px;
    justify-content: center;
    text-align: center;
    color: #467CFF;
`;