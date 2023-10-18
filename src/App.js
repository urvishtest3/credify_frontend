import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import AdminLogin from './pages/auth/AdminLogin';
import PageNotFound from './pages/PageNotFound';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard';
import AdminPrivateRoutes from './components/routes/AdminPrivateRoutes';
import UserPrivateRoutes from './components/routes/UserPrivateRoutes';
import Logout from './pages/auth/Logout';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
         <Route path="*" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
         {/* Admin Private routes */}
         <Route path="/admin-dashboard" element={<AdminPrivateRoutes/>}>
          <Route path="" element={<AdminDashboard />} />
        </Route>
        {/* Users Private routes */}
        <Route path="/user-dashboard" element={<UserPrivateRoutes />}>
          <Route path="" element={<UserDashboard />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
