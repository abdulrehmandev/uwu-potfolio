import React from "react";
import { AnimateSection } from "../animate-section";
import { Container } from "../layout";
import { fetchBlogs } from "@/lib/fetch-blogs";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  tag_list: string[];
  cover_image: string | null;
}

export default async function Blogs() {
  const blogs: Blog[] = await fetchBlogs("amina_taariq");

  return (
    <AnimateSection>
      <Container className="py-16 relative">
        <Image
          src="/images/cat-looking-over.png"
          alt="Cat looking over"
          height={200}
          width={140}
          className="absolute -left-36 top-32"
        />
        <h2 className="font-medium text-3xl mb-6">Blogs</h2>
        <div className="grid gap-3 md:gap-4 md:grid-cols-2">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => (
              <Link
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border bg-card rounded-lg hover:shadow-lg transition"
              >
                <h3 className="font-medium text-card-foreground text-xl mb-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground mb-2">{blog.description}</p>
                <span className="text-sm text-muted-foreground/70">
                  {new Date(blog.published_at).toLocaleDateString()}
                </span>
              </Link>
            ))
          ) : (
            <p>No blogs found.</p>
          )}
        </div>
      </Container>
    </AnimateSection>
  );
}
