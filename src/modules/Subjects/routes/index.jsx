import { Route, Routes } from "react-router-dom";
import { Subjects } from "../Subjects";
import { Subject } from "../Subject";

export const SubjectsRoutes = () => {

  return <Routes>
    <Route path="" element={<Subjects />} />
    <Route path=":id" element={<Subject />} />
  </Routes>;
};
