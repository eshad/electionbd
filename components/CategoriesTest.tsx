import { useState, useEffect } from "react"
import Link from "next/link"
import { getCategories } from "../services/"

const CategoriesTest = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  //console.log(JSON.stringify(categories))
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
       <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
       {categories.map((category, index) => (
        <Link key={index} href={`/category`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}></span>
        </Link>
      ))}
    </div>
  )
}

export default CategoriesTest
