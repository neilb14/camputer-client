#! /usr/local/bin/fish
export REACT_APP_CAMPUTER_SERVICE_URL=http://192.168.0.198/api
npm run build
scp -r build pi@192.168.0.198:camputer-client
export REACT_APP_CAMPUTER_SERVICE_URL=http://127.0.0.1:5000
