import { Box, Button } from '@chakra-ui/react';
import { useCreatTest, useGetSubjects, useGetTests } from 'api';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useTestsProps = () => {
  const [isOpen, setOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const navigate = useNavigate();
  const { control, reset, handleSubmit, register } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: 'options',
    control,
  });

  // useGetTest
  const { data: tests } = useGetTests();

  // get subjects

  const { data: subjects } = useGetSubjects();

  
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditing(false);
    reset();
  };

  const handleEditClick = (e, item) => {
    e.stopPropagation();
    setEditing(true);
    handleOpen();
    reset({
      options: item?.options,
      question_content: item?.question_content,
      question_images: item?.question_images,
      subject_id: item?.subject_id,
    });
  };
  // CREATE/TEST
  const createTest = useCreatTest()
  const onSubmit = (data) => {
    createTest.mutate({
      options: [
        {
          content: data?.content,
          image_urls: [
            data?.image_urls
          ],
          is_answer: data?.is_answer
        }
      ],
      question_content: data?.question_content,
      question_images: [
        ""
      ],
      subject_id: data?.subject_id
    })
    console.log(data)
    if (!isEditing) {
      console.log('Edited', data);
    } else {
      console.log('Created', data);
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'question_content',
      key: 'question_content',
    },
    {
      title: 'Admin',
      dataIndex: 'admin',
      key: 'admin',
      render: (item) => <span>{item?.login_name}</span>,
    },
    {
      title: 'Options',
      dataIndex: 'options',
      key: 'options',
      render: (item) => <span>{item?.map((item) => item?.content)}</span>,
    },
    {
      title: 'Images',
      dataIndex: 'question_images',
      key: 'question_images',
      render: (item) => (
        <span>
          {item?.map((item, index) => (
            <img src={item} alt="" width={50} height={50} key={index} />
          ))}
        </span>
      ),
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      render: (item) => <span>{item?.title}</span>,
    },
    {
      title: '',
      dataIndex: '',
      key: 'edit',
      render: (item) => {
        return (
          <Box>
            <Button colorScheme="orange" onClick={(e) => handleEditClick(e, item)}>
              Edit
            </Button>
            <Button colorScheme="red" onClick={(e) => {e.stopPropagation();}}>
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  const data = tests?.tests?.map((test) => {
    return {
      key: test.id,
      admin: {
        id: test?.admin?.id,
        login_name: test?.admin?.login_name,
      },
      created_at: test?.created_at,
      id: test?.id,
      options: test?.options.map((option) => {
        return {
          content: option?.content,
          id: option?.id,
          image_urls: '',
          is_answer: option?.is_answer,
        };
      }),
      question_content: test?.question_content,
      question_images: [test?.question_images] || '',
      subject: {
        created_at: test?.subject?.created_at,
        id: test?.subject?.id,
        title: test?.subject?.title,
      },
    };
  });

  return {
    data,
    columns,
    isOpen,
    handleOpen,
    handleClose,
    fields,
    append,
    remove,
    navigate,
    onSubmit,
    handleSubmit,
    register,
    subjects,
  };
};
