import { useCustomer } from "@/api/hooks/useCustomer.hook";
import React, { useState } from "react";

const CustomerDetails: React.FC = () => {
  const [customerId, setCustomerId] = useState<string>(""); // Input value
  const [submittedCustomerId, setSubmittedCustomerId] = useState<string>(""); // Value used for querying

  // Query will only trigger when submittedCustomerId changes (on form submit)
  const { data, error, isLoading } = useCustomer(submittedCustomerId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedCustomerId(customerId); // Update the ID for fetching
  };

  return (
    <div>
      <h1>Customer Details</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)} // Update input state
          placeholder="Enter customer ID"
        />
        <button type="submit">Fetch Customer</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching customer: {error.message}</p>}

      {data && (
        <div>
          <h1>{data.id}</h1>
          <h2>
            {data.firstName} {data.lastName}
          </h2>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
