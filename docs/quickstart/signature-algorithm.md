---
id: signature-algorithm
title: Signature Algorithm
sidebar_label: Signature Algorithm
---

### Using RM Merchant Portal to get Signature

### Step 1 : Create New Application

Go to **Merchant Portal** > **Application** > **Developer** tab (the last one) and you will see the following page:<br/>

![image](/img/developer-application/1.png)<br />

### Step 2 : Obtain 'clientID' and 'cilientSecret'

Click on the <b>Application</b> created in Step 1 , you may edit and update relevant information here :
<br/>

If you would like to disable the application , simple toggle **"ON/OFF"** switch button at Top Right.
<br/>

![image](/img/developer-application/4.png)

Click on **Show** to reveal your **clientSecret**:

![image](/img/developer-application/5.png)

<hr/>

### Generate RSA KEYS

If you need help to generate key, go to **Merchant portal > Developer > Application > Generator RSA Key** Suggested key size: 2048 Bit. Keep your private keys in safe place! Or use our **Generate RSA key** tool.

`Private Keys` are required to sign API request(s) contents. `Public Keys` are used to verify content received.

![image](/img/developer-application/rks-key.png)

<hr/>

### Optional Tool: Signature Debugger

`Public Keys` needs to have be wrap as following :

![image](/img/developer-application/9.png)<br/>
For security purposes, we enhanced our authentication flow and Open API by adding layers of encryption to our endpoints. You may use our Signature Debugger
You may develop your own encryption tool on your desired application directly, or you may use our Signature Debugger to do signing/verification using private/public keys as obtained from previous step.
Refer more on `Signature Debugger`

![image](/img/developer-application/signature-debug.png)

<!-- `Public Keys` needs to have be wrap as following :
![image](/img/developer-application/9.png)

**Optional Tool: Signature Debugger**<br />

For security purposes, we enhanced our authentication flow and Open API by adding layers of encryption to our endpoints. You may use our Signature Debugger
You may develop your own encryption tool on your desired application directly, or you may use our Signature Debugger to do signing/verification using private/public keys as obtained from previous step.
Refer more on `Signature Debugger`

![image](/img/developer-application/10.png) -->
