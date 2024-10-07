
import {allPosts} from 'contentlayer/generated'
import {allProjects} from 'contentlayer/generated'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {

  let blogs = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }))

  let projects = allProjects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: project.date,
  }))

  let routes = ['', '/blog', '/project'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))


  return [...routes, ...blogs, ...projects]
}
