const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const serviceTemplate = path.resolve('./src/templates/service.js')
    resolve(
      graphql(
        `
          {
            allContentfulServices {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulServices.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/services/${post.node.slug}/`,
            component: serviceTemplate,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
