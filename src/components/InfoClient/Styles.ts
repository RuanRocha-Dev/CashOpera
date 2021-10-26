import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5px;
`;

export const ArrowModal = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #969CB2;
    width: 27%;
    border-radius: 5px;
`;

export const CountryInput = styled.TextInput`
    width: 70%;
`;

export const Icone = styled(Icon)`
    font-size: ${RFValue(20)}px;
    margin-top: 10px;
`;

export const PhoneNumberInput = styled.TextInput`
    border: 1px solid #969CB2;
    width: 67%;
    border-radius: 5px;
`;