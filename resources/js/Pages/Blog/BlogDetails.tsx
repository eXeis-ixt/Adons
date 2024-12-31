import Default from '@/Layouts/Default';
import { Head } from '@inertiajs/react';
import React from 'react'
import DOMPurify from 'dompurify';
import Heading from '@/Components/ui/Heading';

interface Blog {
    id: number;
    title: string;
    slug: string;
    content: string;
    image: string | null;
    published_at: string | null;
    created_at: string;
    updated_at: string;
    author: string | null;
    keywords: string | null;
    meta_description: string | null;
    categories: {
        id: number;
        name: string;
        slug: string;
    }
}
const BlogDetails = ({blog}: {blog: Blog}) => {
  return (
    <div>

<Head>
    <title>{blog.title}</title>
    <meta name="description" content={blog.meta_description || ''} />
    <meta name="keywords" content={blog.keywords || ''} />
</Head>

    <Default>

        <div className=' w-full md:w-[60%] mx-auto'>

<div className=' relative'>
<div className="absolute top-1/2 left-1/2 -z-10 gradient w-full -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

<img src={blog.image ? `/storage/${blog.image}` : '/default-image-path.jpg'} alt={blog.title} className=' mx-auto w-[80%] h-full object-cover' />
</div>


<div className=' mt-10'>

<Heading title={blog.title} />

</div>

<div className=' mt-10 mb-10'>
<div className=" border-t border-gray-800"></div>

</div>
    <div className='blog' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(blog.content)}}>

    </div>

    </div>

    </Default>

    </div>

  )
}

export default BlogDetails
