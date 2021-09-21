import { useState } from 'react';
import {
  Button,
  Modal as BModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
} from 'reactstrap';

import CloseIcon from '@material-ui/icons/Close';

const Modal = ({
  buttonLabel,
  modalBackgroundColor,
  modalBody,
  modalBody2,
  modalTitle,
  modalTitleColor,
  modalTitleWeight,
  modalFooterText,
  childrenFooter,
  closeIconColor,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="admin">
      <span onClick={toggle}>{buttonLabel}</span>
      <BModal isOpen={modal} toggle={toggle} centered size="lg">
        <ModalHeader
          toggle={toggle}
          charCode={<CloseIcon style={{ color: closeIconColor }} />}
          style={{ backgroundColor: modalBackgroundColor }}
        >
          <span
            style={{ color: modalTitleColor, fontWeight: modalTitleWeight }}
          >
            {modalTitle}
          </span>
        </ModalHeader>
        <Container>
          <Row className="px-3">
            <Col sm={modalBody2 ? 6 : 12} className="pt-4">
              <Row>
                <ModalBody>{modalBody}</ModalBody>
              </Row>
            </Col>
            {modalBody2 ? (
              <Col sm={6} className="pt-4">
                <Row>
                  <ModalBody>{modalBody2}</ModalBody>
                </Row>
              </Col>
            ) : (
              ''
            )}
          </Row>
        </Container>
        <ModalFooter className="justify-content-end">
          <Row>
            {modalFooterText ? (
              <>
                <Col sm="8" md="8" lg="10" className="py-3">
                  {modalFooterText}
                </Col>
                <Col sm="4" md="4" lg="2" className="text-right py-3">
                  <Button color="secondary" onClick={toggle}>
                    Cerrar
                  </Button>
                </Col>
              </>
            ) : (
              <Col>{childrenFooter}</Col>
            )}
          </Row>
        </ModalFooter>
      </BModal>
    </div>
  );
};

export default Modal;
