import useWOW from '../hooks/useWOW';
import { VerticalAlignTop, CreateNewFolder, Edit } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Col, Container, Row } from 'reactstrap';

const ProductSection = ({
  product: { image, altimage, title, description },
  controls,
  archived,
}) => {
  useWOW();
  return (
    <Container className="wow fadeIn">
      <Row className="mb-5">
        <Col md="4" className="flex flex-col items-center">
          <Row>
            <Col xs="12" className="text-center">
              <img
                src={image}
                alt={altimage}
                className="img-fluid"
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '20px',
                }}
              />
            </Col>
          </Row>
        </Col>

        <div
          className={controls ? 'col-md-6' : 'col-md-8'}
          style={{ paddingTop: '20px' }}
        >
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>{title}</p>
          <p>{description}</p>
        </div>
        {controls ? (
          <Col
            md="2"
            className="d-flex justify-content-center align-items-center"
          >
            <Row>
              <Col xs="6" className="p-0">
                <IconButton aria-label="edit" size="medium" color="inherit">
                  <Edit fontSize="large" />
                </IconButton>
              </Col>
              <Col xs="6" className="p-0">
                <IconButton aria-label="edit" size="medium" color="inherit">
                  {archived ? (
                    <CreateNewFolder fontSize="large" />
                  ) : (
                    <VerticalAlignTop fontSize="large" />
                  )}
                </IconButton>
              </Col>
            </Row>
          </Col>
        ) : (
          ''
        )}
      </Row>
    </Container>
  );
};

export default ProductSection;
