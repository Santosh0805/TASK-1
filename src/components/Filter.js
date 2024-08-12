import React from 'react';
import { TextField, Button } from '@chakra-ui/react';

const Filter = ({ onFilter }) => {
  const [filter, setFilter] = React.useState('');

  const handleFilter = () => {
    onFilter(filter);
  };

  return (
    <div>
      <TextField label="Filter Blocks" onChange={(e) => setFilter(e.target.value)} />
      <Button onClick={handleFilter}>Apply Filter</Button>
    </div>
  );
};

export default Filter;
