import { getBlogPosts } from 'app/blog/utils'
import { getProjectPosts } from 'app/project/utils'
export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let projects = getProjectPosts().map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }))

  let routes = ['', '/blog', '/project'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))


  return [...routes, ...blogs, ...projects]
}
