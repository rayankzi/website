import { Link } from "next-view-transitions";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogPosts } from "@/lib/new-data";

export const metadata = {
  title: "Blog",
};

export default function NewBlogPage() {
  return (
    <section className="flex flex-col gap-6 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-foreground">Blog</h1>
        <p className="text-muted-foreground">
          Writing on software, learning, and the things I am building.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {blogPosts.map((post) => (
          <Card key={post.title} className="rounded-lg">
            <CardHeader>
              <CardTitle>
                <Link
                  href={post.url}
                  className="underline-offset-4 hover:underline"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>
                {post.date} · {post.readTime}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {post.excerpt}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
