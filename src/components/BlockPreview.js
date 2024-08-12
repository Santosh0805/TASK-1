import React from 'react';
import { Modal } from '@chakra-ui/react';

const BlockPreview = ({ block, open, handleClose }) => (
  <Modal open={open} onClose={handleClose}>
    <div>
      <h2>Block Details</h2>
      <p>{block.content}</p>
      <h3>History</h3>
      <ul>
        {block.history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </Modal>
);

export default BlockPreview;
