import { useState } from 'react';
import upload from '../img/icons/save_alt_black_48dp.svg';
//import axios from 'axios';
//import config from '../config';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import client from '../providers/api';

const AddCapacitaciones = () => {
  const [pictureValue, setPictureValue] = useState();
  const [training, setTraining] = useState({
    name: '',
    description: '',
    picture: [],
  });

  async function makePostRequest(e) {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append('name', training.name);
    form_data.append('description', training.description);
    form_data.append('picture', training.picture);
    form_data.append('status', 'visible');

    try {
      const response = await client.post('/api/trainings', form_data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setTraining({});
      setPictureValue();
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === 'file') {
      setPictureValue(e.target.files[0].name);
      value = e.target.files[0];
    }
    setTraining((product) => {
      const gestor = { ...product, [name]: value };
      return gestor;
    });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="pb-5">
            <h4>Agregar Capacitación</h4>
          </Col>
        </Row>
        <Form className="flex flex-col gap-y-5">
          <FormGroup className="flex flex-col gap-y-2">
            <Label for="title">Título</Label>
            <Input
              type="text"
              placeholder="Título de la capacitación"
              name="name"
              required
              onChange={handleChange}
              value={training?.name ?? ''}
            />
          </FormGroup>
          <FormGroup className="flex flex-col gap-y-2">
            <Label for="testimonio">Capacitación</Label>
            <Input
              type="textarea"
              placeholder="Escriba el detalle de la capacitación"
              className=" resize-none"
              rows="8"
              cols="50"
              name="description"
              required
              onChange={handleChange}
              value={training?.description ?? ''}
            />
          </FormGroup>
          <Row>
            <Col md="6">
              <FormGroup className="flex flex-col gap-y-2">
                <Label for="ControlFile">Imágen de la capacitación</Label>
                <Container className="file-select border" id="Imagen">
                  <Row className="d-flex align-items-center">
                    <Col
                      xs={12}
                      sm={4}
                      className="d-flex justify-content-center py-4"
                    >
                      <img src={upload} alt="upload" />
                    </Col>
                    <Col
                      xs={12}
                      sm={8}
                      className="d-flex align-items-center p-4"
                    >
                      <label>
                        {' '}
                        Seleccionar imagen{' '}
                        <Input
                          className="hidden"
                          type="file"
                          name="picture"
                          required
                          onChange={handleChange}
                          accept="image/x-png,image/gif,image/jpeg"
                        />
                      </label>
                    </Col>
                  </Row>
                  <Col className="flex d-flex align-items-center pb-4 justify-center font-bold text-xl">
                    <Row>
                      <label>{pictureValue}</label>
                    </Row>
                  </Col>
                </Container>
              </FormGroup>
            </Col>
          </Row>
          <div className="pb-5">
            <Button type="submit" color="success" onClick={makePostRequest}>
              Agregar
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AddCapacitaciones;
