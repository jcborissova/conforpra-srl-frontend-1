import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Input,
  Row,
} from 'reactstrap';
import PaginatedView from '../components/PaginatedView';
import ProductSection from '../components/ProductSection';
import SearchIcon from '@material-ui/icons/Search';
import ClearAllIcon from '@material-ui/icons/ClearAll';

const products = require('../data/products.json');
var filterObj = products.filter(function (e) {
  return e.status === true;
});

const ListSearchProducts = () => {
  return (
    <div>
      <div className="my-5 paginationTop">
        <Container>
          <Form>
            <Row>
              <Col xs={12} md={4} lg={3} className="py-2">
                <Input
                  type="search"
                  name="Titulo"
                  id="Search"
                  placeholder="Titulo de producto"
                />
              </Col>
              <Col xs={12} md={4} lg={2} className="py-2">
                <Row>
                  <Col xs={6} sm={6} md={12}>
                    <ButtonGroup>
                      <Button type="button" color="success">
                        <span>
                          <SearchIcon />
                        </span>
                      </Button>
                      <Button type="reset" outline color="success">
                        <span>
                          <ClearAllIcon />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <div className="py-5">
        <PaginatedView
          items={filterObj}
          renderItem={(product) => (
            <ProductSection product={product} controls archived />
          )}
        />
      </div>
    </div>
  );
};

export default ListSearchProducts;
