import { useState } from "react";

const RestaurantMenuCategory = ({ data }) => {
  const { itemCards } = data;
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
        <div
          className="flex justify-between my-4"
          onClick={() => setShowItem(!showItem)}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItem ? "🔼" : "🔽"}</span>
        </div>
        {showItem && (
          <div>
            {itemCards.map((item) => (
              <div
                key={item?.card?.info?.id}
                className="flex justify-between border-b-2"
              >
                <div className="w-9/12">
                  <div className=" text-gray-800 font-semibold mt-10">
                    {item.card.info.name}{" "}
                    {item.card.info.itemAttribute.vegClassifier === "NONVEG"
                      ? "🍗"
                      : "🥦"}
                  </div>
                  <div className="">
                    ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </div>
                  <p className="text-gray-600 text-sm my-3">
                    {item.card.info.description}
                  </p>
                </div>
                <div className="w-3/12 p-6">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      item.card.info.imageId
                    }
                  />
                  <button className="text-green-700 font-bold bg-gray-200 shadow-sm p-2 mx-16 rounded-lg">
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default RestaurantMenuCategory;
