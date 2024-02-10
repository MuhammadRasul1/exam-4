import cls from "./styles.module.scss";

export const BtnSubmit = (props ) => {
   return (
    <button type="submit" className={cls.btnSubmit}>{props.text}</button>
   ) 
}