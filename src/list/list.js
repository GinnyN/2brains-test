import React, { useState, useEffect } from "react";
import ApiCall from "./service";
import { Container, Row, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import UserBox from "./userBox";

const List = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ApiCall().then((result) => setUsers(result.data.results)).finally(() => setLoading(false));
    return true;
  }, []);
  return (
    <Container fluid>
      {loading ?  <Spinner animation="grow" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner> : <Row>
        {users.length === 0 ? "No hay usuarios disponibles" :
          users.sort((u1,u2) => {
            if(u1.name.last > u2.name.last) return 1;
            return -1;
          }).map((u) => (
            <Col xs={12} sm={6} lg={4} xl={4}>
              <UserBox user={u} />
            </Col>
          ))
        }
      </Row>}
    </Container>
  );
};
export default List;