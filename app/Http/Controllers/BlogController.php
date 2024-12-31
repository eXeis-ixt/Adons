<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index(){
        $posts = Post::latest()->get();
        return Inertia::render('Blog/Index',[
            'posts' => $posts
        ]);
    }

    public function show(Post $blog) // Route model binding
    {
        $blog->load('categories');
        return Inertia::render('Blog/BlogDetails', [
            'blog' => $blog,
        ]);
    }
}
