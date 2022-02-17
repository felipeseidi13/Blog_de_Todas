import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title} from './styles';

export default function Header() {
 return (
   <Container>
       <Title>
           <Text style={{ fontStyle: 'italic', color: '#f08080' }}>BLOG</Text>
           <Text style={{ fontStyle: 'italic', color: '#48d1cc' }}>DETODAS</Text>
       </Title>
   </Container>
  );
}