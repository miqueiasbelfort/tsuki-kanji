import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #2C2A4A;
    position: relative;
`;
export const BackgroundImage = styled.Image`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Content = styled.View`
    width: 100%;
    padding: 10px;
    position: absolute;
    bottom: 20px;
`;
export const Center = styled.View`
    width: 100% ;
    align-items: center;
`;
export const Texth1 = styled.Text`
    font-size: 50px;
    color: #fff;
    font-weight: bold;
`;
export const Textp = styled.Text`
    font-size: 20px;
    color: #fff;
    margin-bottom: 20px;
`;