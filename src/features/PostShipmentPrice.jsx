import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export default function PostShipmentPrice({ onSuccess, onError }) {
  return useMutation({
    mutationFn: async (body) => {
      const detail = await api.post(
        `/shipment-price`,
        body
      );
      return detail;
    },
    onSuccess,
    onError,
  });
}
