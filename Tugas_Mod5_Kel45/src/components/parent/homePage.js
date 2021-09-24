import { useState } from "react";
import Cardlist from "../child/cardlist/cardList"

export default function Homepage(props) {
    const { menu_data } = props;
    const [menu_visible, setMenuVisible] = useState(false);
    
    const memunculkanMenu = () => setMenuVisible(!menu_visible);

    return(
        <>
            <div className = "dark:bg-gray-900 mt-20 bg-white flex flex-col justify-center items-center">
                <h1 className = "dark:text-white lg:text-6xl md:text-5xl sm:text-3xl text-3xl font-black mb-3 object-center">
                    WAROENG
                </h1>
                <h1 className = "dark:text-white lg:text-8xl md:text-6xl sm:text-5xl text-3xl font-black mb-3 object-center">
                    SERBA
                </h1>
                <h1 className = "dark:text-white lg:text-6xl md:text7xl sm:text-3xl text-3xl font-black mb-3 object-center">
                    DAGIENKZ
                </h1>
                <button onClick = {memunculkanMenu} className = " mt-8 py-4 px-10 bg-green-500 rounded-full font-bold text-white text-xl hover:bg-green-300 transition duration-300 ease-in-out flex items-center animate-bounce">
                    Lihat Menu
                </button>
                {menu_visible && <Cardlist menu_data = {menu_data}/>}
            </div>
        </>
    )
}
