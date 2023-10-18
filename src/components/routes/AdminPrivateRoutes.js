import { useState, useEffect } from 'react';
import { useAuth } from '../../context/Auth';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { backendApi } from '../../utils/constants';
import LoaderBar from '../LoaderBar';

export default function AdminPrivateRoutes() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const localStorageData = localStorage.getItem('auth');
  if (localStorageData) {
    var { accessToken } = JSON.parse(localStorageData);
  }
  useEffect(() => {
    const authCheck = async () => {
      try {
        const headers = {
          Authorization: accessToken,
        };
        const { data } = await axios.get(`${backendApi}admin-auth`, {
          headers,
        });
        if (data?.status === '1') {
          setOk(true);
          setLoader(false);
        } else {
          setOk(false);
        }
      } catch (error) {
        setTimeout(() => {
          setAuth({
            ...auth,
            userDetails: null,
            token: '',
          });
          localStorage.removeItem('auth');
          navigate('/admin-login');
        }, 1000);
        if (
          error.response?.data.status === '0' ||
          error.response?.data.status === '5'
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error(error.message);
        }
      }
    };
    if (accessToken === null || accessToken === undefined) {
      setTimeout(() => {
        navigate('/admin-login');
      }, 4000);
    } else {
      authCheck();
    }
  }, [auth, navigate, setAuth, accessToken]);

  return ok ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      {loader && (
        <>
        <Toaster/>
          <LoaderBar/>
        </>
      )}
    </>
    
  );
}
