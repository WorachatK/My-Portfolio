import React from 'react'
import { 
  Container,
  Wrapper,
  ProfileContainer,
  MyPhoto,
  MyName,
  AboutContainer,
  JobContainer,
  AboutMeHead,
  AboutText,
  AboutTextUL,
  AboutTextLI,
  SetProfile
} from './SidebarElement'
import 'mac-scrollbar/dist/mac-scrollbar.css';
import Typewriter from 'typewriter-effect'
import myphoto from '../../images/13938219_1834355563461366_7360387684016000667_o.jpg'

const Sidebar = ({about,setAbouth}) => {
  return (
    <Container about={about}>
      <Wrapper>
        <ProfileContainer>
          <MyPhoto src={myphoto}/>
          <MyName>
            <Typewriter
              options={{
                autoStart:true,
                loop:true,
                delay:80,
                strings:[
                  'My name is...',
                  'Worachat Kengthanakun',
                ]
              }}
            />
          </MyName>
          <AboutContainer>
            <JobContainer fz='18'>
                Front End Develop
            </JobContainer>
          </AboutContainer>

          <AboutContainer>
            <AboutMeHead>
              ABOUTH ME
            </AboutMeHead>
            <AboutText>
              I am new graduated from the Department of
              Industrial Engineering but I am interested in
              program development and computer language.
              So I started to study computer languages After graduating from college.
              I have experience in React library
            </AboutText>
          </AboutContainer>

          <AboutContainer>
            <AboutMeHead>
              EDUCATION
            </AboutMeHead>
            <AboutTextUL>
              <AboutTextLI>
                King Mongkut’s University of TechnologyNorth Bangkok
              </AboutTextLI>
              <AboutTextLI>
                Bachelor of Industrial Engineering : August 2018 - 2022
              </AboutTextLI>
              <AboutTextLI>
                GPA: 3.40
              </AboutTextLI>
              <AboutTextLI>
                Graduation date: June 2022
              </AboutTextLI>
            </AboutTextUL>
          </AboutContainer>

          <AboutContainer>
            <AboutMeHead>
              SKILLS
            </AboutMeHead>
            <AboutTextUL>
              <AboutTextLI>
                REACT.JS
              </AboutTextLI>
              <AboutTextLI>
                JAVASCRIPT
              </AboutTextLI>
              <AboutTextLI>
                CSS
              </AboutTextLI>
              <AboutTextLI>
                HTML
              </AboutTextLI>
              <AboutTextLI>
                NodeJS
              </AboutTextLI>
              <AboutTextLI>
                MongoDB , Firebase
              </AboutTextLI>
            </AboutTextUL>
          </AboutContainer>

          <SetProfile onClick={()=>setAbouth(false)}>
              See My Mimi Project
          </SetProfile>

        </ProfileContainer>
      </Wrapper>
    </Container>
  )
}

export default Sidebar