import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {NavLink} from "react-router-dom";
 
import {
  Container,
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Select,
  Button,
  AlertModal,
} from './StyledComponents';

const Home = () => {
  const [logData, setLogData] = useState({
    level: '',
    message: '',
    resourceId: '',
    timestamp: '',
    traceId: '',
    spanId: '',
    commit: '',
    metadata: {
      parentResourceId: '',
    },
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('metadata.')) {
      const metadataField = name.split('.')[1];
      setLogData((prevLogData) => ({
        ...prevLogData,
        metadata: {
          ...prevLogData.metadata,
          [metadataField]: value,
        },
      }));
    } else {
      setLogData((prevLogData) => ({
        ...prevLogData,
        [name]: value,
      }));
    }
  };

  const handleIngestion = async () => {
    try {
      const response = await fetch('/logs/ingest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData),
      });

      if (response.status === 201) {
        setAlertMessage('Log ingested successfully!');
        setShowAlert(true);
        // Optionally clear the form after ingestion
        setLogData({
          level: '',
          message: '',
          resourceId: '',
          timestamp: '',
          traceId: '',
          spanId: '',
          commit: '',
          metadata: {
            parentResourceId: '',
          },
        });
      } else {
        setAlertMessage('Error ingesting log. Please try again.');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Error ingesting log:', error);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };


  return (
    <Container>
      <FormContainer>
      <div style={{display: "flex", justifyContent:"space-around", alignContent:"center"}}>
        <Title>Log Ingestor</Title>
        <NavLink to="/query-page" style={{marginTop:"20px"}} >
        <Button style={{backgroundColor:"green"}}>Perform Multiple Queries</Button>
        </NavLink>
      </div>
        {<AlertModal show={showAlert} onHide={handleCloseAlert} centered>
          <Modal.Body>{alertMessage}</Modal.Body>
          <Modal.Footer>
            <Button style={alertMessage==='Log ingested successfully!'?{backgroundColor:"green", width:"120px",marginLeft:"30%"}:{backgroundColor:"red", width:"120px", marginLeft:"30%"}} variant="secondary" onClick={handleCloseAlert}>
              Close
            </Button>
          </Modal.Footer>
        </AlertModal>}
        <FormGroup>
          <Label>Level</Label>
          <Select
            name="level"
            value={logData.level}
            onChange={handleInputChange}
          > 
            <option>Select</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <Input
            type="text"
            placeholder="Enter log message"
            name="message"
            value={logData.message}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Resource Id</Label>
          <Input
            type="text"
            placeholder="Enter resource Id"
            name="resourceId"
            value={logData.resourceId}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Trace Id</Label>
          <Input
            type="text"
            placeholder="Enter trace Id"
            name="traceId"
            value={logData.traceId}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Span Id</Label>
          <Input
            type="text"
            placeholder="Enter span Id"
            name="spanId"
            value={logData.spanId}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Commit</Label>
          <Input
            type="text"
            placeholder="Enter commit"
            name="commit"
            value={logData.commit}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Parent Resource Id</Label>
          <Input
            type="text"
            placeholder="Enter parent resource Id"
            name="metadata.parentResourceId"
            value={logData.metadata.parentResourceId}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button onClick={handleIngestion}>Ingest Log</Button>
      </FormContainer>
    </Container>
     
  );
}

export default Home;
