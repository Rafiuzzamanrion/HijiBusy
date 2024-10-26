"use client";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createCaseStudy } from "../../../controls/postToCaseStudy/postToCaseStudy";
const PostCaseStudy = () => {
  let formRef = useRef(null);
  const handlePost = async (formData) => {
    const res = await createCaseStudy(formData);
    if (res.status) {
      toast.success("CaseStudy has been posted successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      toast.error("CaseStudy has not been posted!");
    }
  };
  return (
    <div>
      <div>
        <Toaster />
        <div className="lg:mx-10 my-10">
          <h1 className="text-main text-3xl text-center my-2 uppercase">
            post CaseStudy data
          </h1>
          <form
            action={handlePost}
            ref={formRef}
            className="space-y-5 w-full bg-base-100 shadow-xl p-8"
          >
            <div className="md:flex justify-between flex-row gap-20 w-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">CaseStudy Name</span>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder="type service name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                name="description"
                className="textarea textarea-md textarea-bordered h-24"
                placeholder="Enter Your Message"
              ></textarea>
            </label>

            <div className="flex justify-end">
              <button
                type="submit"
                className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostCaseStudy;
