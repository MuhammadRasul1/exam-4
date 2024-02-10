import { useState } from "react";
import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "react-query"
import axios from "axios"

const request = axios.create({
  baseURL: "http://54.196.215.223:8000/v1/"
})

export const useLoginProps = () => {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("auth/login", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        authStore.updateUserData({
          access_token: res.data.data.tokens.access_token,
          refresh_token: res.data.data.tokens.refresh_token,
          user_type: res.data.data.user_type
        })
        authStore.login()
      },
      onError: (error) => {
        setError("email", { message: "Неверный email или номер телефона"  })
        setError("password", { message: "Неверный пароль" })
      }
    })
  };

  console.log({ errors })

  return {
    handleClick,
    show,
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isPending
  };
};


// setError("email", { message: error.message })