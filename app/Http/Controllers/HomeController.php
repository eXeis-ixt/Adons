<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Project;
use App\Models\Team;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $versions = Application::VERSION;
        $projects = Project::latest("id")->inRandomOrder()->get();
        return Inertia::render('Home',[
            'versions'=> $versions,
            'projects'=> $projects
        ]);
    }
    public function about(){
        $teams = Team::latest('id')->get();
        return Inertia::render('About',[
            'teams'=> $teams
        ]);
    }
    public function products(){
        return Inertia::render('Products');
    }
}
