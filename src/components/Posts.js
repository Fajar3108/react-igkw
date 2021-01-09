import { Image } from "react-bootstrap";
import "../css/styles.css";

function Posts(props) {
  return <Image src={props.image} width="30%" className="PostImage my-3" />;
}

export default Posts;
