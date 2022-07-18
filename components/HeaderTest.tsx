import Link from "next/link"
import { getCategories } from "../services";
import { useState, useEffect } from "react";

const categories_demo = [
  {name: "খেলা", slug: "games"}, {name:"সর্বশেষ", slug: "last_update"}, {name: "বিশেষ সংবাদ", slug: "special_news"},
  {name:"রাজনীতি", slug:"politics"}, {name: "করোনাভাইরাস", slug:"corona"}, {name:"বাংলাদেশ", slug:"bangladesh"},
  {name:"বিশ্ব", slug:"world"}, {name:"বাণিজ্য", slug:"business"}, {name:"মতামত", slug:"opinion"}, {name:"বিনোদন" , slug:"entertainment"},
  {name:"চাকরি", slug:"jobs"}, {name:"জীবনযাপন", slug:"life_style"},
];



const HeaderTest = () => {
  const [categories, setCategories] = useState([]);



  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  //console.dir(categories)

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black">Election BD</span>
          </Link>
        </div>
        <div>
//         {categories.map((category, index) => (
//             <Link key={index} href={`/category/${category.node.slug}`}>
//               <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
//                 {category.node.name}</span>
//               </Link>
//           ))}
            {categories_demo}
        </div>
      </div>
    </div>
  )
}

export default HeaderTest
