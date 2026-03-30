import { siteUrl } from "@/config/site";
import { HttpRequest } from "@/utils/request";

const appHttpRequest = new HttpRequest(null, `${siteUrl}/media`);

export const  imageUpload = async (file: FormData) => {
  const res = await appHttpRequest.upload("/image", file);
  return res;
};
export const  pdfUpload = async (file: FormData) => {
  const res = await appHttpRequest.upload("/pdf", file);
  return res;
};

export const deleteImage= async (id: string) => {
  const res= await appHttpRequest.del("/image/"+id);
  return res;
}
