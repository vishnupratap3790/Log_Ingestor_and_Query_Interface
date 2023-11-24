// QueryPage.js
import React, { useState} from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import {
    Title,
    FormGroup,
    Label,
    Input,
    Button
  } from '../StyledComponents';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align:center;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  padding: 10px;
  text-align:center;
  border: 1px solid #ddd;
`;

const Logmessage = () => {
  const [message, setMessage] = useState('');
  const [queryResults, setQueryResults] = useState([]);
 
  const handlePerformQuery = async () => {
    try {
      // Perform the query by sending a request to the backend
      const response = await fetch(`/logs/searchbymessage?message=${message}`,{
        method: 'GET'
      });
      const data = await response.json();
      if(response.status===400) swal('Please Enter Message');
      else if(response.status===500) swal('Internal Server Error');
      else
        setQueryResults(data);
    } catch (error) {
      console.error('Error performing query:', error);
    }
  };
  const querystyle={
    padding: "20px",
    margin: "20px",
    width:"25%",
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 5px 50px rgba(0, 0, 0, 0.1)"
}
  return (
    <div>
      <Title style={{textAlign:"center"}}>Search for logs with specific Message</Title>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}> 
       <div style={querystyle}>
       <FormGroup>
          <Label>Message</Label>
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormGroup>
        <Button style={{width:"150px", backgroundColor:"green"}} onClick={handlePerformQuery}>Perform Query</Button>
      </div>
      </div>
      {queryResults.length > 0 && (
        <Table>
          <thead>
            <tr>
              <Th>Level</Th>
              <Th>Message</Th>
              <Th>Resource Id</Th>
              <Th>Span Id</Th>
              <Th>Trace Id</Th>
              <Th>Parent Resorce Id</Th>
              <Th>Commit</Th>
              <Th>Timestamp</Th>
              {/* Add more table headers based on your log structure */}
            </tr>
          </thead>
          <tbody>
            {queryResults.map((log, index) => (
              <tr key={index}>
                <Td>{log.level}</Td>
                <Td>{log.message}</Td>
                <Td>{log.resourceId}</Td>
                <Td>{log.spanId}</Td>
                <Td>{log.traceId}</Td>
                <Td>{log.metadata.parentResourceId}</Td>
                <Td>{log.commit}</Td>
                <Td>{log.timestamp1}</Td>
                {/* Add more table data based on your log structure */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Logmessage;
