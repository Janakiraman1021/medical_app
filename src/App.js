import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import RPatient from './components/Register/Patient/Patient';
import RDoctor from './components/Register/Doctor/Doctor';
import Appoint from './components/Register/Appointment/appoint';
import RStaff from './components/Register/Staff/Staff';
import About from './components/About/About';
import Admin from './scenes/Dashboards/Admin/Admin';
import Staff from './scenes/Dashboards/Staff/Staff';
import Doctor from './scenes/Dashboards/Doctor/Doctor';
import Patient from './scenes/Dashboards/Patient/Patient';
import ViewDoctor from './scenes/Dashboards/Doctor/views/ViewDoctor';
import ViewDocList from './scenes/Dashboards/Admin/views/viewDocList';
import ViewPatList from './scenes/Dashboards/Admin/views/viewPatList';
import ViewDetailPat from './scenes/Dashboards/Patient/views/ViewDetailPat';
import ViewAppoint from './scenes/Dashboards/Staff/views/ViewAppoint';
import UploadDoc from './scenes/Dashboards/Patient/views/UploadDoc';
import GrantDoc from './scenes/Dashboards/Patient/views/GrantDoc';
import PatientInfo from './scenes/Dashboards/Doctor/views/PatientInfo';
import ManageAppoint from './scenes/Dashboards/Doctor/views/ManageAppoint';

const App = () => {
  const [wallet, setWallet] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const detectWallet = async () => {
      if (window.ethereum) {
        console.log("Ethereum wallet detected");
        setWallet(window.ethereum);
      } else if (window.web3) {
        console.log("Legacy web3 wallet detected");
        setWallet(window.web3.currentProvider);
      } else {
        console.log("No wallet detected");
        setWallet(null);
      }
    };
    detectWallet();
  }, []);

  const handleConnectWallet = async () => {
    if (wallet) {
      try {
        await wallet.request({ method: 'eth_requestAccounts' });
        console.log("Wallet connected successfully");
        const accounts = await wallet.request({ method: 'eth_accounts' });
        if (accounts && accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } catch (error) {
        console.error("Error connecting wallet:", error);
        // Error connecting wallet
      }
    }
  };

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/register/patient' element={<RPatient />} />
          <Route exact path='/register/doctor' element={<RDoctor />} />
          <Route exact path='/register/staff' element={<RStaff />} />
          <Route exact path='/make_appointment' element={<Appoint />} />
          <Route exact path='/admin/' element={<Admin />} />
          <Route exact path='/doctor' element={<Doctor />} />
          <Route exact path='/staff' element={<Staff />} />
          <Route exact path='/patient' element={<Patient />} />
          <Route exact path='/patient/view_details' element={<ViewDetailPat />} />
          <Route exact path='/doctor/view_details' element={<ViewDoctor />} />
          <Route exact path='/admin/view_details/doctor_list' element={<ViewDocList />} />
          <Route exact path='/view_details/patient_list' element={<ViewPatList />} />
          <Route exact path='/view_details/appointment_list' element={<ViewAppoint />} />
          <Route exact path='/upload_docs' element={<UploadDoc />} />
          <Route exact path='/access' element={<GrantDoc />} />
          <Route exact path='/patient_info' element={<PatientInfo />} />
          <Route exact path='/manage_appointment' element={<ManageAppoint />} />
        </Routes>
      </Router>
      <Newsletter />
      <Footer />
      <div className="wallet-connect" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '999' }}>
        {wallet ? (
          <>
            <div style={{
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}>Wallet Address: {walletAddress}</div>
            <button
              onClick={handleConnectWallet}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Connect Wallet
            </button>
          </>
        ) : (
          <div>No wallet detected</div>
        )}
      </div>
    </>
  );
}

export default App;
