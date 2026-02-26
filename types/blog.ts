export interface Blog {
  id: string;
  title: string;
  summary: string;
  blogImage: string | null;
  images: string[];
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  authorName: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface GetBlogsResponse {
  success: boolean;
  message: string;
  data: Blog[];
}
