//https://github.com/awslabs/serverless-application-model/blob/master/examples/2016-10-31/api_backend/index.js

'use strict';

exports.getSubmissions = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'This is a LIST operation, return all submissions'
  });
};

exports.getSubmission = (event, context, callback) => {
  const id = event.pathParameters.submission || false;
  callback(null, {
    statusCode: 200,
    body: 'This is a READ operation on submission ID ' + id
  });
};

exports.postSubmission = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    //body: 'This is a CREATE submission operation'
    body: JSON.stringify({ sid: 1000, message: 'Submission created' })
  });
};

exports.putSubmission = (event, context, callback) => {
  const id = event.pathParameters.submission || false;
  callback(null, {
    statusCode: 200,
    body: 'This is a UPDATE operation on submission ID ' + id
  });
};

exports.deleteSubmission = (event, context, callback) => {
  const id = event.pathParameters.submission || false;
  callback(null, {
    statusCode: 200,
    body: 'This is a DELETE operation on submission ID ' + id
  });
};
