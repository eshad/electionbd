import moment from 'moment';
import { getPosts, getPostDetails } from '../../services';
import { PostDetailsTest, CategoriesTest, PostWidgetTest, AuthorTest, CommentsTest, CommentsFormTest, Loader } from '../../components';
import { useRouter } from 'next/router';
import PostWidget from "../../components/PostWidget";
import { URLSearchParams } from 'url';

export async function getStaticProps({ params }:any) {
    //console.log("Context: "+ params.slug);

    const data = await getPostDetails(params.slug) || [];
    return {
      props: {
        post: data,
        slug: params.slug,
      },
    };
  }

  export async function getStaticPaths(){
    const posts = await getPosts() || [];
    const posts_new = JSON.parse(JSON.stringify(posts));
    //posts_new.map((ind)=> console.log(ind))

    //posts_new.posts.map((entry):any => console.log(entry.slug))

    // const path = posts_new.posts.map((post:any)=>({
    //     params: {slug: post.slug}
    // }));
    // const path = posts_new.posts.map((o:any) => {
    //   return {
    //       params: { slug: o.slug.toString() }
    //   }
    // });
    const paths = posts_new.posts.map((post:any) => ({
      params: { slug: post.slug },
    }))
    //console.log("Length : "+ JSON.stringify(path))

    return {
        paths,
        // paths: posts_new.posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    }
  }

/*export async function getStaticPaths() {
    const posts = await getPosts();
    //console.log(posts)
    return {
    //   paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }*/

const PostDetails = ({post, slug}:any) => {

    // console.log({slug})
    // console.log(post[0].node.slug)
    return (
    <>
        {/* {post.slug} */}
        <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetailsTest post={post} />
            <AuthorTest author={post?.author} />
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            <CommentsFormTest slug={slug} />
            <CommentsTest slug={slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              {/* <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} /> */}
              <PostWidgetTest />
              <CategoriesTest />
            </div>
          </div>
        </div>
      </div>
    </>
    )
}
export default PostDetails;