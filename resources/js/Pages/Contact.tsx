import Default from '@/Layouts/Default'
import { Head, useForm } from '@inertiajs/react'
// import React, { useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/Components/ui/card"
import { Label } from '@/Components/ui/label'
import { Input } from "@/Components/ui/input"
import { Textarea } from '@/Components/ui/textarea'
import { Button } from '@/Components/ui/button'
// import Button from '@/Components/Button'

import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
// import { useToast } from "@/Components/ui/use-toast";
import { Toaster } from '@/Components/ui/toaster'
import { useToast } from '@/hooks/use-toast'
// import { Toaster } from "@/Comonents/ui/toaster";

interface PageProps {
    auth: {
        user: any; // adjust type according to your user structure
    };
    flash: {
      success?: string;
      error?: string;
    };
  }

const ContactForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        phone: '',
        email: '',
        message: ''
    })



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/contact')
    }

    return (
        <Card  className=" bg-black text-white w-full max-w-2xl mx-auto">
            <Head>
        <title>
            Contact
        </title>
            </Head>
            <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            type="number"
                            value={data.phone}
                            onChange={e => setData('phone', e.target.value)}
                            className={errors.phone ? 'border-red-500' : ''}
                        />
                        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            value={data.message}
                            onChange={e => setData('message', e.target.value)}
                            className={errors.message ? 'border-red-500' : ''}
                            rows={5}
                        />
                        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <Button type="submit" disabled={processing} className="w-full">
                        {processing ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

const Contact = () => {
    return (
        <Default>
            <div className="container mx-auto py-10 px-4">
                <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
                <ContactForm />
            </div>
        </Default>
    )
}

export default Contact
