import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenuPage = () => {
  const { resId } = useParams();

  const resMenuData = useRestaurantMenu(resId);

  console.log(resMenuData);

  const categories =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(categories);
  //   const { name, costForTwoMessage, avgRatingString } =
  //     resMenuData.data.cards[2].card.card.info;
  return resMenuData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1 className="font-extrabold text-orange-950 text-center text-3xl my-6">
        {resMenuData?.data?.cards[2]?.card?.card?.info.name}
      </h1>
      <div className="border-2 border-gray-300 shadow-slate-600 shadow-lg w-6/12 m-auto p-3 ">
        <h2 className="m-1 font-semibold">
          ⭐ {resMenuData?.data?.cards[2]?.card?.card?.info.avgRatingString} (
          {resMenuData?.data?.cards[2]?.card?.card?.info.totalRatingsString}) •
          {"   "}
          {resMenuData?.data?.cards[2]?.card?.card?.info.costForTwoMessage}
        </h2>

        <h3 className="text-orange-600 text-base m-1">
          {resMenuData?.data?.cards[2]?.card?.card?.info.cuisines.join(", ")}
        </h3>
        <h3 className="m-1 text-gray-600">
          Located at {"  "}{" "}
          {resMenuData?.data?.cards[2]?.card?.card?.info.areaName}
        </h3>
        <h3 className="text-gray-500 m-1">
          {resMenuData?.data?.cards[2]?.card?.card?.info.sla.slaString} 🚴🏻‍♀️
        </h3>
      </div>
      <div>
        {categories.map((category) => (
          <RestaurantMenuCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
