import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import AdminLogin from './pages/auth/AdminLogin';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
         <Route path="*" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} /> 

        {/* Users Private routes */}
        {/* <Route path="/user-dashboard" element={<UserPrivateRoutes />}>
          <Route path="" element={<UserDashboard />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
