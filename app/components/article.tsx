import type { Project } from "contentlayer/generated";
import Link from "next/link";
import { Eye } from "lucide-react";

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = (props) => {
  return (
    <Link href={`/project/${props.project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            {props.project.date ? (
              <time dateTime={new Date(props.project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(props.project.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>

        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {props.project.title}
        </h2>
        <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {props.project.description}
        </p>
      </article>
    </Link>
  );
};