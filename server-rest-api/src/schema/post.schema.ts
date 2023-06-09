import { object, string } from "yup";

export const createPostSchema = object({
  body: object({
    title: string().required("Title is required"),
    content: string().required("Content is required"),
  }),
});
