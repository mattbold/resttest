import createClient from "openapi-fetch";
import type { components, paths } from "../types/api-types"; // Import your OpenAPI-generated types

const client = createClient<paths>({
  baseUrl: "http://localhost:8000", // Your API base URL
});

type CustomerDTO = components['schemas']['CustomerDTO'];

export const fetchCustomerById = async (id: string): Promise<CustomerDTO | undefined> => {
  const { data, error } = await client.GET("/customer/{id}", {
    params: {
      path: { id }, // Passing the customer ID in the path parameters
    },
  });

  if (error) {
    throw new Error(`Error fetching customer: ${error}`);
  }

  return data;
};