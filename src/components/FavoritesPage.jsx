import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HeartFill } from "react-bootstrap-icons";
import { removeFromFavoritesAction } from "../redux/actions";

const FavoritesPage = () => {
  const navigate = useNavigate();
  const favs = useSelector((state) => state.jobs.favorites);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favorites</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto"></Col>
        <Col xs={10} className="mx-auto">
          <ListGroup>
            {favs.map((fav, i) => (
              <ListGroup.Item className="mb-3" key={i}>
                <HeartFill
                  color="pink"
                  onClick={() => dispatch(removeFromFavoritesAction(fav))}
                />
                <Link to={`/${fav}`}>{fav}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesPage;
