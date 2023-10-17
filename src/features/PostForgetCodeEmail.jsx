import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export default function PostForgetCodeEmail({ onSuccess, onError }) {
  return useMutation({
    mutationFn: async (body) => {
      const input = await api.post(`/send-access-code/email`, body);
      return input;
    },
    onSuccess,
    onError,
  });
}
