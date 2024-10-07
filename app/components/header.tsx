"use client";

import { ArrowLeft, Github, Globe } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
  };
};

export const Header: React.FC<Props> = ({ project }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { label: string; href: string }[] = [];
  if (project.repository) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project.url) {
    links.push({
      label: "Website",
      href: project.url,
    });
  }

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="container mx-auto px-6 py-12 isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/project"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="flex gap-4">
          {project.repository && (
            <Link 
              href={`https://github.com/${project.repository}`}
              target="_blank"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <Github className="w-6 h-6" />
            </Link>
          )}
          {project.url && (
            <Link 
              href={project.url}
              target="_blank"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <Globe className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>

      </div>
    </header>
  );

};