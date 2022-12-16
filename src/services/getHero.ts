import { request, gql } from 'graphql-request'

const graphqlAPI = 'https://api-sa-east-1.hygraph.com/v2/clblci5a80fse01tdf2pna9ij/master'

export const getHero = async () => {
  const query = gql`
  query Assets {
  heroPages {
    id
    name
    phoneNumber
    role
    image {
      url
    }
    profilePicture {
      url
    }
    backgroundInformation
    email
    socialIcon {
      ... on Social {
        url
      }
    }
  }
}
  `
  const result = await request(graphqlAPI, query)
  
  return  result.heroPages[0]

}