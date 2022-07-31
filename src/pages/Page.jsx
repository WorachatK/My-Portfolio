import React, { useState } from 'react'
import { 
    VideoBG,
    Container,
    WrapperContainer,
    Wrapper,
    ContainerBar,
    Bar
} from "./AppElement";
import VideoB from '../videos/Pexels Videos 2297636.mp4'
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Objects from '../components/Object/Objects';

const Page = () => {

    const [about,setAbouth] = useState(true)


  return (
    <Container>
        <VideoBG src={VideoB} autoPlay loop muted type='video/mp4'/>
        <WrapperContainer >
            <Wrapper/>
            <ContainerBar>
                <Navbar/>
                <Bar>
                    <Sidebar about={about} setAbouth={setAbouth}/>
                    <Objects setAbouth={setAbouth} about={about}/>
                </Bar>
            </ContainerBar>
        </WrapperContainer>
    </Container>
  )
}

export default Page