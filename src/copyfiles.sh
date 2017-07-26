#!/bin/bash
mkdir -p build/styles
mkdir -p build/scripts
cp ./public/styles/* ./build/styles/
cp ./node_modules/@blueprintjs/core/dist/blueprint.css ./build/styles/
cp -r ./node_modules/@blueprintjs/core/resources ./build/
cp ./node_modules/video.js/dist/video-js.css ./build/styles/
cp ./node_modules/video.js/dist/video.min.js ./build/scripts/
cp ./node_modules/videojs-youtube/dist/Youtube.min.js ./build/scripts/
cp ./node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.min.js ./build/scripts/
cp ./node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.min.js ./build/scripts/
