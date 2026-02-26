import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Avatar, AvatarFallback } from "@components/avatar";
import { Button } from "@components/button";
import { Card, CardContent } from "@components/card";
import { ScrollArea } from "@components/scrollArea";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import { getBlogsService } from "@services/blogService";

const getAuthorInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const getAvatarColor = (name: string) => {
  const colors = ["bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-orange-500", "bg-pink-500", "bg-cyan-500"];
  const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

async function BlogList() {
  const response = await getBlogsService("PUBLISHED");
  const blogs = response.success && response.data ? response.data : [];
  if (blogs.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-muted-foreground">
        No blogs available at the moment.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          className="border border-border hover:border-primary/50 transition-colors duration-300 hover:shadow-xl group bg-card overflow-hidden p-0"
        >
          <Link href={`/blog/${blog.id}`} className="block h-full">
            {blog.blogImage && (
              <div className="relative w-full h-48 overflow-hidden bg-muted">
                <Image
                  src={blog.blogImage}
                  alt={blog.title}
                  fill
                  draggable={false}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
            )}
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                <Avatar className="w-8 h-8 border-2 border-card">
                  <AvatarFallback className={`text-xs text-white ${getAvatarColor(blog.authorName)}`}>
                    {getAuthorInitials(blog.authorName)}
                  </AvatarFallback>
                </Avatar>
              </div>

              <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {blog.title}
              </h2>

              <p className="text-muted-foreground text-sm line-clamp-3">{blog.summary}</p>

              <Button
                variant="ghost"
                className="w-full mt-4 border border-border/50 hover:bg-muted/50 hover:border-primary/30 transition-all"
                asChild
              >
                <span>Read More</span>
              </Button>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default function BlogDashboard() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <ScrollArea className="flex-1">
        <div className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">The latest Cazza news</h1>
            <p className="text-muted-foreground text-base max-w-2xl">
              Stay updated with the latest features, tips, and insights for e-commerce sellers and accountants.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="w-8 h-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              </div>
            }
          >
            <BlogList />
          </Suspense>
        </div>
      </ScrollArea>
      <Footer />
    </div>
  );
}
