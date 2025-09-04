import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios/useAxios";
import { toast } from "react-toastify";
import { useModalStore } from "../../../zustand/modalstore";
import { useAuthStore } from "../../../zustand/authStore";

interface MutationType {
  url: string;
  mutationKey: string;
  params?: object;
  method: "POST" | "PUT" | "DELETE";
  messageError: string;
  messageSucces: string;
  headers?: object;
}

export const useQueryMutation = (props: MutationType) => {
  const setUserData = useAuthStore((state) => state.setUserData);
  const {
    url,
    mutationKey,
    params,
    method,
    headers,
    messageError,
    messageSucces,
  } = props;
  const axios = useAxios();
  const setModalVisibility = useModalStore(
    (state) => state.setAuthModalVisiblity
  );
  return useMutation({
    mutationKey: [mutationKey],
    mutationFn: (data: any) =>
      axios({ headers, url, method, params, body: data }),
    onSuccess: (data: any) => {
      if (url.includes("login") || url.includes("register")) {
        let {
          data: { token },
        } = data;

        setModalVisibility();

        setUserData(data?.data.user);

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(data?.data.user));
      } else {
        setModalVisibility();
      }

      toast.success(messageSucces);
    },
    onError: () => {
      toast.error(messageError);
    },
  });
};

// user update mutation

export const useUserUpdateMutation = (props: MutationType) => {
  const setUserData = useAuthStore((state) => state.setUserData);
  const {
    url,
    mutationKey,
    params,
    method,
    headers,
    messageError,
    messageSucces,
  } = props;
  const axios = useAxios();
  // const setModalVisibility = useModalStore(
  //   (state) => state.setAuthModalVisiblity
  // );
  return useMutation({
    mutationKey: [mutationKey],
    mutationFn: (data: any) =>
      axios({ headers, url, method, params, body: data }),
    onSuccess: (data: any) => {      
      let { data: userdata } = data;
      setUserData(userdata?.user);
      localStorage.setItem("user", JSON.stringify(userdata?.user));
      toast.success(messageSucces);
    },
    onError: (error:any) => {
      toast.error(messageError);
      console.log(error);
      console.log("On error ishladi");
    },
  });
};
