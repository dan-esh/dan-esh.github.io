import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

var dt = new Date()

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    company
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <p>© {dt.getFullYear()} {data.site.siteMetadata.company} </p>
        </footer>
    )
}

export default Footer