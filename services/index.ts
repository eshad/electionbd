import { gql, request } from 'graphql-request';


const graphqlAPI :any=  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
  posts {
    excerpt
    featuredImage
    slug
    title
    authorName
    createdAt
    photo {
      url
    }
  }
}
`

    const result = await request (graphqlAPI, query);
    return result;
}

export const getCategories = async () => {
  const query = gql `
    query GetCategories {
  categoriesConnection {
    edges {
      node {
        id
        parentId
        name
        slug
      }
    }
  }
}
`
  const result = await request (graphqlAPI, query);
  return result.categoriesConnection.edges;
}

export const getRecentPosts = async () =>{
  const query = gql `
  query GetPostDetails {
  posts(orderBy: createdAt_ASC, last: 3) {
    id
    featuredImage
    title
    slug
    photo {
      url
    }
  }
}
  `
  const result = await request (graphqlAPI, query);
  return result;
}

export const getPostDetails = async (slug:any) => {
  const query = gql`
    query getPostDetails($slug : String!) {
  postsConnection(where: {slug: $slug}) {
    edges {
      node {
        title
        excerpt
        slug
        featuredImage
        photo {
          url
        }
        createdAt
        content {
          text
        }
        authors {
          name
          authorPhoto {
            url
          }
        }
      }
    }
  }
}
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};


export const getSimilarPosts = async ({categories}:any, {slug}:any) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};
//Comments sections

export const submitComment = async (obj:any) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug:any) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {posts_some: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};