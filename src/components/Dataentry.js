import React, { useState } from 'react';
import { Modal, Button, TextField } from '@chakra-ui/react';

const DataEntryModal = ({ open, handleClose, handleSave }) => {
  const [data, setData] = useState('');

  const handleSubmit = () => {
    handleSave(data);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div>
        <h2>Enter Required Data</h2>
        <TextField value={data} onChange={(e) => setData(e.target.value)} />
        <Button onClick={handleSubmit}>Save</Button>
      </div>
    </Modal>
  );
};

export default DataEntryModal;
