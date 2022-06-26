import "bootstrap/dist/css/bootstrap.min.css";
import type { NextPage } from 'next';
import Head from 'next/head';
import { CategoriesTest, PostCardTest, PostWidgetTest } from "../components";
import {getPosts} from  '../services'


const postsStatic = [
  { title: 'React Test', excerpt: 'Learn Test' },
  { title: 'News BD', excerpt: 'Chittagonj' },
];

export async function getStaticProps () {
  const posts = (await getPosts()) || [];
  return {
    props: {posts}
  };
}

const Home: NextPage = ({posts}:any) => {

  
  return (
    <>
      {/* <div className="container">
  <div className="card">
      <div className="card-header ">Card Header</div>
      <div className="card-body">Card Body</div>
      <div className="card-footer text-muted">Card Footer</div>
    </div>
  </div> */}
      <div className="container mx-auto px-10 mb-8">
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.posts.map((post, index) => (<PostCardTest key={index} post={post} /> ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidgetTest/>
            <CategoriesTest />
          </div>
        </div>
      </div>
    </div>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
    </>
  )
}

export default Home
