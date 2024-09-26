import { ProjectPosts } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'My software engineering and data science projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <ProjectPosts />
    </section>
  )
}
