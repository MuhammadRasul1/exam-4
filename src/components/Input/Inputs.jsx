import React from "react";
import cls from "./styles.module.scss";
import clsx from "clsx";
import { Box, InputGroup, InputRightElement } from "@chakra-ui/react";
import Error from "assets/img/icon/error.svg";
import { useInputProps } from "./useInputsprops"; 
import Eye from "assets/img/icon/Eye.svg"


export const Input = React.forwardRef((props, ref) => {
    const { error, ...rest } = props

    return (
        <Box className={cls.formWrapper}>
            <Box display="flex" flexDirection="column">
                <label className={cls.label} htmlFor={props.id}>
                    {props.label} 
                    <span className={cls.required}>*</span>
                </label>
                <Box className={cls.inputWrapper}>
                    <img src={props.src} alt="email_outline" width={24} height={24}/>
                    <input
                        className={clsx(cls.input, { [cls.error]: !!error?.message })}
                        {...rest}
                        ref={ref}
                        type={props.type}
                        id={props.id}
                        placeholder={props.placeholder} 
                    />
                </Box>
            </Box>
            { error?.message && 
             <Box display="flex" alignItems="center" marginTop="8px">
                <img src={Error} alt="error" width={16} height={16}/>
                <p style={{ color: 'red', marginLeft: '8px' }}>{error?.message}</p>
             </Box>
            }
        </Box>
    )
})

export const InputPassword = React.forwardRef((props, ref) => {
    const { error, ...rest } = props

    const { handleClick, show} = useInputProps()

    return (
        <Box className={cls.formWrapper}>
            <Box display="flex" flexDirection="column">
                <label className={cls.label} htmlFor={props.id}>
                    {props.label} 
                    <span className={cls.required}>*</span>
                </label>
                <Box className={cls.inputWrapper}>
                    <InputGroup display="flex" alignItems='center' size='md'>
                        <img src={props.src} alt="lock_open" width={24} height={24} />
                        <input
                            className={clsx(cls.input, { [cls.error]: !!error?.message })}
                            {...rest}
                            ref={ref}
                            type={show ? 'text' : 'password'}
                            id={props.id}
                            minLength={props.minLength ? props.minLength : 8}
                            placeholder={props.placeholder} 
                            required
                        />
                        <InputRightElement >
                            <button className={cls.btnEye} type='button'  onClick={handleClick}>
                                <img src={show ? Eye : Eye} alt="show eye" width={24} height={24} />
                            </button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Box>
            { error?.message && 
             <Box display="flex" alignItems="center" marginTop="8px">
                <img src={Error} alt="error" width={16} height={16}/>
                <p style={{ color: 'red', marginLeft: '8px' }}>{error?.message}</p>
             </Box>
            }
        </Box>
    )
})
