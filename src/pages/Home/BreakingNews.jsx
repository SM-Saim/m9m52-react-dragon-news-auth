import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-slate-100 py-2">
      <button className="btn btn-secondary btn-sm ml-2 bg-red-500">
        Breaking News
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="#" className="mr-12">
          Historic Peace Accord Reached in Middle East
        </Link>
        <Link to="#" className="mr-12">
          Global Summit Addresses Climate Crisis
        </Link>
        <Link to="#" className="mr-12">
          Major Breakthrough in Cancer Research
        </Link>
        <Link to="#" className="mr-12">
          World Leaders Unite to Combat Pandemic
        </Link>
        Politics:
        <Link to="#" className="mr-12">
          Election Day: The Race for the Future
        </Link>
        <Link to="#" className="mr-12">
          Landmark Legislation Passes Senate
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
