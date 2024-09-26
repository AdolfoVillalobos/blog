import { BlogPosts } from 'app/components/posts'
import { GoogleAnalytics } from '@next/third-parties/google'


export default function Page() {
  return (
    <>
      <GoogleAnalytics gaId="G-4K5RHNCVMZ" />
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Adolfo's Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Adolfo Villalobos, a software engineer and data scientist from `}
        <img src="https://cdn-icons-png.flaticon.com/512/197/197586.png" width="13" alt="Chilean flag" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
        {`Chile living in Melbourne, `}
        <img src="https://cdn-icons-png.flaticon.com/512/323/323367.png" width="13" alt="Australian flag" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
        {`Australia.`}
      </p>
      <p className="mb-4">
        {`I currently work as an Algorithmic Trader at a Cryptocurrency Exchange called Orionx.com, where I focus on
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
    </>
  )
}
