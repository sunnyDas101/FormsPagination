import React from "react";
import { CiViewBoard } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";

const FormStepThree = ({ onNext, onPrev, formData, setFormData }) => {
  const handleViewSelect = (viewType) => {
    setFormData({ ...formData, viewType: viewType });
  };

  const handleNext = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.viewType) {
      errors.projectName = "View Type is required";
    }
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
    } else {
      onNext();
    }
  };

  return (
    <div>
      <span className="absolute top-0 right-0 p-2 cursor-pointer">
        <IoIosClose className="text-3xl text-gray-500" />
      </span>
      <div className="text-center pt-[40px] text-2xl font-bold">
        Select a view
      </div>
      <p className="text-center text-gray-500 text-sm pt-2">
        You can also customize this views in settings
      </p>
      <div className="flex flex-col gap-3 p-[35px] pb-[10px]">
        <div className="flex gap-8">
          <div className="flex flex-col flex-1">
            <button
              id="listBtn"
              name="list"
              className="flex items-center  justify-center border-2 border-gray-300 h-[140px] rounded-md focus:border-blue-400"
              onClick={() => handleViewSelect("list")}
            >
              <CiViewList style={{ fontSize: "6rem", color: "gray" }} />
            </button>
            <label htmlFor="list" className="text-center text-gray-400 mt-2">
              List
            </label>
          </div>

          <div className="flex flex-col flex-1">
            <button
              id="listBtn"
              name="list"
              className="flex items-center  justify-center border-2 border-gray-300 h-[140px] rounded-md focus:border-blue-400"
              onClick={() => handleViewSelect("board")}
            >
              <CiViewBoard style={{ fontSize: "6rem", color: "gray" }} />
            </button>
            <label htmlFor="list" className="text-center text-gray-400 mt-2">
              Board
            </label>
          </div>
        </div>

        <div className="flex w-fit mt-[226px]">
          <button
            type="button"
            className="flex items-center justify-center gap-1 text-[13px] font-medium text-gray-500 pr-[140px]"
            onClick={onPrev}
          >
            <IoIosArrowBack style={{ fontSize: "0.8rem" }} /> Back
          </button>
          <button
            type="submit"
            className="items-center justify-center bg-blue-500 text-white rounded-md h-[40px] px-7"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormStepThree;
