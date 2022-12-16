import { request, gql } from 'graphql-request'

const graphqlAPI = 'https://api-sa-east-1.hygraph.com/v2/clblci5a80fse01tdf2pna9ij/master'

export const getSocials = async () => {
  const query = gql`
  query Assets {
    socials {
    id
    title
    url
  }
}
  `
  const result = await request(graphqlAPI, query)
  
  return  result.socials

}