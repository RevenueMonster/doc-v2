---
id: signature-algorithm
title: Signature Algorithm
sidebar_label: Signature Algorithm
---

### Using RM Merchant Portal to get Signature

<details open>
  <summary>
    <b>Step 1 : Create New Application</b>
  </summary>
 Go to <b>Application</b> > <b>Developer</b> tab (the last one) and you will see the following page:<br/>

![image](/img/developer-application/1.png)<br />

</details>

<details >
  <summary>
    <b>Step 2 :  Obtain 'clientID' and 'cilientSecret'</b>
  </summary>
Click on the <b>Application</b> created in Step 1 , you may edit and update relevant information here :
<br/>
<br/>

If you would like to disable the application , simple toggle **"ON/OFF"** switch button at Top Right.
<br/>

![image](/img/developer-application/4.png)

Click on **Show** to reveal your **clientSecret**:

![image](/img/developer-application/5.png)

</details>

<details >
  <summary>
    <b>Step 3 : Product Settings </b>
  </summary>

**Products** tab in sub-menu and choose desired product to set up :

![image](/img/developer-application/6.png)

For **Loyalty and Social Media** features, you will need to input a **webhook URL** as below :

![image](/img/developer-application/7.png)

On **Payment** feature , besides **wehbook URL**, system will show you `Server Public Key` while you are required to provide `Client Public Key` :

![image](/img/developer-application/8.png)

</details>

<details open>
  <summary>
    <b>Generate RSA KEYS</b>
  </summary>

If you need help to generate key, kindly go to **Merchant portal > Developer > Application > Generator RSA Key** Suggested key size: 2048 Bit. Keep your private keys in safe place! Or use our **Generate RSA key** tool.

`Private Keys` are required to sign API request(s) contents. `Public Keys` are used to verify content received.

![image](/img/developer-application/rks-key.png)

</details>

<details open>
  <summary>
    <b>Optional Tool: Signature Debugger</b>
  </summary>

`Public Keys` needs to have be wrap as following :

![image](/img/developer-application/9.png)<br/>
For security purposes, we enhanced our authentication flow and Open API by adding layers of encryption to our endpoints. You may use our Signature Debugger
You may develop your own encryption tool on your desired application directly, or you may use our Signature Debugger to do signing/verification using private/public keys as obtained from previous step.
Refer more on `Signature Debugger`

![image](/img/developer-application/signature-debug.png)

</details>

<!-- `Public Keys` needs to have be wrap as following :
![image](/img/developer-application/9.png)

**Optional Tool: Signature Debugger**<br />

For security purposes, we enhanced our authentication flow and Open API by adding layers of encryption to our endpoints. You may use our Signature Debugger
You may develop your own encryption tool on your desired application directly, or you may use our Signature Debugger to do signing/verification using private/public keys as obtained from previous step.
Refer more on `Signature Debugger`

![image](/img/developer-application/10.png) -->
