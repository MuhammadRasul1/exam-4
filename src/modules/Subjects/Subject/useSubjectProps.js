import { useGetSubjectsById } from 'api';
import { useNavigate, useParams } from 'react-router-dom';

export const useSubjectsProps = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: subject } = useGetSubjectsById(id);
  console.log(subject);
  return {
    id,
    navigate,
    subject,
  };
};
