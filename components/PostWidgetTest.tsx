import moment from 'moment';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getRecentPosts, getSimilarPosts } from '../services';
import Image from 'next/image';
import { grpahCMSImageLoader } from '../util';
const PostWidgetTest = ({categories}:any,{slug}:any) => {
  const [relatedPosts, setrelatedPosts] = useState([]);
  useEffect(() => {
    if(slug){
      getSimilarPosts(categories,slug)
        .then((result)=> setrelatedPosts(result));
    }
    else{
      getRecentPosts()
        .then((result)=> setrelatedPosts(result.posts));
    }
  
    // return () => {
    //   second
    // }
  }, [slug]);

  //console.dir("RELATED POSTS: "+ JSON.stringify(relatedPosts));
  
  return (
    <div className="bd-white shadow-lg rounded-lg p-8 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          {slug ? 'Related News' : 'Recent News'}
        </h3>

        {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.photo.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}


    </div>
  )
}

export default PostWidgetTest

