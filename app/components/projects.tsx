import Link from 'next/link'
import { formatDate } from 'app/project/utils'
import { Card } from './card'
import { allProjects } from 'contentlayer/generated'

export function ProjectPosts() {

  return (

    <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
      <div className="grid grid-cols-1 gap-4">
        {allProjects
          .sort((a, b) => {
            if (
              new Date(a.date) > new Date(b.date)
            ) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <Card key={post.slug}>
              <Link
                className="flex flex-col space-y-1 mb-4"
                href={`/project/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(post.date, false)}
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.title}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
      </div>
    </div>
  )
}
