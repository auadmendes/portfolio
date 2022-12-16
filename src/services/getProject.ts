import { request, gql } from 'graphql-request'

const graphqlAPI = 'https://api-sa-east-1.hygraph.com/v2/clblci5a80fse01tdf2pna9ij/master'

export const getProject = async () => {
  const query = gql`
  query Assets {
    projects {
    id
    title
    summary
    linkToBuild
    image {
      url
    }
    skills {
      id
      skillImage {
        url
      }
    }
  }
}
  `
  const result = await request(graphqlAPI, query)
  
  return  result.projects

}