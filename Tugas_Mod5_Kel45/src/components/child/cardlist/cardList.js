import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../modal/modal"

export default function Cardlist(props) {
    const [visible, setVisible] = useState(false);
    const [daftarmenu, setDaftarmenu] = useState([]);
    const [deskripsi, setDeskripsi] = useState("");
    
    const handledeskripsi = (item) => {
        setVisible(true);
        setDeskripsi(item.deskripsi);
    };
    
    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3000/data",
            headers: {
                accept: "*/*"
            },
        })
            .then((data) => {
                console.log(data.data);
                setDaftarmenu(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
      }, []);
        
    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
                Daftar Menu
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <ul>
                {daftarmenu.map((results, index) => (
                    <li key = {results.id} onClick = {() => handledeskripsi(results)} className="mb-3">
                    <div className="rounded-md bg-white dark:bg-gray-800 group relative shadow-xl">
                        <div className="rounded-md bg-white dark:bg-gray-800 group relative shadow-md overflow-hidden group-hover:opacity-75 lg:h-70">
                            <img
                            src={results.gambar}
                            alt= "Gambar makanan"
                            className="rounded-md w-full h-32 sm:h-48 object-cover"
                            />
                            <div className = "m-3 dark:text-white">
                                <span className = "font-bold">{results.nama}</span>
                                <span className = "block text-green-500 font-bold text-lg">Rp.{results.harga}</span>
                            </div>
                            <div className = "bg-green-500 text-white text-xs font-bold rounded-full p-1 absolute top-0 ml-2 mt-2">
                                <span className = "ml-1 mr-1">Tersisa {results.stok} porsi</span>
                            </div>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            <Modal setVisible = {setVisible} visible = {visible} deskripsi = {deskripsi}/>
        </div>
    );
}
