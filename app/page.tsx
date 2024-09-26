import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Adolfo's Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Adolfo, a software engineer and data scientist from Chile living in Melbourne, Australia.
       
        `}
      </p>
      <p className="mb-4">
        {`I currently work as an Algorithmic Trader at a hedge fund, where I focus on
        high-frequency trading and quantitative investing. In my free time, I 
        enjoy working on interesting problems and building products that can potentially
        make a difference.
        `}
      </p>
      <p className="mb-4">
        {`In this site, you can find some of my work and writings.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
