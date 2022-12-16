import { request, gql } from 'graphql-request'

const graphqlAPI = 'https://api-sa-east-1.hygraph.com/v2/clblci5a80fse01tdf2pna9ij/master'

export const getExperience = async () => {
  const query = gql`
  query Assets {
    experiences {
    id
    jobTitle
    isCurrentWorkingHere
    company
    dateStarted
    dateEnded
    companyImage {
      url
    }
    experiencePoints {
      id
      point
    }
    experienceSkills {
      id
      skillImage {
        id
        url
      }
    }
  }
}
  `
  const result = await request(graphqlAPI, query)
  
  return  result.experiences

}