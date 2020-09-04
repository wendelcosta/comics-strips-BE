# Comics POC BE

This POC runs locally together with the FE implementaion or can be accessed on:

- Endpoint: <https://rwu38fvxlh.execute-api.ap-southeast-2.amazonaws.com/dev/comics/>

## Running localy

To run this POC localy follow the next steps:

1. Run `npm install -g serverless`
2. Run `sls offline` to run it locally and access from the browser
3. Run `sls invoke -f comics` to run it on the terminal

Obs: Note that to test the end to end flow the Front End needs to be initialised after, you can find more info in it's repo (<https://github.com/wendelcosta/comics-strips-FE>)

## Running tests

To run tests:

1. Run `sls invoke test -f comics`
