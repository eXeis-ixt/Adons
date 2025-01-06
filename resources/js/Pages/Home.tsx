import Brand from "@/Components/Brand"
import Branding from "@/Components/Branding"
import Footer from "@/Components/Footer"
import Hero from "@/Components/Hero"
import Navbar from "@/Components/Navbar"
import { Project } from "@/Components/Projects"
import Services from "@/Components/Services"
import TechStack from "@/Components/TechStack"
import Default from "@/Layouts/Default"
import { ProjectProps } from "@/types"
import { Head, Link } from "@inertiajs/react"

import { motion } from "framer-motion"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"






const Home = ({projects}: {projects: ProjectProps[]}) => {
  return (
    <Default>
<div>


</div>

        <Head>
            <title>Home</title>
        </Head>
<div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

<div className="mt-20">

    <Hero />


</div>


<div className="mt-20">
<motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}>

    <Brand />
</motion.div>
</div>

<div className="mt-20">
    <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.7 }}

    viewport={{ once: true }}
   >
    <TechStack />

    </motion.div>
</div>

<div className="mt-20">
    <Branding />
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
