import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export default function UseFetchTrackShip({ onSuccess, onError }) {
  return useMutation({
    mutationFn: async (body) => {
      const detail = await api.get(
        `/tracking-logistic/trackingAndShipment`,
        body
      );
      return detail;
    },
    onSuccess,
    onError,
  });
}
