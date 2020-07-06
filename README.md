## RUSS RokuDevelopers Useful Slack Shortcuts

To install: make sure node is installed, then install express:
> npm install express

Copy russ.js into the folder and run:
> node russ.js

You may need to open up your firewall(s) to allow traffic to and from port 8081.
If the port (8081) is already in use, set a different port.

Set up your Slack slash commands:
https://api.slack.com/apps/**********/slash-commands

for example:
Command: /russ-docs
Request URL: http://host.example.com:8081/docs
Short Description: Search SDK docs
Usage Hint: Enter the string to search
