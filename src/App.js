import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
    const [isModalVisible,setIsModalVisible] = useState(false)
    const cartClickHandler = () =>{
        setIsModalVisible(true)
    }
    const onCloseModalHandler = ()=>{
        setIsModalVisible(false)
    }
  return (
    <>
        {isModalVisible && <Cart onCloseModal={onCloseModalHandler}/>}
        <Header onCartClicked={cartClickHandler}/>
        <main>
            <Meals />
        </main>
    </>
  );
}

export default App;
