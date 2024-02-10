import { Box, Checkbox, Heading } from "@chakra-ui/react";

export const Test = () => {

  return <Box>
    <img alt="" />
    <Heading fontSize="14px">Heading</Heading>
    <Heading>Subject</Heading>
    <Heading fontSize="14px">Variants</Heading>
    {
      [].map((item) => {
        return <Box key={item.id}>
          <Heading>{item?.content}</Heading>
          <Checkbox>Is current answer</Checkbox>
        </Box>;
      })
    }
  </Box>;
};
