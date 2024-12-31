import { CalendarDays, Clock } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/Components/ui/card"
import { Link } from '@inertiajs/react';


interface Post {
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

export default function BlogCard({ post }: { post: Post }) {

    const name = 'Fahad';
  return (
    <div className="dark">
      <div className="relative max-w-md">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white" />

        <Card className="max-w-md overflow-hidden rounded-none bg-black border-transparent">
          <div className="relative">
            <img
              src={'storage/' + post.image}
              alt="Blog post featured image"
              className="w-full h-[200px] object-cover"
            />
          </div>
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-1 text-sm text-zinc-400">
              <CalendarDays className="h-4 w-4" />
              <time dateTime="2024-01-01">{post.created_at}</time>
              <span className="mx-1">•</span>
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
            <CardTitle className="line-clamp-2 text-2xl text-white">
                <Link href={`/blog/${post.slug}`}>
              {post.title}
                </Link>
            </CardTitle>
            <CardDescription className="line-clamp-2 text-zinc-400">
                {post.meta_description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`https://ui-avatars.com/api/?name=${post.author}&color=FFFFFF&background=09090b`} alt="Sarah Wilson" />
                <AvatarFallback>{post.author}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="font-semibold leading-none text-white">{post.author}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

