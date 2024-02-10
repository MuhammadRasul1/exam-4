import { Button } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useDeleteSubjects, useGetSubjects } from 'api';

export const useSubjectsProps = () => {
  const navigate = useNavigate();

  const { data: subjects } = useGetSubjects();
  const deleteSubject = useDeleteSubjects();
  const handleDeleteSubject = (id) => {
    deleteSubject.mutate(id);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (item) => <span>{item ? format(new Date(item), 'dd.MM.yyyy HH:mm') : ''}</span>,
    },
    {
      title: 'Operations',
      key: 'operations',
      render: (item) => {
        return (
          <div>
            <Button colorScheme="teal" onClick={() => navigate(`/subjects/${item?.id}`)}>
              Edit
            </Button>
            <Button colorScheme="red" onClick={() => handleDeleteSubject(item?.id)}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const data = subjects?.subjects?.map((subject) => {
    return {
      created_at: subject?.created_at,
      id: subject?.id,
      title: subject?.title,
      key: subject?.id,
    };
  });

  return {
    columns,
    data,
  };
};
