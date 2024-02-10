import { useUpdateUser } from 'api';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export const useDetailProps = () => {
  const { id } = useParams();

  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();

  const updatedUser = useUpdateUser(id);
  const onSubmit = (data) => {
    updatedUser.mutate({ login_name: data?.login_name });
  };

  return {
    id,
    navigate,
    onSubmit,
    handleSubmit,
    register,
  };
};
