import React from "react"
import './assets/css/main.css';
import Card from "./components/Card";
import AddList from "./components/AddList";
import CardHeader from "./assets/css/CardHeader";
import SearchField from "./components/SearchField";
import ListItem from "./components/ListItem";
import SvgIcon from "./components/SvgIcon";
import DeleteIcon from "./assets/icons/delete.svg";
import Data from "./Data/data.json";

function App() {
    const [items, setItems] = React.useState(Data);
    const [search, setSearch] = React.useState("");

    const filterList = () => {
        if(search === ""){
            return items;
        }
        return items.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }

    const addToList = (value) => {
        const newArray = [...items];
        const newObject = {
            name: value,
            id: Math.random(),
        }
        newArray.unshift(newObject);
        setItems(newArray);
    }

    const deleteItem = (id) => {
        const newArray = [...items];
        setItems(newArray.filter(item => item.id !== id));
    }

  return (
    <div className="app">
     <Card>
         <CardHeader title="To Do ListItem" />
         <SearchField searchParam={search} onChange={(e) => setSearch(e.target.value)}/>
         <ul className="mat_list">
             {filterList().length > 0 ? (
                 <>
                     {filterList().map(item => (
                         <ListItem
                             text={item.name}
                             key={item.id}
                             icon={<SvgIcon
                                 src={DeleteIcon}
                                 onClick={() => deleteItem(item.id)}
                                 className="delete-icon"
                                 alt="Delete Item"
                             />
                             }
                         />
                     ))}
                 </>
             ) : (
                 <ListItem text="Sorry, we do not have results" />
             )}
         </ul>
       <AddList addToList={addToList}/>
     </Card>
    </div>
  );
}

export default App;
