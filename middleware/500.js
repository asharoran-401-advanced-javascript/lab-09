/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
'use strict';

function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Generic Server Error!';
  res.json({ error: err });
}

module.exports = errorHandler;