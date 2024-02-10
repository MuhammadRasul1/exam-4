import { useMutation, useQuery } from 'react-query';
import request from 'services/httpRequest';

const subjectsServices = {
  getSubjects: () => request.get('/subjects').then((res) => res?.data?.data),
  getSubjectById: (id) => request.get(`/subjects/${id}`).then(res => res?.data?.data),
  deleteSubject: (subject_id) => request.delete(`subjects/${subject_id}`).then((res) => res?.data?.data)
};

export const useGetSubjects = () => {
  return useQuery({ queryKey: 'GET/SUBJECTS', queryFn: subjectsServices.getSubjects });
};

export const useGetSubjectsById = (id) => {
  return useQuery("GET/SUBJECT/ID", () => subjectsServices.getSubjectById(id))
}

export const useDeleteSubjects = () => {
  return useMutation('DELETE/SUBJECTS', (subject_id) => subjectsServices.deleteSubject(subject_id));
};