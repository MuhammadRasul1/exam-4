import { CustomTable } from "components/CustomTable";
import { useSubjectsProps } from "./useSubjectsProps";

export const Subjects = () => {

  const { columns, data } = useSubjectsProps();

  return <div>
    <h1>Subjects</h1>
    <CustomTable columns={columns} data={data} />
  </div>;
};
