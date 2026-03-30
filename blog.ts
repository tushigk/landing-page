import { siteUrl } from "@/config/site";
import { HttpRequest } from "@/utils/request";

const appHttpRequest = new HttpRequest(null, `${siteUrl}/blogs`);

export type BlogListItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

export type BlogsResponse = {
  data: BlogListItem[];
  total: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
};

export type FeaturedSlide = {
  id: string;
  image: string;
  title: string;
  description: string;
  images: string[];
};

export const getBlogs = async ({
  page = 1,
  limit = 10,
  search = "",
  lang = "mn",
}: {
  page?: number;
  limit?: number;
  search?: string;
  lang?: "mn" | "en";
}): Promise<BlogsResponse> => {
  const res = await appHttpRequest.get<BlogsResponse>("", {
    page,
    limit,
    search,
    lang,
  });
  return res;
};

export const getBlog = async ({ id }: { id: string }) => {
  const res = await appHttpRequest.get(`/${id}`);
  return res;
};

export const getFeaturedBlogs = async ({
  limit = 5,
  lang = "mn",
}: {
  limit?: number;
  lang?: "mn" | "en";
}): Promise<FeaturedSlide[]> => {
  const res = await appHttpRequest.get<FeaturedSlide[]>("/featured", {
    limit,
    lang,
  });
  return res;
};

