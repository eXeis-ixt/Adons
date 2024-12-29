import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/Components/ui/card"
  import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiPostgresql,
    SiAuth0,
    SiTypescript,
    SiPrisma,
    SiRadixui,
    SiVercel,
    SiTrpc,
    SiLaravel,
    SiInertia,
    SiVuedotjs,
    SiSvelte,
    SiWordpress,
    SiMysql,
    SiMongodb
  } from 'react-icons/si'

  export default function TechStack() {
    const technologies = [

      {
        icon: <SiNextdotjs className="h-8 w-8 text-white" />,
        name: "Next.js",
        description: "React framework for production-grade applications",
        category: "Framework",
      },
      {
        icon: <SiReact className="h-8 w-8 text-blue-400" />,
        name: "React.js",
        description: "React framework for production-grade applications",
        category: "Framework",
      },
      {
        icon: <SiLaravel className="h-8 w-8 text-red-700" />,
        name: "Laravel",
        description: "PHP framework for building web applications",
        category: "Framework",
      },
      {
        icon: <SiTailwindcss className="h-8 w-8 text-[#38BDF8]" />,
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
        category: "Styling",
      },
      {
        icon: <SiInertia className="h-8 w-8 text-[#7b38f8]" />,
        name: "Inertia.js",
        description: "Client-side routing for server-side rendered apps",
        category: "Framework",
      },
      {
        icon: <SiVuedotjs className="h-8 w-8 text-[#3fb27f]" />,
        name: "Vue.js",
        description: "Progressive JavaScript framework",
        category: "Framework",
      },
      {
        icon: <SiSvelte className="h-8 w-8 text-[#f73c00]" />,
        name: "Svelte.js",
        description: "Cybernetically enhanced web apps",
        category: "Framework",
      },

      {
        icon: <SiWordpress className="h-8 w-8 text-blue-400" />,
        name: "Wordpres",
        description: "Open-source content management system",
        category: "CMS",
      },
      {
        icon: <SiMysql className="h-8 w-8 text-[#316ca7]" />,
        name: "Mysql",
        description: "Open-source relational database management system",
        category: "Database",
      },
      {
        icon: <SiMongodb className="h-8 w-8 text-[#00f76b]" />,
        name: "MongoDB",
        description: "NoSQL database program",
        category: "Database",
      },

    ]

    return (
        <section className="container py-12 px-4 md:py-24 lg:py-32 transparent text-white">
          <div className="absolute bottom-1/3 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/4 inset-0 blur-[10rem]"></div>

        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Tech Stack
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            We use cutting-edge technologies to build robust and scalable applications
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="transition-all hover:shadow-lg hover:-translate-y-1 bg-black border-zinc-950"
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  {tech.icon}
                  <CardTitle className="text-xl text-white">{tech.name}</CardTitle>
                </div>
                <CardDescription className="text-xs uppercase font-semibold text-gray-400">
                  {tech.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    )
  }

