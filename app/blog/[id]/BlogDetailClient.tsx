"use client";
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Avatar, AvatarFallback } from "@components/avatar";
import { Button } from "@components/button";
import { Dialog, DialogContent, DialogTitle } from "@components/dialog";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import { ScrollArea } from "@components/scrollArea";
import type { BlogDetail } from "@typedefs/blog";

const AVATAR_COLORS = ["bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-orange-500", "bg-pink-500", "bg-cyan-500"];

function getAuthorInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function getAvatarColor(name: string) {
  const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

function formatDetailDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

interface BlogDetailClientProps {
  blog: BlogDetail;
}

export function BlogDetailClient({ blog }: BlogDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const allImages = blog.images?.length ? blog.images : [];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setSelectedImageIndex(null);
  }, []);

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (selectedImageIndex === null || allImages.length === 0) {
        return;
      }
      if (direction === "prev") {
        setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : allImages.length - 1);
      } else {
        setSelectedImageIndex(selectedImageIndex < allImages.length - 1 ? selectedImageIndex + 1 : 0);
      }
    },
    [selectedImageIndex, allImages.length]
  );

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, navigateImage, closeLightbox]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <ScrollArea className="flex-1">
        <div className="p-6 lg:p-8 max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-foreground hover:bg-muted/50 -ml-4"
            asChild
          >
            <Link href="/blog">
              <ArrowLeft className="size-4 mr-2" />
              Back to Blogs
            </Link>
          </Button>

          <article className="space-y-8">
            <header className="space-y-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="size-4" />
                <time dateTime={blog.createdAt}>{formatDetailDate(blog.createdAt)}</time>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">{blog.title}</h1>

              <div className="space-y-3">
                <span className="text-sm text-muted-foreground">Posted by</span>
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarFallback className={`text-sm text-white ${getAvatarColor(blog.authorName)}`}>
                      {getAuthorInitials(blog.authorName)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{blog.authorName}</p>
                    {blog.user && (
                      <p className="text-sm text-muted-foreground">
                        {blog.user.firstName} {blog.user.lastName}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </header>

            <div className="border-t border-border pt-8" />

            {blog.blogImage && (
              <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
                <Image
                  src={blog.blogImage}
                  alt={blog.title}
                  fill
                  draggable={false}
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>
            )}

            {blog.body && (
              <div className="prose prose-invert max-w-none text-foreground/90 leading-relaxed dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.body}</ReactMarkdown>
              </div>
            )}

            {allImages.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allImages.map((imageUrl, index) => (
                    <button
                      type="button"
                      key={index}
                      className="relative aspect-square cursor-pointer group rounded-lg overflow-hidden border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={imageUrl}
                        alt={`${blog.title} - Image ${index + 1}`}
                        fill
                        draggable={false}
                        className="object-cover group-hover:opacity-90 transition-opacity"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
              <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none" showCloseButton={false}>
                <DialogTitle className="sr-only">
                  {selectedImageIndex !== null && allImages.length > 0
                    ? `${blog.title} — Image ${selectedImageIndex + 1} of ${allImages.length}`
                    : "Image gallery"}
                </DialogTitle>
                {selectedImageIndex !== null && allImages[selectedImageIndex] && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                      onClick={closeLightbox}
                    >
                      <X className="size-6" />
                    </Button>

                    {allImages.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-4 z-50 text-white hover:bg-white/20"
                          onClick={() => navigateImage("prev")}
                        >
                          <ChevronLeft className="size-8" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-4 z-50 text-white hover:bg-white/20"
                          onClick={() => navigateImage("next")}
                        >
                          <ChevronRight className="size-8" />
                        </Button>
                      </>
                    )}

                    <div className="relative w-full h-full min-h-0">
                      <Image
                        src={allImages[selectedImageIndex]}
                        alt={`${blog.title} - Image ${selectedImageIndex + 1}`}
                        fill
                        draggable={false}
                        className="object-contain"
                        sizes="100vw"
                      />
                    </div>

                    {allImages.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded">
                        {selectedImageIndex + 1} / {allImages.length}
                      </div>
                    )}
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </article>
        </div>
      </ScrollArea>
      <Footer />
    </div>
  );
}
