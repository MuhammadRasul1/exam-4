import { CustomTable } from 'components/CustomTable';
import { useTestsProps } from './useTestsProps';
import { Box, Button, Checkbox, FormControl, Heading, Input, Select } from '@chakra-ui/react';
import { CustomModal } from 'components/CustomModal';

export const Tests = () => {
  const {
    columns,
    data,
    isOpen,
    handleOpen,
    handleClose,
    remove,
    append,
    fields,
    navigate,
    onSubmit,
    handleSubmit,
    register,
    subjects,
  } = useTestsProps();

  return (
    <Box>
      <Heading>Tests</Heading>
      <Button colorScheme="red" onClick={handleOpen}>
        Create new test
      </Button>
      <CustomTable columns={columns} data={data} onRow={(item) => ({ onClick: () => navigate(item.id) })} />
      <FormControl as="form">
        <CustomModal title="Create new test" isOpen={isOpen} callback={handleSubmit(onSubmit)} onClose={handleClose}>
          <Input placeholder="Title" {...register('question_content')} />
          <Input type="file" placeholder="Image" {...register('image_urls')} />
          <Heading fontSize="14px">Subject</Heading>
          <Select placeholder="Select option" {...register('subject_id')}>
            {subjects?.subjects.map((subject) => {
              return (
                <option key={subject?.id} value={subject?.id}>
                  {subject?.title}
                </option>
              );
            })}
          </Select>
          <Heading fontSize="14px">Variants</Heading>
          {fields.map((item, index) => {
            return (
              <Box key={item.id}>
                <Input placeholder="Content" {...register("content")} />
                <Checkbox {...register("is_answer")}>Is current answer</Checkbox>
                <Button colorScheme="red" fontSize="10" onClick={() => remove(index)}>
                  Delete
                </Button>
              </Box>
            );
          })}
          <Button
            colorScheme="telegram"
            onClick={() =>
              append({
                content: '',
                is_answer: false,
              })
            }
          >
            Add variant
          </Button>
        </CustomModal>
      </FormControl>
    </Box>
  );
};
