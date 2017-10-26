'use strict';

exports.getForms = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'This is a LIST operation, return all forms'
  });
};

exports.getForm = (event, context, callback) => {
  let id = event.pathParameters.form || false;
  callback(null, {
    statusCode: 200,
    body: 'This is a READ operation on form ID ' + id
  });
};

exports.postForm = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'This is a CREATE form operation'
  });
};

exports.putForm = (event, context, callback) => {
  let id = event.pathParameters.form || false;
  callback(null, {
    statusCode: 200,
    body: 'This is a UPDATE operation on form ID ' + id
  });
};

exports.deleteForm = (event, context, callback) => {
  let id = event.pathParameters.form || false;
  callback(null, {
    statusCode: 200,
    body: 'This is a DELETE operation on form ID ' + id
  });
};
