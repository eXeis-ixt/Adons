import Default from "@/Layouts/Default";
import { Head } from "@inertiajs/react";
import React from "react";

import { CalendarDays, Clock, Link } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/Components/ui/card";
import BlogCard from "@/Components/Blog/BlogCard";

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
    };
}

const Index = ({ posts }: { posts: Post[] }) => {
    return (
        <Default>
            <Head>
                <title>Blogs</title>
            </Head>

            <div id="blogs" className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                {posts.map((post: Post) => (
                    <BlogCard post={post} />
                ))}
            </div>
        </Default>
    );
};

export default Index;
