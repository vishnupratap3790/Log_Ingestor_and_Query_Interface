const express = require('express');
const router = express.Router();
const Log = require('../models/Log');
 
router.post('/ingest', async (req, res) => {
  try {
    const logData = req.body;
    const log = new Log({...logData, timestamp : new Date().toLocaleDateString().replaceAll('/', '-'), timestamp1: new Date().getTime()});
    await log.save();
    res.status(201).json({ message: 'Log ingested successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/searchbylevel', async (req, res) => {
  try {
    const { level } = req.query;
    if (!level) {
      return res.status(400).json({ error: 'Level parameter is required.' });
    }
    // const query = { level: { $regex: new RegExp(level, 'i') } }; // Case-insensitive search

    const logs = await Log.find({ level: { $regex: new RegExp(level, 'i') }});
    res.json(logs);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/searchbymessage', async (req, res) => {
  try {
    const { message } = req.query;
    if (!message) {
      return res.status(400).json({ error: 'Message parameter is required.' });
    }

    const logs = await Log.find({ message: { $regex: new RegExp(message, 'i') } });
    res.json(logs);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/searchbyresourceid', async (req, res) => {
  try {
    const {resourceId } = req.query;
    if (!resourceId) {
      return res.status(400).json({ error: 'Resource ID parameter is required.' });
    }

    const logs = await Log.find({ resourceId: { $regex: new RegExp(resourceId, 'i') } });
    res.json(logs);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/searchbytraceId', async (req, res) => {
  try {
    const {traceId } = req.query;
    if (!traceId) {
      return res.status(400).json({ error: 'Trace ID parameter is required.' });
    }

    const logs = await Log.find({ traceId: { $regex: new RegExp(traceId, 'i') } });
    res.json(logs);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/searchbyspanId', async (req, res) => {
  try {
    const {spanId } = req.query;
    if (!spanId) {
      return res.status(400).json({ error: 'Span ID parameter is required.' });
    }

    const logs = await Log.find({ spanId: { $regex: new RegExp(spanId, 'i') } });
    res.json(logs);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/searchbycommit', async (req, res) => {
  try {
    const {commit } = req.query;
    if (!commit) {
      return res.status(400).json({ error: 'Commit parameter is required.' });
    }

    const logs = await Log.find({ commit: { $regex: new RegExp(commit, 'i') } });
    res.json(logs);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/searchbytimestamp', async (req, res) => {
  try {
    const {timestamp } = req.query;
    if (!timestamp) {
      return res.status(400).json({ error: 'Timestamp parameter is required.' });
    }
    const logs = await Log.find({timestamp});
    res.json(logs);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/searchbyparentResourceId', async (req, res) => {
  try {
    const {parentResourceId } = req.query;
    if (!parentResourceId){
      return res.status(400).json({ error: 'Parent Resource Id parameter is required.' });
    }
    const query = {};  
    query['metadata.parentResourceId']=  {$regex: new RegExp(parentResourceId, 'i') }
    const logs = await Log.find(query);
    res.json(logs);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/searchbymultiplefilter', async (req, res) => {
  try {
    const {level, message, resourceId, traceId} = req.query;
    if (!level || !message || !resourceId || !traceId){
      return res.status(400).json({ error:  'All parameter is required' });
    }
    const query = {};  
    query.level=  {$regex: new RegExp(level, 'i') }
    query.message=  {$regex: new RegExp(message, 'i') }
    query.resourceId=  {$regex: new RegExp(resourceId, 'i') }
    query.traceId=  {$regex: new RegExp(traceId, 'i') }
    const logs = await Log.find(query);
    res.json(logs);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/searchbydaterange', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    if (!startDate || !endDate){
      return res.status(400).json({ error:  'Both parameter is required' });
    }
    const query = {};
    const date1=new Date(startDate);
    const date2=new Date(endDate);
    query.timestamp1 = { $gte: date1, $lte: date2};

    const logs = await Log.find(query);
    res.json(logs);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
