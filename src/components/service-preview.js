import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './service-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/services/${article.slug}`}>{article.title}</Link>
    </h3>
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
