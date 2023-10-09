import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export default function FetchOrder({ onSuccess, onError }) {
  return useMutation({
    mutationFn: async (numberDO) => {
      const detail = await api.get(`/tracking-logistic/${numberDO}`);
      return detail;
    },
    onSuccess,
    onError,
  });
}
