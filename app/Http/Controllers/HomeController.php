<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $versions = Application::VERSION;
        $contacts = Contact::all();
        return Inertia::render('Home',[
            'versions'=> $versions,
            'contacts'=> $contacts
        ]);
    }
    public function about(){
        return Inertia::render('About');
    }
    public function products(){
        return Inertia::render('Products');
    }
}
