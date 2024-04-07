import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "400px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ViewDoctor() {
    return (
        <div className="content-pat">
            <div className='pat-dets'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Aadhar Number</th>
                            <th>Contact</th>
                            <th>Specialization</th>
                            <th>Wallet Address</th>
                            <th>Patient's List</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Example Doctor</td>
                            <td>123456789012</td>
                            <td>1234567890</td>
                            <td>Cardiology</td>
                            <td>0x123456789abcdef</td>
                            <td><button>View</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className="patList">
                    <Modal open={false} onClose={() => {}} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Patient's List
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <div style={{fontSize: 19, textAlign: 'left'}}>
                                    <li>Patient 1</li>
                                    <li>Patient 2</li>
                                </div>
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default ViewDoctor;
