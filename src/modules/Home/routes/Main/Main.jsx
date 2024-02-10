import { Button } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useMainProps } from "./useMainProps";

export const Main = () => {

  const { handleLogOut } = useMainProps();

  return (
    <div>
      <h1 className={cls.title}>MAIN: </h1>
      <Button background={"red"} color={"white"} onClick={handleLogOut}>LOG OUT</Button>
    </div>
  )

};
