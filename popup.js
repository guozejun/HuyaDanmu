// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let startBtn = document.getElementById('startDanmu');
let inputVal = document.getElementById('text-input');
let checkBox = document.getElementById('checkboxThreeInput');
let flag = "normal";

String.prototype.format = function () {
    //将arguments转化为数组（ES5中并非严格的数组）
    var args = Array.prototype.slice.call(arguments);
    var count = 0;
    //通过正则替换%s
    return this.replace(/%s/g, function (s, i) {
        return args[count++];
    });
}

startBtn.onclick = function (element) {
    let tempVal = inputVal.value;
    let tempLen = tempVal.length;
    while(tempVal.length + tempLen <= 30){
        tempVal += inputVal.value;
    }
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'loop("%s", "%s")'.format(tempVal, flag)});
    });
    console.log(inputVal.value);
};

checkBox.onclick = function (element) {
    if(checkBox.checked){
        console.log("checked");
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                { code: 'stopSendDanmu()'});
        });
        flag = "repeat";
    } else {
        console.log("nop");
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                { code: 'stopSendDanmu()'});
        });
        flag = "normal";
    }
}