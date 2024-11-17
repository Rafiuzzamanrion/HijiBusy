"use client";

import LoadingButton from "@/components/LoadingButton";
import { createTechnology } from "@/controls/postImageAndVIdeo/createImageAndVideo";
import { useRef } from "react";

const Technology = () => {
  const formRef = useRef(null);
  const handlePost = async (formData) => {
    const res = await createTechnology(formData);
    if (res.status) {
      toast.success("technology  has been posted successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      toast.error("technology has not been posted!");
    }
  };

  return (
    <div className="my-10 mx-10">
        <h1 className="my-5 text-center text-3xl">Post Technology</h1>
      <form ref={formRef} action={handlePost}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            required
            name="name"
            type="text"
            placeholder="type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <input
            required
            name="category"
            type="text"
            placeholder="type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Pick an image (maximum file size 5MB)
            </span>
          </div>
          <input
            required
            name="image"
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>
        <div className="flex justify-end">
          <LoadingButton title={"Post"} loadingTitle={"Posting"} />
        </div>
      </form>
    </div>
  );
};

export default Technology;