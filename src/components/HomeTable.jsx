"use client";
import Image from "next/image";
import React from "react";
import { downloadExcel } from "../utils/download";
import { deleteHomeContactMessage } from "@/controls/delete/delete";
import toast, { Toaster } from "react-hot-toast";

const HomeTable = ({ homeData }) => {
  const handleDownload = (id) => {
    const type = 'homeContact'
    downloadExcel(id,type);
  };
  const handleDelete = async (id) => {
    const res = await deleteHomeContactMessage(id)
    if (res.status) {
      toast.success("Contact Message has been Deleted successfully!");
    }
    if (res.error) {
      toast.error("Contact Message has not been Deleted!");
    }
  }

  return (
    <div>
      <Toaster/>
      <div>
        <h1 className="text-center text-main text-2xl my-5">
          From Home contact
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Interested In</th>
                <th>Delete</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {homeData?.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <h1 className="font-bold">
                        {item.firstname} {item.lastname}
                      </h1>
                    </div>
                  </td>
                  <td>
                    <h1>{item.email}</h1>
                  </td>
                  <td>
                    <h1>{item.country}</h1>
                  </td>
                  <td>
                    <h1>{item.interested}</h1>
                  </td>
                  <th>
                  <button onClick={()=> handleDelete(item?.id)} className="btn bg-[#ff0000]  text-white hover:text-black hover:bg-[#be2d2d] btn-xs">
                    Delete
                  </button>
                </th>
                  <th>
                    <button
                      onClick={() => handleDownload(item.id)}
                      className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main text-white hover:text-black btn-xs"
                    >
                      Download
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeTable;
