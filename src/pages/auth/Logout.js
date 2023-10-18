import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { useAuth } from '../../context/Auth';
import './Logout.css';

const Logout = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        setAuth({
            ...auth,
            userDetails: null,
            token: '',
            userRoles: null,
        });
        localStorage.removeItem('auth');
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };
  
    useEffect(()=>{
    handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <> 
            <Layout title={"Logging out..."}>
                <div>
                    <div className="logout--div">
                        <center>
                            <BarLoader height={4} width={200} color='#C1FF11' />
                            <br />
                            <h1>Logging out...</h1>
                        </center>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Logout