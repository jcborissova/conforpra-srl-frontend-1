import useWOW from '../hooks/useWOW';
import { VerticalAlignTop, CreateNewFolder, Edit } from '@material-ui/icons';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { Col, Container, Row } from 'reactstrap';
import client from '../providers/api';
import { useState } from 'react';
import { Form, Input } from 'reactstrap';

const ProductSection = ({
  render,
  product: { _id, name, description, picture },
  controls,
  archived,
}) => {
  const [edit, setEdit] = useState(false);

  const [product, setProduct] = useState({
    name,
    description,
    picture,
    status: 'visible',
  });

  async function makePostRequest(e) {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append('name', product.name);
    form_data.append('description', product.description);
    form_data.append('picture', product.picture);
    form_data.append('status', product.status);

    try {
      const response = await client.patch(`/api/products/${_id}`, form_data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      render();
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === 'file') {
      value = e.target.files[0];
    }
    setProduct((product) => {
      const gestor = { ...product, [name]: value };
      return gestor;
    });
  };

  function archiveProduct(status) {
    const values = {
      status: status,
    };

    (async () => {
      try {
        const response = await client.patch(`/api/products/${_id}`, values);
        render();
      } catch (error) {
        console.error('Error while saving product', error);
      }
    })();
  }

  function deleteProduct() {
    (async () => {
      try {
        const response = await client.delete(`/api/products/${_id}`);
        render();
      } catch (error) {
        console.error('Error while deleting product', error);
      }
    })();
  }

  useWOW();
  return (
    <Container className="wow fadeIn">
      {edit ? (
        <Row className="mb-5">
          <Form className="flex sm:flex-row flex-col">
            <Col md="4" className="flex flex-col items-center ">
              <Row className="h-full ">
                <Col
                  xs="12"
                  className="flex flex-col h-full items-center justify-center gap-8"
                >
                  <img
                    src={picture}
                    alt={picture}
                    className="img-fluid"
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '20px',
                    }}
                  />
                  <Input
                    type="file"
                    name="picture"
                    required
                    onChange={handleChange}
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </Col>
              </Row>
            </Col>

            <div
              className={`${
                controls ? 'col-md-6' : 'col-md-8'
              } flex flex-col gap-2`}
              style={{ paddingTop: '20px' }}
            >
              <Input
                type="text"
                placeholder="Título del producto"
                name="name"
                required
                value={product.name}
                onChange={handleChange}
              />
              <Input
                type="textarea"
                placeholder="Escriba el detalle del producto"
                rows="8"
                cols="50"
                name="description"
                value={product.description}
                required
                onChange={handleChange}
                className="resize-none"
              />
            </div>
            <Col
              md="2"
              className="d-flex justify-content-center align-items-center"
            >
              <Row>
                <Col xs="6" className="p-0">
                  <IconButton aria-label="edit" size="medium" color="inherit">
                    <SaveIcon fontSize="large" onClick={makePostRequest} />
                  </IconButton>
                </Col>
                <Col xs="6" className="p-0">
                  <IconButton aria-label="edit" size="medium" color="inherit">
                    <CancelIcon
                      onClick={() => setEdit(false)}
                      fontSize="large"
                    />
                  </IconButton>
                </Col>
              </Row>
            </Col>
          </Form>
        </Row>
      ) : (
        <Row className="mb-5">
          <Col md="4" className="flex flex-col items-center">
            <Row>
              <Col xs="12" className="text-center">
                <img
                  src={picture}
                  alt={picture}
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
            <p style={{ fontWeight: 'bold', fontSize: '15px' }}>{name}</p>
            <p>{description}</p>
          </div>
          {controls ? (
            <Col
              md="2"
              className="d-flex justify-content-center align-items-center"
            >
              <Row class="flex flex-row items-center ">
                <Col className="flex flex-row gap-2 p-0">
                  <IconButton aria-label="edit" size="medium" color="inherit">
                    {archived ? (
                      <Edit fontSize="large" onClick={() => setEdit(true)} />
                    ) : (
                      <div />
                    )}
                  </IconButton>
                  <IconButton
                    aria-label="archive"
                    size="medium"
                    color="inherit"
                  >
                    {archived ? (
                      <CreateNewFolder
                        onClick={() => archiveProduct('hidden')}
                        fontSize="large"
                      />
                    ) : (
                      <VerticalAlignTop
                        onClick={() => archiveProduct('visible')}
                        fontSize="large"
                      />
                    )}
                  </IconButton>
                  <IconButton aria-label="felete" size="medium" color="inherit">
                    <DeleteIcon
                      onClick={() => deleteProduct()}
                      fontSize="large"
                    />
                  </IconButton>
                </Col>
              </Row>
            </Col>
          ) : (
            ''
          )}
        </Row>
      )}
    </Container>
  );
};

export default ProductSection;
