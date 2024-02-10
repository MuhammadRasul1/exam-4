import { Button, FormControl, Input } from "@chakra-ui/react";
import { useSubjectsProps } from "./useSubjectProps";

export const Subject = () => {
  const {
    id,
    navigate,
    subject
  } = useSubjectsProps();

  return <div>
    <h1>Subject id: {id}</h1>
    <Button onClick={() => navigate(-1)}>Back</Button>
    <span>Created at:{subject?.create_at} </span>
    <FormControl as="form">
      <Input placeholder="Title" />
      <Button type="submit">Save</Button>
    </FormControl>
  </div>;
};
