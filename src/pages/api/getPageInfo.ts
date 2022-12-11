import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import { IPageInfo } from '../../typings'


const query = groq `
  *[_type == "pageinfo"][0]
`

type Data = {
  pageInfo: IPageInfo
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: IPageInfo = await sanityClient.fetch(query)
  res.status(200).json({ pageInfo })
}
