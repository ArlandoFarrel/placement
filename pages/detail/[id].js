import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ItemDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const selectedItem = data.find(item => item.id === parseInt(id));
                setItem(selectedItem);
            } catch (error) {
                console.error('Error fetching item data:', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    return (
        <div>
            {item ? (
                <div className='bg-white h-screen flex flex-col items-center'>
                    {/* <h1>Detail Item dengan ID: {id}</h1> */}
                    <img className=" h-1/2 object-cover" src={item.img} alt={item.title} />
                    <div className=' w-full text-center h-1/2 grid grid-cols-1 gap-8 pt-12 '>
                        <h2 className='text-4xl text-black my-4'>{item.title}</h2>
                        <p className='text-black tracking-wider text-xs my-2 opacity-60'>{item.description}</p>
                        <p className='text-black text-sm opacity-60 font-sans'>SHOW STATISTIC</p>
                    </div>

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ItemDetail;
