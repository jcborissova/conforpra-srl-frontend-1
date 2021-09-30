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

const FormData = require('form-data');

const AddCapacitaciones = () => {
  const [gestorSeleccionado, setGestorSeleccionado] = useState({
    Titulo: '',
    Testimonio: '',
    Imagen: '',
  });

  async function makePostRequest(e) {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append('title', gestorSeleccionado.Titulo);
    form_data.append('description', gestorSeleccionado.Testimonio);
    form_data.append('image', gestorSeleccionado.Imagen);

    //const res = await axios.post(config.baseURL + '/api/products', form_data, {
    //  headers: {
    //    'Content-Type': 'multipart/form-data',
    //  },
    //});

    //const data = res.data;
  }

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === 'file') {
      value = e.target.files[0];
    }
    setGestorSeleccionado((gestorSeleccionado) => {
      const gestor = { ...gestorSeleccionado, [name]: value };
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
              name="Titulo"
              placeholder="Título de la capacitación"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="flex flex-col gap-y-2">
            <Label for="testimonio">Capacitación</Label>
            <Input
              type="textarea"
              name="Testimonio"
              placeholder="Escriba el detalle de la capacitación"
              rows="8"
              cols="50"
              onChange={handleChange}
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
                      <Input
                        type="file"
                        id="ControlFile"
                        name="Imagen"
                        onChange={handleChange}
                        accept="image/x-png,image/gif,image/jpeg"
                      />
                    </Col>
                  </Row>
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
