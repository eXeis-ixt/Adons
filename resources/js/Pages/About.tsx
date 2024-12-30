import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import Heading from "@/Components/ui/Heading";
import Default from "@/Layouts/Default";
import { Head, Link } from "@inertiajs/react";
import { ArrowRight, Code2, Globe, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <>
        <Head>
            <title>About us</title>
            <meta name="description" content="About us page" />
            </Head>
            <Default>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
                <div className="relative min-h-screen  dark">
                    <div className="absolute top-0 left-1/2 -z-10 gradient-about w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

                    {/* Hero Section */}
                    <section className="py-24 md:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="text-primary text-sm font-medium">
                                    About Us
                                </div>
                                <Heading title="Empowering business to grow faster" />
                                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                                    We create tools that empower developers to
                                    build better software, faster.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="py-20">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-8 md:grid-cols-3">
                                {[
                                    {
                                        metric: "100+",
                                        label: "Projects done",
                                        icon: Users,
                                    },
                                    {
                                        metric: "8+",
                                        label: "Countries",
                                        icon: Globe,
                                    },
                                    {
                                        metric: "100k+",
                                        label: "Lines of Code",
                                        icon: Code2,
                                    },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="flex flex-col items-center space-y-2 text-center"
                                    >
                                        <stat.icon className="h-6 w-6 text-primary" />
                                        <h3 className="text-3xl font-bold text-foreground">
                                            {stat.metric}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="py-20 border-t border-border">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-8 md:gap-12">
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-foreground">
                                        Leadership Team
                                    </h2>
                                    <p className="text-muted-foreground">
                                        Meet the people driving our vision
                                        forward
                                    </p>
                                </div>
                                <div className="grid gap-8 md:grid-cols-3">
                                    {[
                                        {
                                            name: "Fahad Bhuiyan",
                                            role: "COO & Co-Founder",
                                            image: "https://avatars.githubusercontent.com/u/78530442?s=400&u=2876abeef21d55f999e19542a54c8e96afc5c9d7&v=4",
                                        },
                                        {
                                            name: "Michael Chen",
                                            role: "CTO",
                                            image: "/placeholder.svg?height=400&width=400",
                                        },
                                        {
                                            name: "Emma Davis",
                                            role: "Head of Design",
                                            image: "/placeholder.svg?height=400&width=400",
                                        },
                                    ].map((member) => (
                                        <div
                                            key={member.name}
                                            className="space-y-3"
                                        >
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="aspect-square object-cover rounded-lg bg-muted"
                                            />
                                            <div>
                                                <h3 className="font-medium text-foreground">
                                                    {member.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Timeline Section */}
                    <section className="py-20 border-t border-border">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-8 md:gap-12">
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-foreground">
                                        Our Mission & Journey
                                    </h2>
                                    <p className="text-muted-foreground">
                                        The path to revolutionizing software
                                        development
                                    </p>
                                </div>
                                <div className="space-y-12">
                                    {[
                                        {
                                            year: "2023",
                                            title: "Company Founded",
                                            description:
                                                "Started with a vision to make software development accessible to everyone. Our platform began as a simple idea: to provide tools and infrastructure that would help turn ideas into reality, without the complexity.",
                                        },
                                        {
                                            year: "2024 Q2",
                                            title: "First Major Release",
                                            description:
                                                "Launched our flagship product with groundbreaking features that streamlined the development process. The platform quickly gained traction among developers worldwide.",
                                        },
                                        {
                                            year: "2024 Q3",
                                            title: "Global Expansion",
                                            description:
                                                "Opened offices across multiple continents to better serve our growing user base. Established partnerships with leading tech companies to enhance our ecosystem.",
                                        },
                                        {
                                            year: "2024 Q4",
                                            title: "Platform Evolution",
                                            description:
                                                "Introduced revolutionary AI-powered development tools, making software creation more intuitive and efficient than ever before.",
                                        },
                                        {
                                            year: "2025",
                                            title: "Future Vision",
                                            description:
                                                "Continuing our mission to democratize software development. Working on next-generation tools that will reshape how applications are built and deployed.",
                                        },
                                    ].map((milestone) => (
                                        <div
                                            key={milestone.title}
                                            className="flex flex-col md:flex-row gap-4 items-start group"
                                        >
                                            <div className="md:w-32 flex-shrink-0">
                                                <div className="text-sm font-medium text-primary">
                                                    {milestone.year}
                                                </div>
                                            </div>
                                            <div className="flex-1 relative before:absolute before:left-0 before:top-0 before:w-px before:h-full before:bg-border md:pl-12">
                                                <h3 className="font-medium text-foreground mb-1">
                                                    {milestone.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-20 border-t border-border">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-foreground">
                                    Join us in shaping the future
                                </h2>
                                <p className="mx-auto max-w-[600px] text-muted-foreground">
                                    Start your business with tools designed for
                                    the modern yor business.
                                </p>
                                <Link href="/contact">
                                    <Button className="group">
                                        Get Started
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </Default>
        </>
    );
}
