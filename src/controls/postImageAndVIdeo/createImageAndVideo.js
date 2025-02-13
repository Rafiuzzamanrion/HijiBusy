"use server";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";
import { uploadFile } from "../uploadFile/uploadFile";
const prisma = new PrismaClient();

export const createBg1 = async (formData) => {
  const title = formData.get("title");
  const details = formData.get("details");
  const imageFile = formData.get("image");
  const imageUrl = await uploadFile(imageFile);

  try {
    await prisma.bg1.create({
      data: {
        title,
        details,
        image: imageUrl,
      },
    });
    return { status: "Background image 1 created successfully" };
  } catch (error) {
    return { error: "failed to created Background image 1" };
  } finally {
    revalidatePath("/");
  }
};

export const createBg2 = async (formData) => {
  const imageFile = formData.get("image");
  const imageUrl = await uploadFile(imageFile);
  try {
    await prisma.bg2.create({
      data: {
        image: imageUrl,
      },
    });
    return { status: "Background image 2 created successfully" };
  } catch (error) {
    return { error: "failed to created background image 2" };
  } finally {
    revalidatePath("/");
  }
};

export const createPartnerImage = async (formData) => {
  const imageFile = formData.get("image");
  const link = formData.get("link");
  const imageUrl = await uploadFile(imageFile);
  try {
    await prisma.partners.create({
      data: {
        link,
        image: imageUrl,
      },
    });
    return { status: "Partner image created successfully" };
  } catch (error) {
    return { error: "failed to created Partner image" };
  } finally {
    revalidatePath("/");
  }
};

export const createVideo = async (formData) => {
  const imageFile = formData.get("video");
  const videoUrl = await uploadFile(imageFile);
  console.log(videoUrl);
  try {
    await prisma.video.create({
      data: {
        video: videoUrl,
      },
    });
    return { status: "Video created successfully" };
  } catch (error) {
    return { error: "failed to created Video" };
  } finally {
    revalidatePath("/about");
  }
};
export const createExperience = async (formData) => {
  const title = formData.get("title");
  const details = formData.get("details");
  const imageFile = formData.get("image");
  const imageUrl = await uploadFile(imageFile);

  try {
    await prisma.experience.create({
      data: {
        title,
        details,
        image: imageUrl,
      },
    });
    return { status: "experience created successfully" };
  } catch (error) {
    return { error: "failed to create experience" };
  } finally {
    revalidatePath("/");
  }
};
export const createTechnology = async (formData) => {
  const name = formData.get("name");
  const categoryId = parseInt(formData.get("categoryId"), 10);
  const imageFile = formData.get("image");
  const imageUrl = await uploadFile(imageFile);

  try {
    await prisma.technology.create({
      data: {
        name,
        categoryId,
        image: imageUrl,
      },
    });
    return { status: "technology created successfully" };
  } catch (error) {
    return { error: "failed to create technology" };
  } finally {
    revalidatePath("/about");
  }
};
export const createAboutUs = async (formData) => {
  const whoWeAre = formData.get("whoWeAre");
  const whyUs = formData.get("whyUs");
  const yearsInBusiness = formData.get("yearsInBusiness");
  const mission = formData.get("mission");
  const vision = formData.get("vision");
  const values = formData.get("values");
  const ourTechnology = formData.get("ourTechnology");
  const completedProject = formData.get("completedProject");
  const customerSatisfaction = formData.get("customerSatisfaction");
  const raisedByClient = formData.get("raisedByClient");
  const years = formData.get("years");

  try {
    await prisma.aboutUs.create({
      data: {
        whoWeAre,
        whyUs,
        completedProject,
        customerSatisfaction,
        years,
        raisedByClient,
        yearsInBusiness,
        mission,
        vision,
        values,
        ourTechnology,
      },
    });
    return { status: "About us created successfully" };
  } catch (error) {
    return { error: "failed to create aboutUs" };
  } finally {
    revalidatePath("/about");
  }
};
export const createTechnologyName = async (formData) => {
  const name1 = formData.get("name1");
  const name2 = formData.get("name2");
  const name3 = formData.get("name3");

  try {
    await prisma.technologyName.create({
      data: {
        name1,
        name2,
        name3,
      },
    });
    return { status: "technology created successfully" };
  } catch (error) {
    return { error: "failed to create technology" };
  } finally {
    revalidatePath("/about");
  }
};
