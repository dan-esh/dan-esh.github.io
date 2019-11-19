import React from 'react'

import Head from '../components/head'
import Layout from "../components/layout"

const ContactPage = () => {
    return (

        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <p>
                The best way to reach me is via <a href="mailto:td.abeyratne@gmail.com" target="_blank" rel="noopener noreferrer">email</a>.
            </p>
        </Layout>
    )
}

export default ContactPage