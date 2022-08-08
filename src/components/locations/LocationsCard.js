import { Link } from "react-router-dom";

export const LocationCard = ({ singleLocation }) => {
  return (
    <>
      <div>
        <Link to={`/locations/detail/${singleLocation.id}`}>
          <h3>{singleLocation.name}</h3>
        </Link>
        <p>{singleLocation.address}</p>
        <div></div>
      </div>
    </>
  );
};
