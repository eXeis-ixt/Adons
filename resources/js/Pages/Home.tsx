import Footer from "@/Components/Footer"
import Hero from "@/Components/Hero"
import Navbar from "@/Components/Navbar"
import Default from "@/Layouts/Default"
import { Head } from "@inertiajs/react"

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



    </Default>
  )
}

export default Home
