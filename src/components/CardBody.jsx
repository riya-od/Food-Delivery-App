import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const CardBody = () => {
  const [searchItem, setSearchItem] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
    console.log(restaurantList);
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //   const handleSearchRestaurant = () => {
  //     const filteredRestaurantList = restaurantList.filter((restaurant) => {
  //       restaurant.info.name == searchItem;
  //     });
  //   };
  //restaurantList.length === 0

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="m-7 p-7 align-middle bg-orange-50 flex justify-evenly">
        <div>
          <input
            placeholder="Search restaurants"
            className="mx-2 my-2 border-1 "
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          ></input>
          <button
            className="py-2 px-5 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-700 focus:outline-2"
            onClick={() => {
              console.log(searchItem);
              let filteredRes = restaurantList.filter((res) => {
                console.log(
                  res.info.name.toLowerCase().includes(searchItem.toLowerCase())
                );
                return res.info.name
                  .toLowerCase()
                  .includes(searchItem.toLowerCase());
              });
              console.log(filteredRes);
              setRestaurantList(filteredRes);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="py-2 px-5 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-700 focus:outline-2"
            onClick={() => {
              const filteredRes = restaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setRestaurantList(filteredRes);
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-start mt-6 gap-6">
        {restaurantList.map((restaurant) => (
          <Link
            className="min-w-0"
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            ></RestaurantCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardBody;
