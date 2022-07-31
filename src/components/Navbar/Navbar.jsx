import React from 'react'
import { 
  Container,
  Wrapper,
  ColorContainer,
  IconB,
  Text
} from './NavbarElement'

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <ColorContainer>
          <IconB bgcolor='#E74C3C'/>
          <IconB bgcolor='#F1C40F'/>
          <IconB bgcolor='#2ECC71'/>
        </ColorContainer>
        <Text>My Portfolio</Text>
      </Wrapper>
    </Container>
  )
}

export default Navbar