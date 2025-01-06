<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
   public function index()
   {
       return Inertia::render('Contact');

    }

    public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'phone' => 'required|string|max:20',
        'message' => 'required|string'
    ]);

    Contact::create([
        ...$validated,
        'ip' => $request->ip()
    ]);

    return redirect()->route('contact')->with('success', 'Your message has been sent!');

}

}
