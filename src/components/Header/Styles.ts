import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 90%;
`;

export const Icone = styled(Icon)`
    font-size: ${RFValue(25)}px;
    margin-top: 10px;
`;

export const Text = styled.Text`
    font-size: ${RFValue(25)}px;
    margin-top: 10px;
    color: #000;
`;