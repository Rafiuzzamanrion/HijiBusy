"use client";
import LoadingButton from "@/components/LoadingButton";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createAboutUs } from "@/controls/postImageAndVIdeo/createImageAndVideo";
import Technology from "./Technology";
const PostAboutUs = () => {
  const formRef = useRef(null);
  const handlePost = async (formData) => {
    const res = await createAboutUs(formData);
    if (res.status) {
      toast.success("ABoutUs  has been posted successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      toast.error("AboutUs has not been posted!");
    }
  };
  return (
    <div>
      <div>
        <Toaster />
        <form
          action={handlePost}
          ref={formRef}
          className="space-y-5 w-full bg-base-100 shadow-xl p-8"
        >
          <div className="md:flex justify-between flex-row gap-20 w-full"></div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Who we are</span>
            </div>
            <textarea
              required
              name="whoWeAre"
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Why us</span>
            </div>
            <textarea
              required
              name="whyUs"
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Years in business</span>
            </div>
            <textarea
              required
              name="yearsInBusiness"
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Mission</span>
            </div>
            <textarea
              required
              name="mission"
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Vision</span>
            </div>
            <textarea
              required
              name="vision"
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Values</span>
            </div>
            <textarea
              required
              name="values"
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Our technology</span>
            </div>
            <textarea
              required
              name="ourTechnology"
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
          </label>

          <div className="flex justify-end">
            <LoadingButton title={"Post"} loadingTitle={"Posting"} />
          </div>
        </form>
        <Technology />
      </div>
    </div>
  );
};

export default PostAboutUs;