import React from 'react'
import styled, {keyframes} from 'styled-components'
import useIsInViewport from 'use-is-in-viewport'



const Project = props => {
    
    const {size, data, align} = props;
    const [isInViewport, targetRef] = useIsInViewport()

    return (
        <>
            <Container size={size} align={align}>
                <ImageContainer size={size} >
                    <div ref={targetRef} className={isInViewport ? 'visible' : 'hidden'}>
                        <img src={data.img} alt={data.title}></img>
                    </div>
                </ImageContainer>
                <TextContainer align={align} size={size}> 
                        <div ref={targetRef} className={isInViewport ? 'inner-container visible' : 'inner-container hidden'} >
                            <div className="title"><a href={data.link} target="_blank">{data.title}</a></div>
                            <div className="date">{data.date}</div>
                            <div className="sub-title">{data.subTitle}</div>
                            {data.bullets.map((item) => 
                             <div className="bullet">{item}</div>
                         )}
                         <div ref={targetRef} className={isInViewport ? 'link visible' : 'link hidden'}>
                                 <a href={data.link} target="_blank">{data.linkTitle}</a>
                        </div>
                        </div>
                </TextContainer>
            </Container>
        </>
    )
}

export default Project;

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

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    background-color: black;
    height: ${(props) => props.size === 'big' ? '500px' : '400px'};
    flex-direction: ${(props) => props.align === 'left' ? 'row' : 'row-reverse'};
    flex-wrap: wrap;
    @media (max-width: 679px) { 
       flex-direction: 'row';
       height: 700px;
    }
`

const ImageContainer = styled.div`
    width: 60%;
    @media (max-width: 679px) { 
        width: 100%;
       
    }
    margin-top: 150px;

    img {
        width: 80%;
    }
    .hidden,
    .visible {
        transition: opacity 1300ms ease-out;
        will-change: opacity;
        opacity: 0;
        transition-delay: 300ms;
   
    }
    .visible {
        opacity: 1;
    }
`
const TextContainer = styled.div`
    width: 40%;
    height: 300px;
    display: flex;
    flex-direction: column;
    margin-top: ${(props) => props.size === 'big' ? '-50px' : '0'};
    a {
        color: white;
        &:hover {
            color: 	#A8A8A8;
        }
    }
 

    font-family: 'Source Code Pro', monospace;
    @media (max-width: 679px) { 
        width: 100%;
        margin-top: -100px;
        margin-bottom: 200px;
        padding: 20px;
    }

    .inner-container {
        margin-top: 150px;
        text-align: ${(props) => props.align === 'right' ? 'right' : 'left'};
        color: white;
        @media (max-width: 679px) {
            text-align: center;
        }
    }

    .hidden,
    .visible {
        transition: opacity 1300ms ease-out;
        will-change: opacity;
        opacity: 0;
        transition-delay: 400ms;
    }

    .visible {
        opacity: 1;
        animation-name: ${slideIn};
        animation-duration: 2s;
    }

    .title {
        font-size: 36px;
        font-family: 'Josefin Sans', sans-serif;
        text-decoration: underline;
        font-size: 46px;
        
    }

    .date {
        margin-bottom: 20px;
        font-family: 'Source Code Pro', monospace;
    }
    .bullet {
        
    }
    .sub-title {
        font-weight: bold;
        margin-bottom: 10px;
    }

    .link {
        margin-top: 10px;
    }
 
`
