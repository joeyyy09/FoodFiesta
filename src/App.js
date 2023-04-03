import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, OrderPlaced } from "./components";
import MainContainer from "../src/components/MainContainer";
import CreateContainer from "../src/components/CreateContainer";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./components/context/StateProvider";
import { getAllFoodItems } from "./components/utils/firebaseFunctions";
import { actionType } from "./components/context/reducer";
import MenuPage from "./components/MenuPage";

export default function App() {
  const [{ foodItems }, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full h-screen">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/orderplaced" element={<OrderPlaced />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}
