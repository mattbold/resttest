import { useQuery } from "@tanstack/react-query";
import { fetchCustomerById } from "../api-client";

export const useCustomer = (id: string) => {
  return useQuery({
    queryKey: ["customer", id],  // The query key, uniquely identifies the query
    queryFn: () => fetchCustomerById(id), // The function to fetch data
    enabled: !!id, // Ensure query runs only if ID is provided
    staleTime: 1000 * 60 * 5, // 5 minutes, data will be considered fresh for 5 minutes
  });
};

