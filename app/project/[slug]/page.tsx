import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getProjectPosts } from 'app/project/utils'
import { baseUrl } from 'app/sitemap'
import { Header } from 'app/components/header'
import './mdx.css'


export async function generateStaticParams() {
  let posts = getProjectPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getProjectPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt,
    description,
    url,
    repository,
    published,
  } = post.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedAt,
      url: `${baseUrl}/project/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [],
    },
  }
}

export default function Project({ params }) {
  let post = getProjectPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <Header project={post.metadata} />
    <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
      <CustomMDX source={post.content} />
      </article>
    </section>
  )
}