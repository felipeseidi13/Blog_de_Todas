import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
background-color: #FFF;
`;


export const ButtonPost = styled.TouchableOpacity`
background-color: #00bfff;
width: 60px;
height: 60px;
border-radius: 30px;
justify-content: center;
align-items: center;
position: absolute;
bottom: 6%;
right: 6%;

`;

export const ListPosts = styled.FlatList`
flex:1;
background-color: #f1f1f1;
`;