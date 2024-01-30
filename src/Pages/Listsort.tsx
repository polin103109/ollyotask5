import React from "react";
import './Listsort.css';
function ListSort() {
  const [carItems, setCarItems] = React.useState([
    "Audi",
    "BMW",
    "Ferari",
  ]);
  

  //save reference for dragItem and dragOverItem
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  //const handle drag sorting
  const handleSort = () => {
    //duplicate items
    let _carItems = [...carItems];

    //remove and save the dragged item content
    const draggedItemContent = _carItems.splice(dragItem.current, 1)[0];

    //switch the position
    _carItems.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setCarItems(_carItems);
  };

 
  

  return (
    <div className="app">
      <h2>Car List</h2>
       <div className="list-sort">
        {carItems.map((item, index) => (
          <div
            key={index}
            className="list-item"
            onDragStart={() => (dragItem.current = index)}
            onDragEnter={() => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
           <div className="drag-icon">&#x2630;</div>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListSort;