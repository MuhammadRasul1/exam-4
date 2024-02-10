import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeRoutes } from '../modules/Home/routes';
import { UsersRoutes } from '../modules/Users/routes';
import { MainLayout } from '../Layouts/MainLayout';
import { authStore } from 'store/auth.store';
import { observer } from 'mobx-react-lite';
import { AuthRoutes } from 'modules/Auth/routes';
import { SubjectsRoutes } from 'modules/Subjects/routes';
import { TestsRoutes } from 'modules/Tests/routes';

export const Router = observer(() => {
  const isAuth = authStore.isAuth;

  const roleType = authStore.userData?.user_type;

  if (!isAuth) {
    return (
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    );
  }

  if (roleType === 'admin') {
    return (
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route index path="/home/*" element={<HomeRoutes />} />
          <Route path="/users/*" element={<UsersRoutes />} />
          <Route path="/subjects/*" element={<SubjectsRoutes />} />
          <Route path="/test/*" element={<TestsRoutes />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    );
  }
});
