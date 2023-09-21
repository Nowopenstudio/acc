import Link from "next/link";
import { Post } from "./lib/interface";
import { client } from './lib/sanity'
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react"
import Image from "next/image";

async function getData(){
  const query = '*[_type=="post"]'
  const data = await client.fetch(query);
  console.log(data[0].cover.asset)
  return data;
}

export default async function indexPage() {
  const data = (await getData()) as Post[];
  
  const PortableTextComponent = {
    types:{
        image:({value}:{value:any}) =>(
            <Image src={urlFor(value).url()} alt="image" className="rounded-lg" width={800} height={800}/>
        )
    }}

  return (
    <div>
      <div className="space-y-2 pb-8 md:space-y-5 pt-10">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
          Under Construction
        </h1>

      </div>
      <div>
        {data.map((post)=>{
          return(
            <div key={post._id} className="py-4">
              <article className="xl:flex justify-center items-center w-full">
                
           
                  
                  <div className="w-full pb-8 pt-2 dark:prose-invert prose-lg">
                    <img className="m-auto w-6/12 xl:w-10/12" src={urlFor(post.cover).url()}/>
                  </div><Link href="mailto:info@americancargocare.com">
                  <div className='w-full text-white text-center font-bold'>
                    <PortableText value={post.content} components={{}}/>
                  </div>
                  </Link>
             

              </article>
            </div>
          )
        })}
        </div>
    </div>
  )
}