#!/bin/sh
pushd .
cd $ANDROID_HOME/tools
emulator @Base_AVD& 
popd