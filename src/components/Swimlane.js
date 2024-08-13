import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function onDragEnd(result) {
  const { destination, source, draggableId } = result;

  if (!destination) return;

}

const Swimlane = ({ stages, blocks }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    {stages.map((stage, index) => (
      <Droppable key={stage} droppableId={stage}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>{stage}</h2>
            {blocks[stage].map((block, index) => (
              <Draggable key={block.id} draggableId={block.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {block.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    ))}
  </DragDropContext>
);

export default Swimlane;

