import { useMutation } from 'react-query';
import request from 'services/httpRequest';
import { authStore } from 'store/auth.store';

const authServices = {
  hasPermission: (user_id) => {
    request.patch(`/auth/grant-permission/${user_id}`).then((res) => res?.data);
  },
};

export const useRegister = () => {
  return useMutation('REGISTER', (data) => authServices.register(data));
};

export const useGivePermission = () => {
  return useMutation('PATCH/GIVE_PERMISSION', (user_id) => authServices.hasPermission(user_id));
};
