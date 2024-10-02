import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import Confetti from 'react-confetti';

function EndModal({ showModal }) {

  // Function to refresh the browser
  const refreshPage = () => {
    window.location.reload();
  };

 return (
    <>
      {showModal && <Confetti colors={['#1E90FF','#87CEFA', '#000000']} />} {/* Blue and Black Confetti */}

      <Modal
        show={showModal}
        centered
        dialogClassName="custom-modal" // Add custom class for styling
      >
      
        <Modal.Body className="modal-body-custom">
          <Card className="text-center p-3 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#333', color: '#fff' }}>
            <Card.Body>
            <Card.Title as="h3" className="text-light">Συγχαρητήρια</Card.Title>
              <Card.Text as="h5" className="mb-4">
                Ολοκλήρωσες επιτυχώς τον αλγόριθμο κρυπτογράφισης RSA!
              </Card.Text>
              <Button variant="outline-light" onClick={refreshPage}>
                Close
              </Button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      {/* Custom styles for modal */}
      <style jsx="true">{`
        .custom-modal .modal-content {
          background-color: #222;  /* Dark background */
          border: 2px solid #00BFFF;  /* Light blue outline */
          border-radius: 15px;
          color: white;
        }

        .modal-header-custom {
          background-color: #222;  /* Dark background for header */
          border-bottom: 1px solid #00BFFF;  /* Light blue outline for header */
          color: #00BFFF;
        }

        .modal-body-custom {
          background-color: #222;  /* Dark background for body */
          color: white;
        }

        .btn-outline-light {
          border-color: #00BFFF;  /* Light blue button border */
          color: #00BFFF;  /* Light blue button text */
        }

        .btn-outline-light:hover {
          background-color: #00BFFF;
          color: #222;
        }
      `}</style>
    </>
  );
}

export default EndModal;
