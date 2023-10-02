---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

# Plugin

Plugin allows businesses to build web or app as a plugin extension which come with numbers of the browser, native functionality and the OpenAPI. This also allow plugin developer to authorize with the standard merchant information via a signed request and with authorization code access token flow to make plugin to be authenticated.

:::info
Plugin will be publicly allow for all merchants to install, if you need to build a private plugin you will need add some validation when you're decoding the signed request.
:::

<img src="/img/plugin/example.png"  />

## Webview Setup

Webview will have to handle the `postMessage` from our application and using the signed request from us will need to pass it to your backend to proceed with decoding, verifying and your own business logic. 

### Initialize Handshake

While initialize / rendering the view our application will send a signed request to you and that's mean initialize is completed after that you will able proceed your own views. Example of VanillaJS code to initialize the receiver and also sender, once initialize complete you will be able communicate with our application. For the message handler to handling the response from our application please refer [Message Handler](#request--message-handler).

```js
var initialized = false;
var signedRequest = "";
var appWindow = null;
var appOrigin = null
var sendMessage = function (message) {
    appWindow.postMessage(JSON.stringify(message), appOrigin);
}

function onReceiveMessage(data) {
    // your business logic for the response will be here
}

window.addEventListener('message', function (event) {
    if (initialized) {
        return onReceiveMessage(event.data)
    }

    initialized = true
    signedRequest = event.data
    appWindow = event.source
    appOrigin = event.origin
    sendMessage({ action: 'FINISH_HANDSHAKE' })
})
```

## Request & Message Handler

With the request communication with our application you're able to utilize the browser features like cookies, local storage, session storage and mores to provide better experience for your development so you don't need to worried about it might not working in webview.

Some of the request is one-way action so you will be expected no response from our application.

### Finish Handshake

To inform our application the handshake step is completed.

**Request (postMessage):**

```json
{
    "action": "FINISH_HANDSHAKE"
}
```

### Get Signed Request

To get the signed request. Most of the time you will get it when initialize so this function will be rarely use.

**Request (postMessage):**

```json
{
    "action": "REQUEST_SIGNED_REQUEST",
}
```

**Response:**

```json
{
    "action": "REQUEST_SIGNED_REQUEST",
    "data": "_FuBOoZR8iGNThRTj9FpEfcBPI4Jhh6ZGPqMU76HnSA=.eyJtZXJjaGFudElkIjoiNDExODE2NTIwMzY3OTY2ODg4NSIsIm5vbmNlU3RyIjoiMTY4ODEwMjQwMiIsInBsYXRmb3JtIjoiV0VCX1BPUlRBTCIsInJlZmVyZW5jZUlkIjoiODE5MDY1NjA0NTE2NjIzMjcxNiIsInJlZmVyZW5jZUxhYmVsIjoiREVWIFJNUyIsInJlZmVyZW5jZVJvbGUiOiJPV05FUiIsInJlZmVyZW5jZVR5cGUiOiJVU0VSIiwic3RvcmVJZHMiOltdLCJzdWJzY3JpcHRpb25FeHBpcmVkQXQiOiIyMDUwLTEyLTMxVDIzOjU5OjU5WiIsInN1YnNjcmlwdGlvblN0YXR1cyI6IkFDVElWRSIsInRpbWVzdGFtcCI6IjE2ODgxMDI0MDIiLCJ1cmwiOiJodHRwOi8vMTI3LjAuMC4xOjU1MDAvaW5kZXguaHRtbCIsInVzZXJDb3VudHJ5Q29kZSI6IjYwIiwidXNlcklkIjoiODE5MDY1NjA0NTE2NjIzMjcxNiIsInVzZXJQaG9uZSI6IjEyODUzNDQ4OCJ9"
}
```

### Open New Link

To open up new link url on user browser.

**Request (postMessage):**

```json
{
    "action": "WHATS_APP_LINK",
    "message": "https://google.com"
}
```

### Toggle Loader

To trigger loader, will work as on/off strategy.

**Request (postMessage):**

```json
{
    "action": "TOGGLE_LOADER"
}
```