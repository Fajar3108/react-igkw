import { FaTh, FaTv, FaBookmark } from "react-icons/fa";

function Tabs() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <a href="/" className="btn btn-link text-secondary">
        <FaTh className="mr-2" />
        POSTINGAN
      </a>
      <a href="/" className="btn btn-link text-secondary">
        <FaTv className="mr-2" />
        IGTV
      </a>
      <a href="/" className="btn btn-link text-secondary">
        <FaBookmark className="mr-2" />
        DITANDAI
      </a>
    </div>
  );
}

export default Tabs;
