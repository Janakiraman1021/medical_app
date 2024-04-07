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

function PatientInfo() {
    return (
        <div className="content-pat">
            <div className='pat-dets-doc'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Contact</th>
                            <th>Gender</th>
                            <th>Wallet Address</th>
                            <th>Records</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Example Name</td>
                            <td>01/01/1990</td>
                            <td>1234567890</td>
                            <td>Male</td>
                            <td>0x123456789abcdef</td>
                            <td><button>View</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className='records'>
                    <Modal open={false} onClose={() => {}} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Records List
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                <div className='p-items' style={{fontSize: 19, textAlign: 'left'}}>
                                    <li><a href="#">Record 1</a></li>
                                    <li><a href="#">Record 2</a></li>
                                </div>
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default PatientInfo;
