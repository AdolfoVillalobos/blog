import { notFound } from 'next/navigation'
import { formatDate } from 'app/blog/utils'
import { allPosts } from 'contentlayer/generated'
import { baseUrl } from 'app/sitemap'
import { BlogMdx } from 'app/components/blog_mdx'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Blog({ params }) {
  let post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.date,
            dateModified: post.date,
            description: post.summary,
            image: post.image
              ? `${baseUrl}${post.image}`
              : `/og?title=${encodeURIComponent(post.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.date)}
        </p>
      </div>
      <article className="prose">
        <BlogMdx code={post.body.code} />
      </article>
    </section>
  )
}
