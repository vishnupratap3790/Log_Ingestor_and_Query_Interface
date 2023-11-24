# Log Ingestor and Query Interface

This project implements a log ingestor system that efficiently handles vast volumes of log data and provides a user-friendly query interface for searching through logs.

## Table of Contents

- [How to Run the Project](#how-to-run-the-project)
- [System Design](#system-design)
- [Features Implemented](#features-implemented)
- [Identified Issues](#identified-issues)

## Prerequisites
- Node.js and npm installed
- MongoDB installed and running

## Install Dependencies
**For Backend** - `npm install`
**For Frontend** - `cd frontend` `npm install`

## Run the Project
**For Run Backend** - `npm start`
**For Run Frontend** - `cd frontend` `npm start`

## System Design
**For Backend** -Implemented using Node.js and Express. Uses MongoDB as the database for storing logs. The logs are ingested over HTTP on port 3000. 
**For Frontend** - Developed with React, providing a user interface for full-text search and log filtering based on various criteria.

## List of Features
**Log Ingestor**:
1) Mechanism to ingest logs in the provided format.
2) Scalability to handle high volumes of logs efficiently.
3) Mitigation of potential bottlenecks such as I/O operations, database write speeds, etc.
4) Logs are ingested via an HTTP server running on port 3000 by default.

**Query Interface**:
1) User interface (React) for full-text search across logs.
2) Filters based on:
    Level
    Message
    ResourceId
    Timestamp
    TraceId
    SpanId
    Commit
    Metadata.parentResourceId
3) Efficient and quick search results.

**Advanced Features**:
1) Search within specific date ranges.
2) Utilize regular expressions for search.
3) Allow combining multiple filters.
4) Provide real-time log ingestion and searching capabilities.

## Identified Issues
**Date Parsing**:
There is an issue with date parsing when searching logs based on timestamp. The system does not handle certain date formats correctly.
**UI Design**:
The user interface design could be improved for better user experience.

## Author
**LinkedIn** Click [Here](https://www.linkedin.com/in/vishnu-pratap-a423b8203) **@Vishnu Pratap**
