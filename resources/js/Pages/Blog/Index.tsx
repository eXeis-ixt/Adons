import Default from '@/Layouts/Default'
import { Head } from '@inertiajs/react'
import React from 'react'

import { CalendarDays, Clock } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/Components/ui/card"
import BlogCard from '@/Components/Blog/BlogCard'


const Index = () => {
  return (
    <Default>
<Head>
    <title>Blogs</title>
</Head>


<div id='blogs' className=' grid grid-cols-1 md:grid-cols-3 gap-5'>
<BlogCard />
<BlogCard />
<BlogCard />
<BlogCard />
<BlogCard />
<BlogCard />


</div>

    </Default>
  )
}

export default Index
