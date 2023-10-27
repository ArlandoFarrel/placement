import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from 'react'
import Card from "@/components/Card"


export default function Home () {
    const [searchResults, setSearchResults] = useState([])
    const [data, setData] = useState([])

    const handleSearch = (query) => {
        const results = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
        setSearchResults(results)
    }

    useEffect(() => {
        fetch('/data.json')
          .then(response => response.json())
          .then(data => {
            setData(data);
            setSearchResults(data); // Setel hasil pencarian ke semua data saat pertama kali dimuat
          })
          .catch(error => console.error('Error Fetching Data:', error));
      }, []);
    

    return (
        <div>
        <Navbar searchData={searchResults} onSearch={handleSearch}/>
        <div className="bg-white h-96 flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-4 text-black ">photolyphia.</h1>
            <h5 className="mb-2 text-black opacity-50 font-semibold">STOCK PHOTOS</h5>
        </div>
        <div className=" bg-white h-full  flex flex-col justify-center items-center">
       {searchResults.map(item => (
          <Card
            key={item.title}
            title={item.title}
            stock={item.stock}
            description={item.description}
            img={item.img}
          />
        ))}
        </div>
        </div>
    )
}

