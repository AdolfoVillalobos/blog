import { notFound } from 'next/navigation'
import { allProjects } from 'contentlayer/generated'
import { ProjectMdx } from 'app/components/project_mdx'
import { Header } from 'app/components/header'
import './mdx.css'


export async function generateStaticParams() {
  let posts = allProjects
  return posts.map((post) => ({
    slug: post.slug,
  }))
}



export default function Project({ params }) {
  let project = allProjects.find((post) => post.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (

    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <Header project={project} />
      <article className="px-4 py-12 mx-auto prose prose-quoteless">
        <ProjectMdx code={project.body.code} />
      </article>
    </div>
  )
}