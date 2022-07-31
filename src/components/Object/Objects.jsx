import React, { useState } from 'react'
import { 
  Container,
  LinkBarContainer,
  Link,
  Wrapper,
  CardContainer,
  CardImage,
  Logo,
  CardLinks,
  CardLink,
  ColorBg,
  ContactWrapper,
  HeadContact,
  ContactContainer,
  Contact
} from './ObjectElement'
import logo from '../../images/github.png'
import {data} from '../data'

const Objects = ({setAbouth,about}) => {

  const [project,setProject] = useState(true)

  return (
    <Container about={about}>

      <LinkBarContainer>
        <Link onClick={()=>setAbouth(true)}>About ME</Link>
        <Link onClick={()=>setProject(true)} project={project}>My Mini Project</Link>
        <Link onClick={()=>setProject(false)} project={!project}>Contact Me</Link>
      </LinkBarContainer>

      {project ? (
        <Wrapper>
          {data.map(item=>(
            <CardContainer key={item.image}>
              <CardImage src={item.image}/>
              <ColorBg>
                <CardLinks>
                  <CardLink bgc='#F1F2F3' c='black' href={item.web} target="_blank">Go to Web Site</CardLink>
                  <CardLink bgc='black' c='white' href={item.github} target="_blank">
                    <Logo src={logo}/>
                    Git Hub Link
                  </CardLink>
                </CardLinks>
              </ColorBg>
            </CardContainer>
          ))}
        </Wrapper>
      ):(
        <ContactWrapper>
          <HeadContact>CONTACT INFO</HeadContact>
          <ContactContainer>
            <Contact>180/44 MOO.6 Nonthaburi 1 Road,
              Bangkasor Sub-district,
              Mueang District, Nonthaburi Province, 11000.
            </Contact>
            <Contact>Birth day : 01 August 1999</Contact>
            <Contact>Age: 23 years</Contact>
            <Contact>Gender: Male</Contact>
            <Contact>email : worachat.kengthanakun@gmail.com</Contact>
            <Contact>phone : (+66)619759598</Contact>
          </ContactContainer>
        </ContactWrapper>
      )}
      

    </Container>
  )
}

export default Objects