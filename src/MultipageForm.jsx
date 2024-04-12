import React, { useState } from 'react';

const Form1 = () => {
  return (
    <div>
      <h2>Form 1</h2>
      {/* Your form fields */}
    </div>
  );
};

const Form2 = () => {
  return (
    <div>
      <h2>Form 2</h2>
      {/* Your form fields */}
    </div>
  );
};

const Form3 = () => {
  return (
    <div>
      <h2>Form 3</h2>
      {/* Your form fields */}
    </div>
  );
};

const PaginationDots = ({ totalPages, currentPage, setCurrentPage }) => {
  const dots = [];
  for (let i = 1; i <= totalPages; i++) {
    dots.push(
      <span
        key={i}
        onClick={() => setCurrentPage(i)}
        style={{
          cursor: 'pointer',
          fontWeight: i === currentPage ? 'bold' : 'normal',
        }}
      >
        {i}
      </span>
    );
  }
  return <div>{dots}</div>;
};

const MultiStepForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Total number of forms

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {currentPage === 1 && <Form1 />}
      {currentPage === 2 && <Form2 />}
      {currentPage === 3 && <Form3 />}

      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <PaginationDots
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MultiStepForm;
