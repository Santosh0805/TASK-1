import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import store from './Reducers/store';
import Swimlane from './components/Swimlane';
import DataEntryModal from './components/Dataentry';
import BlockPreview from './components/BlockPreview';
import Filter from './components/Filter';
import { masterConfig } from './config';

function App() {
  const [blocks, setBlocks] = useState({
    Backlog: [{ id: '1', content: 'Task 1', history: [] }],
    'To Do': [],
    'In Progress': [],
    Done: []
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [filter, setFilter] = useState('');

  const handleDragEnd = (result) => {
  };

  const handleSaveData = (data) => {
  };

  const handleBlockClick = (block) => {
    setSelectedBlock(block);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <ChakraProvider store={store}>
      <div className="App">
        <Filter onFilter={handleFilter} />
        <Swimlane
          stages={masterConfig.stages}
          blocks={blocks}
          onDragEnd={handleDragEnd}
          onBlockClick={handleBlockClick}
        />
        <DataEntryModal
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          handleSave={handleSaveData}
        />
        {selectedBlock && (
          <BlockPreview
            block={selectedBlock}
            open={!!selectedBlock}
            handleClose={() => setSelectedBlock(null)}
          />
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
