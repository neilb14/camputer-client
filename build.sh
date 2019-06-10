#! /usr/local/bin/fish
export REACT_APP_CAMPUTER_SERVICE_URL=http://192.168.0.12:8080
npm run build
export REACT_APP_CAMPUTER_SERVICE_URL=http://127.0.0.1:5000
scp -r build pi@192.168.0.12:camputer-client
