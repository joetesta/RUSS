#!/usr/bin/env node
// RokuDevelopers Useful Slack Shortcuts : aka RUSS
// based on slack-genius https://github.com/mager/slack-genius/
// 

// Define the URLs used in responses: //
var search_docs_url = 'https://developer.roku.com/search?qs=';
var forum_url = 'https://community.roku.com/t5/forums/searchpage/tab/message?q=';
var bug_url = 'https://community.roku.com/t5/Roku-Developer-Program/bd-p/roku-developer-program';
var feature_url = 'https://community.roku.com/t5/Suggest-a-Feature/bd-p/Wishlist';

// Set up listening server on port 8081: //
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 8081));

app.get('/', function(req, res){
  res.send('It works! Hello, world.   -RokuDevelopers Useful Slack Shortcuts, aka RUSS');
});


// search-docs: https://developer.roku.com/search?qs=[### Search text ###]
app.post('/docs', function(req, res){
//  console.log('Node app got docs search, input req text: ', req.body.text);
  var output_url = search_docs_url + encodeURIComponent(req.body.text);
  output_to_channel(output_url, res)
});


// forum-search: https://community.roku.com/t5/forums/searchpage/tab/message?q=[### Search text ###]
app.post('/forum', function(req, res){
//  console.log('Node app got forum search, input req text: ', req.body.text);
  var output_url = forum_url + encodeURIComponent(req.body.text);
  output_to_channel(output_url, res)
});


// Bug Report: https://community.roku.com/t5/Roku-Developer-Program/bd-p/roku-developer-program
app.post('/bug-report', function(req, res){
//  console.log('Node app got Bug report request.');
  output_to_channel(bug_url, res)
});


// Feature Request: https://community.roku.com/t5/Suggest-a-Feature/bd-p/Wishlist
app.post('/feature', function(req, res){
//  console.log('Node app got feature request.');
  output_to_channel(feature_url, res)
});

function output_to_channel(output, res) {
  var body = {
    response_type: "in_channel",
    text: output
  };
  res.send(body);
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
