import React, { useState } from "react";
import FormStepOne from "./components/FormStepOne";
import FormStepTwo from "./components/FormStepTwo";
import FormStepThree from "./components/FormStepThree";
import FormStepFour from "./components/FormStepFour";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
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

  const [clients, setClients] = useState([
    "Select a Client...",
    "Client 1",
    "Client 2",
    "Client 3",
  ]);

  const addNewClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  const pageArr = [1, 2, 3, 4];

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
    <ToastContainer position="top-center" autoClose={2000} />
      <div className="bg-white w-[500px] h-auto mx-auto my-[30px] rounded-xl shadow-xl relative">
        {currentPage === 1 && (
          <FormStepOne
            onNext={nextPage}
            formData={formData}
            setFormData={setFormData}
            addNewClient={addNewClient}
            clients={clients}
          />
        )}
        {currentPage === 2 && (
          <FormStepTwo
            onNext={nextPage}
            onPrev={prevPage}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentPage === 3 && (
          <FormStepThree
            onNext={nextPage}
            onPrev={prevPage}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentPage === 4 && (
          <FormStepFour
            onPrev={prevPage}
            formData={formData}
            setFormData={setFormData}
            setCurrentPage={setCurrentPage}
          />
        )}
        <div className="pagination absolute right-[215px]">
          {pageArr.map((pageNumber) => (
            <span
              key={pageNumber}
              className={pageNumber === currentPage ? "active" : ""}
            >
              {pageNumber === currentPage ? "■" : "●"}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
