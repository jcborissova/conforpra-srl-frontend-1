import useWOW from '../hooks/useWOW';
import { VerticalAlignTop, CreateNewFolder, Edit } from '@material-ui/icons';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { Col, Container, Row, Form, Input } from 'reactstrap';
import client from '../providers/api';
import { useState } from 'react';

const CapacitacionSection = ({
  render,
  capacitacion: { _id, name, description, picture },
  controls,
  archived,
}) => {
  const [edit, setEdit] = useState(false);

  const [training, setTraining] = useState({
    name,
    description,
    picture,
    status: 'visible',
  });

  async function makePostRequest(e) {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append('name', training.name);
    form_data.append('description', training.description);
    form_data.append('picture', training.picture);
    form_data.append('status', training.status);

    try {
      const response = await client.patch(`/api/trainings/${_id}`, form_data, {
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
    setTraining((training) => {
      const gestor = { ...training, [name]: value };
      return gestor;
    });
  };

  function archiveTraining(status) {
    const values = {
      status: status,
    };

    (async () => {
      try {
        const response = await client.patch(`/api/trainings/${_id}`, values);
        render();
      } catch (error) {
        console.error('Error while saving training', error);
      }
    })();
  }

  function deleteTraining() {
    (async () => {
      try {
        const response = await client.delete(`/api/trainings/${_id}`);
        render();
      } catch (error) {
        console.error('Error while deleting training', error);
      }
    })();
  }

  useWOW();
  return (
    <Container className="wow fadeIn">
      {edit ? (
        <Row className="mb-5">
          <Form className="flex flex-row">
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
                placeholder="Título del trainingo"
                name="name"
                required
                value={training.name}
                onChange={handleChange}
              />
              <Input
                type="textarea"
                placeholder="Escriba el detalle del trainingo"
                rows="8"
                cols="50"
                name="description"
                value={training.description}
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
              <Row>
                <Col xs="6" className="p-0">
                  <IconButton aria-label="edit" size="medium" color="inherit">
                    {archived ? (
                      <Edit fontSize="large" onClick={() => setEdit(true)} />
                    ) : (
                      <div />
                    )}
                  </IconButton>
                </Col>
                <Col xs="6" className="p-0">
                  <IconButton aria-label="edit" size="medium" color="inherit">
                    {archived ? (
                      <CreateNewFolder
                        onClick={() => archiveTraining('hidden')}
                        fontSize="large"
                      />
                    ) : (
                      <VerticalAlignTop
                        onClick={() => archiveTraining('visible')}
                        fontSize="large"
                      />
                    )}
                  </IconButton>
                </Col>
              </Row>
              <Col xs="6" className="p-2">
                <IconButton aria-label="delete" size="medium" color="inherit">
                  <DeleteIcon
                    onClick={() => deleteTraining()}
                    fontSize="large"
                  />
                </IconButton>
              </Col>
            </Col>
          ) : (
            ''
          )}
        </Row>
      )}
    </Container>
  );
};

export default CapacitacionSection;
