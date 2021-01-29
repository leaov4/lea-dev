import React from 'react'
import Project from './Project'
import styled from 'styled-components'
import AboutMe from './AboutMe'

const savoryData = {
    title: 'Savory',
    subTitle: 'Less time looking, more time cooking',
    date: "December 2020",
    bullets: ["A modern-day recipe book, Savory allows users to save and collect their favorite recipes from around the web and organize them in one place.", "Give our scraping alogrithm a go by creating an account on the login page and start saving recipes from one of our supported sites!",
    "React, Redux, Cheerio, Express, Sequelize, Node.js, PostgreSQL, Styled-components"],
    img: 'recipe-scrape-reduced-2.gif',
    link: 'savory-2021.herokuapp.com',
    linkTitle: 'savory-2021.herokuapp.com'
}

const plantData = {
    title: 'The Plant Shop',
    subTitle: 'An e-commerce site to sell and categorize succulents',
    date: "November 2020",
    bullets: ["React, Redux, Passport/Oauth, Express, Sequelize, PostgreSQL"],
    img: 'plants.png',
    link: 'https://plantshop-2020.herokuapp.com/products',
    linkTitle: 'plantshop-2020.herokuapp.com'
}

const helpData = {
    title: 'Help Desk',
    subTitle: 'A virtual help desk interface to submit and queue tickets',
    date: "January 2021",
    bullets: ["React, Redux, Bootstrap, Styled-components"],
    img: 'help.png',
    link: 'https://help-desk-2021.herokuapp.com/',
    linkTitle: 'help-desk-2021.herokuapp.com'
}

const hawaiiData = {
    title: 'Naturally Fit',
    subTitle: 'A website for the official tourism board of the Hawaiian Islands',
    date: "2020",
    bullets: ["Contributed reusable frontend components for article pages with React and CSS"],
    img: 'hawaii.png',
    link: 'https://furthermore.equinox.com/hawaii#/',
    linkTitle: 'furthermore.equinox.com/hawaii#/'
}

const laMerData = {
    title: 'Source of Strength',
    subTitle: 'Yoga instructors show their sources of strength, sponsored by La Mer',
    date: "2019",
    bullets: ["Contributed reusable frontend components for instructor stories with React and CSS"],
    img: 'la-mer1.png',
    link: 'https://furthermore.equinox.com/la-mer',
    linkTitle: 'furthermore.equinox.com/la-mer'
}

const Projects = () => {
    return (
        <div id="projects">
                <Project align='left' size='big' data={savoryData}/>
                <Project align='right' size='small' data={plantData}/>
                <Project align='left' size='small' data={helpData}/>
                <Break>Projects Contributed to at Equinox</Break>
                <Project align='right' size='small' data={hawaiiData}/>
                <Project align='left' size='small' data={laMerData}/>
                <Break></Break>
                <AboutMe />
        </div>
    )
}

export default Projects;

const Break = styled.div`
    margin-top: 100px;

    color: white;
    font-family: 'Source Code Pro', monospace;
`