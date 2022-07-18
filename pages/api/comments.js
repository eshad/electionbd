import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ4NDE1MDYsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w0ODF3aXUzNDgxcDAxejNlbzJhZ2liei9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNmY4NDUzZTAtMmYxYi00MmU3LWJjYjktM2Y5Y2FlYjVlMjlmIiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.UDpck1PvW78aikjb-yNMLHmNtQ9JwK04ZiDJN21DO-8btjrm3s_2mMXb6yeZcO5RWsuZW7DfiM7xsihra0s1RyCgrLdplm1EOaVZ9DVICb4VeLxYUbCoWIGPWcT6n9mYDHCBKDScmmTs8Td-0t9ViD5TdMz8rCsGlZgZWlsaf8GvgK2IiwTYZ95rq-xuBOrULSN7acDBc7FklXkZ1qI9c7CXDCOMWful4DBds5Mb-inhB5aGdAf1fUfmEitIzZAPNnIZeJ0tzrcq5U1nHUVT7mnlWXH0TizazGnB3QIT78jEWn2ct6WhTBtcwX8s8tPwwxYS1Gezgo5icZe3iM0cDHZIs-yKHAAk-9IxdBYaThnGUt0AZGv2Wr_fzOOPFzsbw_fAiE4jo22FVNtz5pBPw4becw1JA63XybfRA6C1oMhUHJpMeUNuqi72n0OmNWGrpiG6DCh6Tp0Ei1iMcT-IGSxlc_A0FFOEazaVlI2lFV86APjASMQ-vbXKYXT_6BAiPjVbbYtmcOg5nGgGS4idNucjIHWwVtzMWszF4QfTtV6y0FKGeNGLUvnXH-zag2wrsmRbvmFEFsnf4BAHoH-BGT0pHDKWgJApIjK5QR0GWw9hstntCu3V5odydkq4DsYa_btGON3a98ZDBmM35-snVuR7snQxUO_0vFJYm0pSOHA`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {comment: $comment, email: $email, name: $name, posts: {connect: {slug: $slug}}}) { id }
    }
  `;

  try {
    const result = await graphQLClient.request(query, {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      slug: req.body.slug,
    });
  } catch (error) {
    return res.status(200).send(error);
  }
  return res.status(200).send(process.env.GRAPHCMS_TOKEN);
}
