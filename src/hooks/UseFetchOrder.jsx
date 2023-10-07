import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { api } from "../lib/api";

export default function useFetchOrder({ onSuccess }) {
  return useMutation({
    mutationFn: async (numberDO) => {
      const detail = await api.get(`/tracking-logistic/${numberDO}`);
      return detail;
    },
    onSuccess,
  });
}
