import { Box, FormControl, Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLoginProps } from "./useLoginProps";
import LockOpen from "assets/img/icon/lock_open.svg";
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { Input, InputPassword } from "components/Input";
import { BtnSubmit } from "components/BtnSubmit";

export const Login = () => {
  const { formState: { errors }, isPending, onSubmit, handleSubmit, register } = useLoginProps();

  return (
    <Box display="flex" flexDirection="column" gap={3} maxWidth="500px" margin="0 auto">
      <FormControl onSubmit={handleSubmit(onSubmit)} as="form">
        <Heading textAlign="center" mb={2}>
          Login
        </Heading>
        <Input
          label="Email или номер телефона"
          id="email"
          type="text"
          placeholder="Введите e-mail"
          src={EmailOutline}
          {...register("login_name")}
          error={errors.email}
          required
        />
        <InputPassword
          label="Пароль"
          src={LockOpen}
          id="password"
          placeholder="Введите пароль"
          {...register("password")} 
          error={errors.password}
        />
        <Box display="flex" flexDirection="column">
          <BtnSubmit
            text="Войти"
            disabled={isPending} 
          />
        </Box>

      </FormControl>
      <Box display="flex" justifyContent="center" color="dodgerblue">
        <Link to="/auth/register">register</Link>
      </Box>
    </Box>
  );
};
