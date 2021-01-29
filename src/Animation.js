import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import {Link} from 'react-scroll'

const Animation = () => {

  const [showArrow, setShowArrow] = useState("hidden")

  useEffect(()=>{
    setTimeout(()=> {
        setShowArrow("show")
    }, 3400)
   });

    return (
        <>
            <SlideIn>
                <Word>
                    <Letter delay={0}>l</Letter>
                    <Letter delay={300}>e</Letter>
                    <Letter delay={400}>a</Letter>
                    <Spacer/>
                    <Letter delay={500}>o</Letter>
                    <Letter delay={600}>v</Letter>
                    <Letter delay={700}>e</Letter>
                    <Letter delay={800}>r</Letter>
                    <Letter delay={900}>e</Letter>
                    <Letter delay={1000}>n</Letter>
                    <Letter delay={1000}>d</Letter>
                </Word>
                <Img><div className={"img " + showArrow}><Link to="projects" smooth={true}><img src="arrow-down.svg"></img></Link></div></Img>
            </SlideIn>
        </>
    )
}

export default Animation;

const slideIn = keyframes`
    0% {
        transform: translateY(-70%);
        opacity: 0;
    }
    80% {
        transform: translateY(10%);
        opacity: 1;
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
    }
`

const slideInArrow = keyframes`
    0% {
        opacity: 0;
        margin-top: 0px;
        
    100% {
        opacity: 1;
        margin-top: -20px;
    }

`

const SlideIn = styled.div`
    background-color: black;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Word = styled.div`
    margin-top: auto;
    color: white;
    @media (max-width: 679px) { 
       margin-bottom: 20px;
    }
`;

const Letter = styled.div`
    animation-name: ${slideIn};
    animation-delay: ${props => props.delay}ms;
    animation-duration: 3s;
    font-size: 170px;
    display: inline-block;
    
    font-family: 'Source Code Pro', monospace;
    text-shadow: 0px 0px 6px rgba(255,255,255,0.7);
    line-height: 1;
    margin: -3px;
    @media (max-width: 1000px) { 
        font-size: 120px;
    }
    @media (max-width: 679px) { 
        font-size: 80px;
        margin: 0;
    }
    @media (max-width: 568px) { 
        font-size: 50px;
        margin: 0;
    }
`;

const Spacer = styled.div`
    animation-name: ${slideIn};
    animation-duration: 3s;
    font-size: 70px;
    display: inline-block;
    width: 30px;
`;

const Img = styled.div`
    margin-bottom: 10px;
    height: 50px;


    img {
        width: 60px;
        opacity: 0.7;
        @media (max-width: 679px) { 
            width: 40px;
        }
        cursor: pointer;
    }

    &:hover img {
       opacity: .5;
    }

    .img {
        animation-name: ${slideInArrow};
        animation-duration: 2s;
       
    }

    .hidden {
        display: none;
    }

    .show {
        display: block;
    }
   
`

//animation-name: ${(props) => props.loading === true ? slideIn : "none"};
// display: ${props => props.isVisible ? 'initial' : 'none'}
// transition: all 1.2s cubic-bezier(0.078, 0.81, 0.164, 1);s