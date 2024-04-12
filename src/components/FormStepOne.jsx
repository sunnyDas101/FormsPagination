import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const FormStepOne = ({ onNext, formData, setFormData, addNewClient, clients }) => {
  const [showNewClientForm, setShowNewClientForm] = useState(false);
    const [newClientName, setNewClientName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (dateValue, name) => {
    setFormData({ ...formData, [name]: dateValue });
  };

  const handleAddNewClient = () => {
    setShowNewClientForm(true);
  };

  const handleNewClientNameChange = (e) => {
    setNewClientName(e.target.value);
  };

  const handleNewClientSubmit = (e) => {
    e.preventDefault();
    addNewClient(newClientName); 
    setShowNewClientForm(false);
  };


  return (
    <div>
      <span className="absolute top-0 right-0 p-2 cursor-pointer">
        <IoIosClose className="text-3xl text-gray-500" />
      </span>
      <div className="text-center pt-[40px] text-2xl font-bold">
        Create a project
      </div>
      <form className="flex  flex-col gap-3 p-[35px] pb-[10px]">
        <div className="flex flex-col gap-2">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Enter project name here"
            className="border-1 border-gray-300 rounded-md h-[35px] px-4 outline-none text-gray-500 placeholder:text-sm focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="client">Client</label>
          <div className="flex gap-3 items-center justify-center">
            <select
              name="client"
              id="client"
              value={formData.client}
              onChange={handleChange}
              className="flex-1 appearance-none border-1 border-gray-300 px-4 h-[35px] rounded-md text-gray-500 text-sm"
            >
               {clients.map((client) => (
                <option key={client} value={client}>
                  {client}
                </option>
              ))}
            </select>

            <span className="text-sm text-gray-500">Or</span>

            <button
              type="button"
              onClick={handleAddNewClient}
              className="flex flex-2 gap-2 items-center text-sm text-gray-500 border border-gray-300 rounded-md h-[35px] px-4"
            >
              <FaPlus style={{ fontSize: "0.7rem" }} /> New client
            </button>
          </div>
        </div>

        {showNewClientForm && (
          <div className="flex flex-col gap-2">
            <label htmlFor="newClientName">New Client Name</label>
            <input
              type="text"
              name="newClientName"
              value={newClientName}
              onChange={handleNewClientNameChange}
              placeholder="Enter new client name"
              className="border-1 border-gray-300 rounded-md h-[35px] px-4 outline-none text-gray-500 placeholder:text-sm focus:border-blue-400"
            />
            <button
              type="submit"
              onClick={handleNewClientSubmit}
              className="bg-blue-500 text-white rounded-md h-[40px] px-7"
            >
              Add Client
            </button>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="dates">Dates</label>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="date"
                name="dates"
                placeholder="Start date"
                value={formData.startDate}
                onChange={(e) => handleDateChange(e.target.value, "startDate")}
                className="text-sm border border-gray-300 rounded-md h-[35px] w-full pr-4 pl-10 text-gray-500"
              />
              <CiCalendar className="absolute left-3 top-1/3 transform -translate-y-1/4 w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
            <div className="flex-1 relative">
              <input
                type="date"
                name="dates"
                value={formData.endDate}
                onChange={(e) => handleDateChange(e.target.value, "endDate")}
                className="text-sm border border-gray-300 rounded-md h-[35px] w-full pr-4 pl-10 text-gray-500"
              />
              <CiCalendar className="absolute left-3 top-1/3 transform -translate-y-1/4 w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            cols="50"
            rows="5"
            placeholder="Optional"
            value={formData.notes}
            onChange={handleChange}
            className="border-1 border-gray-300 rounded-md placeholder:text-sm placeholder:text-gray-400 text-gray-500 px-4 resize-none"
          ></textarea>
        </div>

        <div className="flex mt-5 w-fit">
          <button
            type="button"
            className="flex items-center justify-center gap-1 text-[13px] font-medium text-gray-500 pr-[140px]"
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

export default FormStepOne;
