import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>Hello.</h1>
            <h2>I'm Danesh, a full-stack developer from sunny Wellington.</h2>
            <p>I can build and deploy anything from a <Link to="/blog/gatsby">static website</Link> to a full stack web application. I have degrees in computer science and mathematics and I love solving technical problems.</p>
            <p>Need a developer? <a href="mailto:td.abeyratne@gmail.com" target="_blank" rel="noopener noreferrer">email me</a>.</p>
            
        </Layout>
    )
}

export default IndexPage