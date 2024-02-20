import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;
export const ImgTop = styled.Image`
    width: 100%;
    height: 250px;
    border-radius: 0 0 50px 50px;
    object-fit: cover;
`;

export const Title = styled.Text`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin: 15px 0;
`;

export const Content = styled.ScrollView`
    padding: 15px 30px;
    flex-direction: column;
    gap: 20px;
`;