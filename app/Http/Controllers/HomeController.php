<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $versions = Application::VERSION;
        return Inertia::render('Home',[
            'versions'=> $versions
        ]);
    }
    public function about(){
        return Inertia::render('About');
    }
    public function products(){
        return Inertia::render('Products');
    }
}
