import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';
import Projt from "D:/Breno/Portifolio-Web-main/src/img/projeto.png"
import Projte from "D:/Breno/Portifolio-Web-main/src/img/test.png"

const Projects = () => {
  return (
    <Container id='project'>
       <img src={Projt}/>
       <img src={Projte}/>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    
    }
    
`

