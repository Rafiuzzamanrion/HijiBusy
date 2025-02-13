"use client";

import LoadingButton from "@/components/LoadingButton";
import { getTechnologyCategories } from "@/controls/fetchData/fetchData";
import {
  createTechnology,
  createTechnologyName,
} from "@/controls/postImageAndVIdeo/createImageAndVideo";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CreateTechnologyCategory from "./CreateTechnologyCategory";
import DeleteTechnologyCategory from "./DeleteTechnologyCategory";

const Technology = () => {
  const formRef = useRef(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getTechnologyCategories();
      setCategories(categories);
    }
    fetchCategories();
  }, []);
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
  const handleTechnologyPost = async (formData) => {
    const res = await createTechnologyName(formData);
    if (res.status) {
      toast.success("technology name has been posted successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      toast.error("technology name has not been posted!");
    }
  };

  return (
    <div className="my-10 mx-10">
      <Toaster />

      <div className="flex flex-col items-center">
        <form
          action={handleTechnologyPost}
          ref={formRef}
          className="my-10 mx-5 lg:mx-10"
        >
          <h1 className="text-3xl my-5  text-center">
            Post our technology name(Inside Shape)
          </h1>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Technology Name 1(2 word Max)</span>
              </div>
              <input
                required
                name="name1"
                type="text"
                placeholder="type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Technology Name 2 (2 word Max)</span>
              </div>
              <input
                required
                name="name2"
                type="text"
                placeholder="type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Technology Name 3 (2 word Max)</span>
              </div>
              <input
                required
                name="name3"
                type="text"
                placeholder="type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className=" my-5">
            <LoadingButton position={'justify-center'} title={"Post"} loadingTitle={"Posting"} />
          </div>
        </form>
      </div>


      <CreateTechnologyCategory />
      <DeleteTechnologyCategory />
      <h1 className="my-5 text-center text-3xl">Post Technology(Bottom Tab)</h1>
      <div className=" flex flex-col justify-center items-center"><form ref={formRef} action={handlePost}>
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
            <span className="label-text">Select a Category</span>
          </div>
          <select
            name="categoryId"
            className="select select-bordered"
            required
          >
            <option disabled selected>
              Select a Technology category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
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
        <div className="flex justify-end my-5">
          <LoadingButton title={"Post"} loadingTitle={"Posting"} />
        </div>
      </form></div>

    </div>
  );
};

export default Technology;
