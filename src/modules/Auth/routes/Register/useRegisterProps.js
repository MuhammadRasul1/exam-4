import { useState } from "react";
import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import request from "services/httpRequest";
import { useMutation } from "react-query";

export const useRegisterProps = () => {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation({mutationFn: (data) => request.post("auth/register", data)})
  
  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        authStore.createUsersId(res?.data)
        alert('Пожалуйста подожите')
      }
    })
  };

  return {
    handleClick,
    show,
    register,
    handleSubmit,
    onSubmit
  };
};
