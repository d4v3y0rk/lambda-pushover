# lambda-pushover
##TL;DR
Use AWS Lambda to send pushover notifications. 
The event JSON looks like this:
```JSON
{
  "token": "your app token from pushover",
  "key": "your user key from pushover",
  "message": "your message to send"
}
```
##Usage
On OSX clone the repo then `npm i --save` and zip up the contents of the folder. 
Upload that to lambda and create a test event with the JSON. 
POW! You're done. 
