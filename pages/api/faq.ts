import { NextApiRequest, NextApiResponse } from "next";
import { getWebsiteFaqList } from "@graphql/Query";
import {
  WebsiteFaqTypeQueryVariables,
  WebsiteFaqTypeQuery,
} from "@gentypes/index";
import getClient from "apolloClient";

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
  const client = getClient;

  const result = await client.query<
    WebsiteFaqTypeQuery,
    WebsiteFaqTypeQueryVariables
  >({
    query: getWebsiteFaqList,
    variables: { id: Number(req.cookies?.organizationId) },
    fetchPolicy: "network-only",
  });
  if (result.error || !result.data) {
    res.status(500).json({
      message: "Something went wrong",
      error: result.error ?? result.data,
    });
  } else {
    const { websiteFaqList } = result.data;
    res.status(200).json({ websiteFaqList });
  }
}

export default getDomainData;
