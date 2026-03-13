import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/app/utils/utils";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { formatDate } from "@/app/utils/formatDate";
import { CustomMDX } from "@/components/mdx/MDXComponents";
import { Meta } from "@/components/seo/Meta";
import { Schema } from "@/components/seo/Schema";
import { Metadata } from "next";
import { FaArrowLeft, FaGithub } from "react-icons/fa6";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (p) => p.slug === slugPath
  );
  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image
      ? `${baseURL}${post.metadata.image}`
      : `${baseURL}/og?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (p) => p.slug === slugPath
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={`${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-secondary text-sm transition-colors mb-6 group"
      >
        <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
        Projects
      </Link>

      <h1 className="text-3xl sm:text-4xl font-display font-light tracking-[-0.02em] text-accent mb-2 leading-tight">
        {post.metadata.title}
      </h1>

      <div className="flex items-center gap-4 mb-8">
        {post.metadata.publishedAt && (
          <time className="text-text-tertiary text-sm font-mono">
            {formatDate(post.metadata.publishedAt)}
          </time>
        )}
        {post.metadata.link && (
          <a
            href={post.metadata.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-text-tertiary hover:text-accent text-sm transition-colors duration-200"
          >
            <FaGithub className="w-3.5 h-3.5" />
            View project
          </a>
        )}
      </div>

      {post.metadata.images.length > 0 && (
        <div className="rounded-lg overflow-hidden border border-border/60 mb-12">
          <Image
            src={post.metadata.images[0]}
            alt={post.metadata.title}
            width={960}
            height={540}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      <article>
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
}
