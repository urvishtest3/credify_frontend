import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import './AdminDashboard.css';
import toast, { Toaster } from 'react-hot-toast';
import { BarLoader } from 'react-spinners';
import axios from 'axios';
import { backendApi } from '../../utils/constants';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loader,setLoader] = useState(true);

   const getUserCreditCards = async () => {
    await axios.get(`${backendApi}all-users`)
    .then(response => {
      setLoader(false);
      toast.success(response.data.message);
      console.log('Users Data found successfully:', response.data);
      setUsers(response.data.data)
    })
    .catch(error => {
      if (error.response && error.response.data.status === '0') {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
      console.error('Error getting users data:', error);
      setLoader(false);

    });
  };

  useEffect(()=>{
    getUserCreditCards();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
    <Toaster/>
    <Header/>
    <Layout title={"Admin Dashboard"}>
       {
       loader ? (<><center className="loaderbar--div">
              <BarLoader height={4} width={200} color='#C1FF11' />
              <h4>Loading</h4>
            </center>
          </>) : (<>
          {/* Credit Cards Table Start */}
          <div className="admindashboard-div">
       
        <center>User List</center>       
         { users.length > 0 ? (<>  <div className="table-responsive creditcard--table--div">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.userId}>
                    <td>{user.userName}</td>
                    <td>{user.userEmail}</td>
                    <td>{user.activated===true ? (<>< div className="btn btn-success">active</div></>): (<><>< div className="btn btn-success">not Active</div></></>)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> </>):(<><br/><center>No Users found.</center></>)}
        </div>
        {/* Credit Cards Table End */}
          </>)
       }
    </Layout>
    </>
  )
}

export default AdminDashboard