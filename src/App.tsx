import { ReactNode, useEffect, useState } from "react";
import { Dragable } from "./components/DragandDrop/DragandDrop";
import { MakeSortable } from "./components/SortingwithIndicator.tsx/SortingwithIndicator";
import "./App.css"

function App() {
    const [itemData, setItemData] = useState<unknown[]>([
        "Audi",
        "BMW",
        "Tesla",
        "Mercedes",
        "Ferrari",
    ]);
    const [items, setItems] = useState<ReactNode[]>([]);

    useEffect(() => {
        setItems(
            itemData.map((item, index) => (
                <Dragable
                    key={index}
                    style={{
                        width: "20rem",
                    }}
                >
                    {item as ReactNode}
                </Dragable>
            ))
        );
    }, [itemData]);

    return (
        <MakeSortable
            itemData={itemData}
            items={items}
            onSort={(newItems) => {
                setItemData(newItems);
            }}
        />
    );
}

export default App;