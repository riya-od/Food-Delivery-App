const RestaurantCard = ({ resData }) => {
  const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRatingString } =
    resData.info;

  const { slaString } = resData.info.sla;

  return (
    <div className=" bg-slate-200 px-3 py-3 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-500 h-full w-full">
      {/* <div className="w-full h-full"> */}
      <img
        className="w-[20rem] h-[20rem] p-3 rounded-[2rem]"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />

      <div className="w-min p-3">
        <h1 className="text-xl bold">{name}</h1>
        <h2 className="text-slate-600">
          ⭐ {avgRatingString + " " + slaString}
        </h2>
        <h2 className="text-slate-600 ">{cuisines.join(",")}</h2>
        <h2 className="text-slate-600">{costForTwo}</h2>
      </div>
      {/* </div> */}
    </div>
  );
};

export default RestaurantCard;
