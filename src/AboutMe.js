import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'

const AboutMe = () => {

    return (
        <>
        <Container>
            <div className="title">My name is Lea and I love Web Development!</div>
            <div className="bullet">I'm passionate about creating visually pleasing, screen-responsive, full-stack web applications.</div>
            <div className="bullet">Connect with me!</div>
            <div className="links">
                <span><a href="linkedin.com/in/lea-overend" target="_blank">LinkedIn</a></span><span> | </span>
                <span><a href="github.com/leaov4" target="_blank">github</a></span><span> | </span>
                <span>loverend@fordham.edu</span>
            </div>
            <div className="bullet"><span>Read about web scraping on my medium article: </span><a href="https://lea-ov.medium.com/" target="_blank">https://lea-ov.medium.com/</a></div>
            <Link to="projects" smooth={true}><img src="arrow-down.svg" alt="arrow"></img></Link>
        </Container>
        </>
    )
}

export default AboutMe

const Container = styled.div`

    text-align: center;
   
    color: white;
    font-family: 'Source Code Pro', monospace;
    margin: 0 30px;
    a {
        color: white;
        
    }

    .bullet {
        margin-top: 10px;
    }

    .title {
        font-size: 20px;
        margin-top: 200px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    img {
        cursor: pointer;
        margin-top: 200px;
        transform: rotate(180deg);
        width: 60px;
        opacity: 0.7;
        @media (max-width: 679px) { 
            width: 40px;
        }
    }

    &:hover img {
       opacity: .5;
       &:hover {
        color: 	#A8A8A8;
     }
    }

    .links {
        font-weight: bold;
        font-size: 18px;
    }
`
