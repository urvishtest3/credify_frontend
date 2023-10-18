import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import './UserDashboard.css';
import axios from 'axios';
import { backendApi } from '../../utils/constants';
import toast, { Toaster } from 'react-hot-toast';
import { BarLoader } from 'react-spinners';

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [creditCards, setCreditCards] = useState([]);
  const [loader,setLoader] = useState(true);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCreditCardSubmit = async () => {
    setLoader(true);
    await axios.post(`${backendApi}add-card`, {
      fullName: fullName,
      cardNumber: cardNumber,
    })
    .then(response => {
      setLoader(false);
      toast.success(response.data.message);
      console.log('Data posted successfully:', response.data);
      getUserCreditCards();
      setIsModalOpen(false);
    })
    .catch(error => {
      if (error.response && error.response.data.status === '0') {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
      console.error('Error posting data:', error);
      setLoader(false);
    });
  };

  const getUserCreditCards = async () => {
    await axios.get(`${backendApi}cards`)
    .then(response => {
      setLoader(false);
      toast.success(response.data.message);
      console.log('Data found successfully:', response.data);
      setIsModalOpen(false);
      setCreditCards(response.data.data)
    })
    .catch(error => {
      
      if (error.response && error.response.data.status === '0') {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
      console.error('Error getting data:', error);
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
    <Layout title={"User Dashboard"}>
      {
        loader ? ( <>
          <>
            <center className="loaderbar--div">
              <BarLoader height={4} width={200} color='#C1FF11' />
              <h4>Loading</h4>
            </center>
          </>
        </>) : (<> <div className="userdashboard--div text-center">
    <button className="btn add-card--btn" onClick={toggleModal}>
          Add credit card
        </button>

        {isModalOpen && (
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Credit Card Information</h5>
                  <button
                        type="button"
                        className="btn-close"
                        onClick={toggleModal}
                      ></button>
                    
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="fullName">Enter Full Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      value={fullName}
                      onChange={handleFullNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Enter Card Number:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleCreditCardSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Credit Cards Table Start */}
        <div className="mt-3">
        <h2>Verified Credit Cards</h2>       
         { creditCards.length > 0 ? (<>  <div className="table-responsive creditcard--table--div">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Card Number</th>
                </tr>
              </thead>
              <tbody>
                {creditCards.map((card, index) => (
                  <tr key={index}>
                    <td>{card.fullName}</td>
                    <td>{card.cardNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> </>):(<><br/>No Verified Credit Cards</>)}
        </div>
        {/* Credit Cards Table End */}

        
      </div></>)
      }
   
    </Layout>
     
    </>
  );
}

export default UserDashboard

