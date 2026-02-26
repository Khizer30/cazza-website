import type { GetBlogDetailResponse, GetBlogsResponse } from "@typedefs/blog";

const getBaseUrl = () => (process.env.BACKEND_URL ?? "").replace(/\/$/, "");

export const getBlogsService = async (
  status?: "DRAFT" | "PUBLISHED" | "ARCHIVED",
  fetchOptions?: RequestInit
): Promise<GetBlogsResponse> => {
  try {
    const url = new URL(`${getBaseUrl()}/blogs`);
    if (status) {
      url.searchParams.set("status", status);
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      ...fetchOptions
    });

    if (!response.ok) {
      const message = (await response.json().catch(() => ({})))?.message ?? response.statusText;
      return {
        success: false,
        message: message ?? "Unknown error occurred",
        data: []
      };
    }

    const data: GetBlogsResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred",
      data: []
    };
  }
};

export const getBlogDetailService = async (id: string): Promise<GetBlogDetailResponse> => {
  try {
    const url = `${getBaseUrl()}/blogs/${id}`;
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      const message = body?.message ?? response.statusText;
      return {
        success: false,
        message: message ?? "Unknown error occurred",
        data: null
      };
    }

    const data: GetBlogDetailResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred",
      data: null
    };
  }
};
