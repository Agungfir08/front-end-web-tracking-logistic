import { useMutation } from '@tanstack/react-query';
import { api } from '../lib/api';

export default function PostForgetCodeWhatsapp({ onSuccess, onError }) {
  return useMutation({
    mutationFn: async (body) => {
      const input = await api.post(`/send-access-code/whatsapp`, body);
      return input;
    },
    onSuccess,
    onError,
  });
}
