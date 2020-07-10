import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import DraggableBox from './draggableBox';


 const draggableColorList = SortableContainer(({colors, removeColor}) =>{
    return (
        <div style={{height: '100%'}}>
            {colors.map((c, i) => (
                <DraggableBox 
                  index={i}
                  color={c.color} 
                  name={c.name} 
                  handleClick={() => removeColor(c.name)}
                  key={c.name}
                />
            ))}
        </div>
    )
})

export default draggableColorList;
