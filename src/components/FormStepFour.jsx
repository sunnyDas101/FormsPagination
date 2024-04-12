import React, { useState } from "react";
import { TbTallymark4 } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";

const FormStepFour = ({ onPrev, formData, setFormData, setCurrentPage }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setFormData({ ...formData, projectManagement: option });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.projectManagement) {
      errors.projectName = "Project Management is required";
    }
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
    } else {
      console.log("Form Data:", formData);
      localStorage.setItem("formData", JSON.stringify(formData));

      setFormData({
        projectName: "",
        client: "",
        startDate: "",
        endDate: "",
        notes: "",
        projectType: "",
        hourlyRate: "",
        budget: "",
        budgetReset: false,
        emailAlerts: false,
        viewType: "",
        projectManagement: "",
      });
      setCurrentPage(1);
    }
  };

  return (
    <div>
      <span className="absolute top-0 right-0 p-2 cursor-pointer">
        <IoIosClose className="text-3xl text-gray-500" />
      </span>
      <div className="text-center pt-[40px] text-2xl font-bold">
        Who can manage projects
      </div>
      <p className="text-center text-gray-500 text-sm pt-2">
        Don't panic - You can also customize this type in settings
      </p>

      <div className="flex flex-col gap-3 p-[35px] pt-6 pb-[10px]">
        <div
          className={`border border-gray-300 rounded-md h-[100px] px-[70px] relative border-focus-blue ${
            selectedOption === "everyone" ? "border-blue-400" : ""
          }`}
          onClick={() => handleOptionSelect("everyone")}
        >
          <TbTallymark4 className="absolute left-3 bottom-8 text-4xl text-gray-500" />
          <button className="flex flex-col justify-center w-full h-full text-lg font-[600] text-gray-600">
            {" "}
            Everyone
            <span className="text-start text-sm text-gray-500 font-normal">
              All users can now to see it, but guests cannot access the projects
            </span>
          </button>
        </div>

        <div
          className={`border border-gray-300 rounded-md h-[100px] px-[70px] relative border-focus-blue ${
            selectedOption === "admins" ? "border-blue-400" : ""
          }`}
          onClick={() => handleOptionSelect("admins")}
        >
          <RiAdminLine className="absolute left-3 bottom-8 text-4xl text-gray-500" />
          <button className="flex flex-col justify-center w-full h-full text-lg font-[600] text-gray-600">
            {" "}
            Only Admin's
            <span className="text-sm text-gray-500 font-normal flex-wrap">
              Only admins can manage everything
            </span>
          </button>
        </div>

        <div
          className={`border border-gray-300 rounded-md h-[100px] px-[70px] relative border-focus-blue ${
            selectedOption === "specificPeople" ? "border-blue-400" : ""
          }`}
          onClick={() => handleOptionSelect("specificPeople")}
        >
          <SlPeople className="absolute left-3 bottom-8 text-4xl text-gray-500" />
          <button className="flex flex-col justify-center w-full h-full text-lg font-[600] text-gray-600">
            {" "}
            Only to Specific people
            <span className="text-sm text-gray-500 font-normal">
              Only some specific people can able to see it
            </span>
          </button>
        </div>
        <div className="flex w-fit mt-[85px]">
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormStepFour;
