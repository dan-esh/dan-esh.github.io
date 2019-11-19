import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="Portfolio"/>
            <h1>Sample projects</h1>
            <h4><Link to="/blog/crypto">Cryptocurrency tracker</Link></h4>
            <h4><Link to="/blog/job-board">Job Board</Link></h4>
            <h4><Link to="/blog/natours">Tour Booking App</Link></h4>
            <h4><Link to="/blog/flask-blog">Flask Micro-Blog</Link></h4>
            <h4><a href="https://github.com/dan-esh" target="_blank" rel="noopener noreferrer">My Github page</a></h4>
        </Layout>
    )
}

export default AboutPage