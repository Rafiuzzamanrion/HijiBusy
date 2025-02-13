"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import {uploadFile} from "../uploadFile/uploadFile";

const prisma = new PrismaClient();
export const service = async (formData) => {
  const name = formData.get("name");
  const line1 = formData.get("line1");
  const line2 = formData.get("line2");
  const line3 = formData.get("line3");
  const description = formData.get("description");
  const scope = formData.get("scope");
  const imageFile = formData.get("image");
  const pdfFile = formData.get("pdf");
  const image = await uploadFile(imageFile);
  const pdf = await uploadFile(pdfFile);
  console.log(image, pdf);
  try {
    await prisma.services.create({
      data: {
        name,
        line1,
        line2,
        line3,
        description,
        scope,
        image,
        pdf,
      },
    });
    return { status: "deleted successfully" };
  } catch (error) {
    return { error: "could not delete" };
  } finally {
    revalidatePath("admin/postService");
  }
};
