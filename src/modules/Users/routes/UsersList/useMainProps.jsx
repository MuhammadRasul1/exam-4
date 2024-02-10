import { Button } from '@chakra-ui/react';
import { useDeleteUser, useGetUsers, useGivePermission } from 'api';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export const useMainProps = () => {
  const navigate = useNavigate();

  const givePermission = useGivePermission();

  const { data: users, refetch } = useGetUsers();

  const handleGivePermission = (id) => {
    givePermission.mutate(id);
    refetch()
  };

  const deleteUser = useDeleteUser();
  const handleDeleteUser = (id) => {
    deleteUser.mutate(id);
    refetch()
  };

  const columns = [
    {
      title: 'Login',
      dataIndex: 'login_name',
      key: 'name',
      width: 100,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 100,
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 200,
      render: (item) => <span>{item ? format(new Date(item), 'dd.MM.yyyy HH:mm') : ''}</span>,
    },
    {
      title: 'Has permission',
      dataIndex: 'has_permission',
      key: 'has_permission',
      render: (item) => (item ? 'Yes' : 'No'),
    },
    {
      title: 'Operations',
      key: 'operations',
      render: (item) => {
        return (
          <div>
            <Button
              colorScheme={item?.has_permission ? 'linkedin' : 'green'}
              onClick={() => handleGivePermission(item?.id)}
              isDisabled={item?.has_permission}
            >
              {item?.has_permission ? 'access is allowed' : 'give access'}
            </Button>
            <Button colorScheme="teal" onClick={() => navigate(`/users/${item?.id}`)}>
              Edit
            </Button>
            <Button colorScheme="red" onClick={() => handleDeleteUser(item?.id)}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const data = users?.users?.map((user) => {
    return {
      key: user.id,
      created_at: user?.created_at,
      has_permission: user?.has_permission,
      id: user?.id,
      login_name: user?.login_name,
      type: user?.type,
    };
  });

  return {
    columns,
    data,
    refetch
  };
};
