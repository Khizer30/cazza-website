export const ENDPOINTS = {
  auth: {
    check: "/api/auth/check"
  },
  blogs: {
    getAll: "/blogs",
    getById: (blogId: string) => `/blogs/${blogId}`
  }
};
