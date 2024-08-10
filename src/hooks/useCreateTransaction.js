import { useMutation } from "@tanstack/react-query";
import { createTransaction } from "../services/apiAccount";
import toast from "react-hot-toast";

export function useCreateTransaction() {
  const { mutate: createTrans, isLoading: isCreateTrans } = useMutation({
    mutationFn: ({
      fullName,
      type,
      amount,
      country,
      imageN,
      e_code,
      price,
      details,
    }) =>
      createTransaction({
        fullName,
        type,
        amount,
        country,
        imageN,
        e_code,
        price,
        details,
      }),
    onSuccess: () => {
      toast.success("Order have been successfully submited");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Failed to submit order");
    },
  });

  return { createTrans, isCreateTrans };
}
