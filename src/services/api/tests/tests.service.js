import { useMutation, useQuery } from 'react-query';
import request from 'services/httpRequest';

const testsServices = {
  getTests: () => request.get('/tests').then((res) => res?.data?.data),
  createTest: () => request.post('/tests').then((res) => res?.data),
};

export const useGetTests = () => {
  return useQuery('GET/TESTS', testsServices.getTests);
};

export const useCreatTest = () => {
  return useMutation('POST/TEST', testsServices.createTest);
};
