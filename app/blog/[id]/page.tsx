import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlogDetailClient } from "./BlogDetailClient";
import { Button } from "@components/button";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import { getBlogDetailService } from "@services/blogService";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;

  const response = await getBlogDetailService(id);

  if (!response.success || !response.data) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Blog Post Not Found</h1>
            <p className="text-muted-foreground">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Button asChild>
              <Link href="/blog">
                <ArrowLeft className="size-4 mr-2" />
                Back to Blogs
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return <BlogDetailClient blog={response.data} />;
}
