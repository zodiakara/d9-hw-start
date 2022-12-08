import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../redux/actions";

const Job = ({ data }) => {
  const favs = useSelector((state) => state.jobs.favorites);

  const dispatch = useDispatch();

  const isFav = favs.includes(data.company_name);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={1}>
        {isFav ? (
          <HeartFill
            color="pink"
            onClick={() =>
              dispatch(removeFromFavoritesAction(data.company_name))
            }
          />
        ) : (
          <Heart
            color="pink"
            onClick={() => dispatch(addToFavoritesAction(data.company_name))}
          />
        )}
      </Col>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
