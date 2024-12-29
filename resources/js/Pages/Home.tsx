import Brand from "@/Components/Brand"
import Footer from "@/Components/Footer"
import Hero from "@/Components/Hero"
import Navbar from "@/Components/Navbar"
import { Project } from "@/Components/Projects"
import Services from "@/Components/Services"
import Default from "@/Layouts/Default"
import { Head } from "@inertiajs/react"



const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A modern dashboard built with React and real-time data visualization",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
      githubUrl: "https://github.com/username/ecommerce-dashboard",
      liveUrl: "https://ecommerce-dashboard.demo"
    },
    {
      title: "AI Writing Assistant",
      description: "An AI-powered writing tool that helps improve your content",
      imageUrl: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=2340",
      githubUrl: "https://github.com/username/ai-writer",
      liveUrl: "https://ai-writer.demo"
    },
    {
      title: "Social Media Analytics",
      description: "Track and analyze social media performance across platforms",
      imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2348",
      githubUrl: "https://github.com/username/social-analytics",
      liveUrl: "https://social-analytics.demo"
    },
    {
        title: "Social Media Analytics",
        description: "Track and analyze social media performance across platforms",
        imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2348",
        githubUrl: "https://github.com/username/social-analytics",
        liveUrl: "https://social-analytics.demo"
      },
  ];

const Home = ({versions}: {versions: any}) => {
  return (
    <Default>
        <Head>
            <title>Home</title>
        </Head>
<div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

<div className="mt-20">

    <Hero />
</div>


<div className="mt-20">

    <Brand />
</div>

<div className="mt-20">
    <Services />
</div>


<div className="mt-20">
<h1 className=' text-6xl text-gray-400 mb-5 '>Some of our projects</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">

          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
</div>


    </Default>
  )
}

export default Home
