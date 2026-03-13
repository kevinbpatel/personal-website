import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function CustomLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string; children: ReactNode }) {
  if (!href) return <span {...props}>{children}</span>;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 transition-colors" {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 transition-colors" {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 transition-colors" {...props}>
      {children}
    </a>
  );
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const sizes: Record<number, string> = {
    1: "text-2xl font-light mt-10 mb-4",
    2: "text-xl font-light mt-8 mb-3",
    3: "text-lg font-normal mt-6 mb-2",
    4: "text-base font-normal mt-4 mb-2",
    5: "text-sm font-medium mt-3 mb-1",
    6: "text-sm font-medium mt-3 mb-1",
  };

  const Component = ({ children }: { children?: ReactNode }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const slug = typeof children === "string" ? slugify(children) : "";
    return (
      <Tag id={slug} className={`font-display text-text-primary tracking-[-0.02em] ${sizes[level]}`}>
        {children}
      </Tag>
    );
  };
  Component.displayName = `Heading${level}`;
  return Component;
}

function Paragraph({ children }: { children?: ReactNode }) {
  return (
    <p className="text-text-secondary leading-[1.75] text-[15px] my-3">
      {children}
    </p>
  );
}

function MdxImage({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!src) return null;
  return (
    <span className="block my-6 rounded-lg overflow-hidden border border-border/60">
      <Image
        src={src}
        alt={alt || ""}
        width={960}
        height={540}
        className="w-full h-auto"
        sizes="(max-width: 960px) 100vw, 960px"
      />
    </span>
  );
}

function InlineCode({ children }: { children?: ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded bg-bg-elevated text-accent text-sm font-mono">
      {children}
    </code>
  );
}

function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre className="my-4 p-4 rounded-lg bg-bg-card border border-border/60 overflow-x-auto text-sm font-mono text-text-secondary" {...props}>
      {children}
    </pre>
  );
}

function UnorderedList({ children }: { children?: ReactNode }) {
  return <ul className="list-disc list-inside my-3 space-y-1 text-text-secondary">{children}</ul>;
}

function OrderedList({ children }: { children?: ReactNode }) {
  return <ol className="list-decimal list-inside my-3 space-y-1 text-text-secondary">{children}</ol>;
}

function ListItem({ children }: { children?: ReactNode }) {
  return <li className="text-[15px] leading-relaxed">{children}</li>;
}

function Blockquote({ children }: { children?: ReactNode }) {
  return (
    <blockquote className="my-4 pl-4 border-l border-accent/40 text-text-secondary italic">
      {children}
    </blockquote>
  );
}

function HorizontalRule() {
  return <hr className="my-8 border-border/60" />;
}

function Strong({ children }: { children?: ReactNode }) {
  return <strong className="font-medium text-text-primary">{children}</strong>;
}

const components = {
  h1: createHeading(1) as any,
  h2: createHeading(2) as any,
  h3: createHeading(3) as any,
  h4: createHeading(4) as any,
  h5: createHeading(5) as any,
  h6: createHeading(6) as any,
  p: Paragraph as any,
  a: CustomLink as any,
  img: MdxImage as any,
  code: InlineCode as any,
  pre: Pre as any,
  ul: UnorderedList as any,
  ol: OrderedList as any,
  li: ListItem as any,
  blockquote: Blockquote as any,
  hr: HorizontalRule as any,
  strong: Strong as any,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  );
}
