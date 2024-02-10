import cls from './styles.module.scss';
import { useDetailProps } from './useDetailProps';
import { Button, FormControl, Input } from '@chakra-ui/react';

export const Detail = () => {
  const { id, navigate, onSubmit, handleSubmit, register } = useDetailProps();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <h1 className={cls.title}>User id: {id}</h1>
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <Input as="input" placeholder="Login" type="text" {...register('login_name')} />
        <Button type="submit">Save</Button>
      </FormControl>
    </div>
  );
};
