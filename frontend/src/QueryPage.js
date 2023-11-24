// QueryPage.js
import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
 
import {
  Title, 
  Button,
} from './StyledComponents';
import Metadata from './Metadata';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  padding: 20px;
  margin: 20px;
  width:40%;
  display:flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QueryPage = () => {
  const queries=[
    { title: 'Query 1', description: 'Perform query based on level' , link:'/loglevel'},
    { title: 'Query 2', description: 'Search for logs with specific message' , link:'/logmessage'},
    { title: 'Query 3', description: 'Retrieve logs related to a specific resource ID', link:'/Logresourceid' },
    { title: 'Query 4', description: 'Retrieve logs related to a specific Trace ID' , link:'/Logtraceid'},
    { title: 'Query 5', description: 'Retrieve logs related to a specific Span ID', link:'/Logspanid' },
    { title: 'Query 6', description: 'Retrieve logs related to a specific Parent Resource ID', link:'/Logparentresourceid' },
    { title: 'Query 7', description: 'Retrieve logs using Commit' , link:'/Logcommit'},
    { title: 'Query 8', description: 'Retrieve logs related to a specific Timestamp', link:'/Logtimestamp' },
    { title: 'Query 9', description: 'Search by combining multiple filters', link:'/Logmultiplefilter' },
    { title: 'Query 10', description: 'search within specific Date Ranges', link:'/Logdaterange' },
  ];

  return (
    <div>
       <Metadata title="Query Interface" />
      <div style={{display: "flex", justifyContent:"space-around", alignContent:"center"}}>
        <Title>Query Page</Title>
        <NavLink to="/" style={{marginTop:"15px", width:"150px", padding:"20px"}} >
        <Button style={{backgroundColor:"green"}}>Ingest Logs Here</Button>
        </NavLink>
      </div>
      <CardContainer>
        {queries.map((query, index) => (
          <Card key={index}>
            <h2>{query.title}</h2>
            <p>{query.description}</p>
            <NavLink to={query.link}>
             <Button style={{width:"200px", backgroundColor:"grey"}}>Perform Query</Button>
            </NavLink>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default QueryPage;
