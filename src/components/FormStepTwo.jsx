import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const FormStepTwo = ({ onNext, onPrev, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <span className="absolute top-0 right-0 p-2 cursor-pointer">
        <IoIosClose className="text-3xl text-gray-500" />
      </span>
      <div className="text-center pt-[40px] text-2xl font-bold">
        Project type
      </div>
      <p className="text-center text-gray-500 text-sm pt-2">
        Don't panic - You can also customize this type in settings
      </p>
      <form className="flex  flex-col gap-3 p-[35px] pt-6 pb-[10px]">
        <div className="flex my-2 border border-gray-300 rounded-md">
          <button type="button" className="flex-1 text-center text-sm text-gray-500 border-r border-gray-300 rounded-l-md py-2 cursor-pointer hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"  onClick={() => setFormData((prevData) => ({ ...prevData, projectType: "Time & Materials" }))}>
            Time & Materials
          </button>
          <button type="button" className="flex-1 text-center text-sm text-gray-500 border-r border-gray-300 py-2 cursor-pointer hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white" onClick={() => setFormData((prevData) => ({ ...prevData, projectType: "Fixed Fee" }))}>
            Fixed Fee
          </button>
          <button type="button" className="flex-1 text-center text-sm text-gray-500 border-r border-gray-300 rounded-r-md py-2 cursor-pointer hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white" onClick={() => setFormData((prevData) => ({ ...prevData, projectType: "Non-Billable" }))}>
            Non-Billable
          </button>
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="hourlyRate">Hourly</label>
          <p className="text-gray-500 text-sm mb-3">
            We need hourly rates to track your project's billable amount
          </p>
          <div className="flex gap-3 items-start justify-start relative  w-[350px]">
            <select
              name="hourlyRate"
              id="hourlyRate"
              value={formData.hourlyRate}
              onChange={handleChange}
              className="appearance-none border-1 border-gray-300 px-4 h-[35px] rounded-md text-gray-500 text-sm w-full cursor-pointer"
            >
              <option value="">Project Hourly Rate</option>
              <option value="500">₹500 per hour</option>
              <option value="1000">₹1000 per hour</option>
              <option value="1500">₹1500 per hour</option>
              <option value="2000">₹2000 per hour</option>
              <option value="2500">₹2500 per hour</option>
            </select>

            <span className="absolute inset-y-0 right-[112px] flex items-center pr-3 pointer-events-none">
              <FaRupeeSign className="text-gray-400 text-[12px]" />
            </span>

            <input
              type="number"
              name="hourlyRate"
              placeholder="Enter amount"
              value={formData.hourlyRate}
              onChange={handleChange}
              className="border border-gray-300 px-4 pl-6 h-[35px] rounded-md text-gray-500 text-sm w-[70%]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="dates">Budget</label>
          <p className="text-gray-500 text-sm mb-3">
            We need hourly rates to track your project's billable amount
          </p>
          <div className="flex gap-3 items-start justify-start relative  w-[190px]">
            <select
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              className="appearance-none border-1 border-gray-300 px-4 h-[35px] rounded-md text-gray-500 text-sm w-full cursor-pointer"
            >
              <option value="">Hours per Person</option>
              <option value="500">₹500 per hour</option>
              <option value="1000">₹1000 per hour</option>
              <option value="1500">₹1500 per hour</option>
              <option value="2000">₹2000 per hour</option>
              <option value="2500">₹2500 per hour</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="budgetReset"
              name="budgetReset"
              checked={formData.budgetReset}
              onChange={handleChange}
              className=" border-2 border-gray-400 rounded-sm focus:outline-none cursor-pointer"
            />
            <label htmlFor="budget" className="text-gray-500 text-sm">
              Budget resets every month
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="emailAlerts"
              name="emailAlerts"
              checked={formData.emailAlerts}
              onChange={handleChange}
              className="border-2 border-gray-400 rounded-sm cursor-pointer"
            />
            <label htmlFor="emailAlerts" className="text-gray-500 text-sm">
              Send email alerts if project excessds{" "}
              <span className="border border-gray-300 rounded-md px-2 py-2">
                80.00
              </span>{" "}
              % of budget
            </label>
          </div>
        </div>

        <div className="flex mt-[54px] w-fit">
          <button
            type="button"
            className="flex items-center justify-center gap-1 text-[13px] font-medium text-gray-500 pr-[140px]"
            onClick={onPrev}
          >
            <IoIosArrowBack style={{ fontSize: "0.8rem" }} /> Back
          </button>
          <button
            type="submit"
            onClick={onNext}
            className="items-center justify-center bg-blue-500 text-white rounded-md h-[40px] px-7"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStepTwo;