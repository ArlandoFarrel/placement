import { useRouter } from 'next/router';

const Card = ({ title, description, img, stock, id }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/detail/${id}`);
  };

  return (
    <div className="w-5/6 h-72 shadow-xl py-4 cursor-pointer" onClick={handleCardClick}>
      <img className="w-full h-40 object-cover" src={img} alt={title} />
      <div className="px-6 py-4 flex mt-2">
        <div className=" text-black text-xl mb-2">{title}</div>
        <div className="flex items-center">
          <div className="h-6 border-l-2 ml-2 border-black-500 text-black opacity-60 text-xs flex items-center pl-2">
            {stock} PHOTOS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
