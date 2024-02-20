import { Modal, Button } from 'react-bootstrap';

export const ProjectModal = ({ title, description, show, handleClose, children }) => {
    return (
        <Modal show={show} dialogClassName="project-modal" onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

