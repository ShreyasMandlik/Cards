import React, { useState } from "react";

const Cards = (props: any) => {
  const [isImagePresent, setIsImagePresent] = useState(true);
  const handleImageError = () => {
    setIsImagePresent(!isImagePresent);
  };
  return (
    <div className="max-w-xl h-[600px] w-full md:w-[300px] sm:w-[100px] rounded m-10 border-2 border-black">
      {isImagePresent ? (
        <img
          className="w-full h-40"
          src={props.item.imageUrl}
          alt={props.item.description}
          onClick={handleImageError}
        />
      ) : (
        <div
          className="w-full h-40 text-center p-10"
          onClick={handleImageError}
        >
          Image not available
        </div>
      )}

      <div className="p-2">
        <h1 className="font-bold text-center text-xl mb-2 mt-5">
          {props.item.name}
        </h1>
        <div className="px-2 py-2">
          <div>{props.item.description}</div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
