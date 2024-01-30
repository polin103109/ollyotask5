// import React, { useState, ReactNode } from "react";
// import { MakeSortable } from "./SortingwithIndicator.tsx/SortingwithIndicator";

// interface Item {
//   id: number;
//   text: string;
//   color: string;
// }

// interface ComponentViewProps {
//   items: Item[];
//   setItems: React.Dispatch<React.SetStateAction<Item[]>>;
// }

// const ComponentView: React.FC<ComponentViewProps> = ({ items, setItems }) => {
//   //const [isDragging, setIsDragging] = useState(false);
// const handleonSort =()=>{
//     alert("hiiiii")
// }
 

//   return (
//     <>
    
//       <MakeSortable setItems={setItems}
//         items={items.map((item,index) => (
//           <div 
//           key={item.id}
//            style={{
//            margin: "10px",
//              padding: "10px",
//            borderRadius: "5px",
//            backgroundColor: `${item.color}`,
//             position: "relative",
//           }}
    
//           > <div className="drag-icon" >
//           &#x2630;
//         </div>
//             {item.text}
//              </div>
//         ))}
       
//       >
        
//       </MakeSortable>
//     </>
//   );
// };

// export default ComponentView;
