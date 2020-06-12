---
id: signature-algorithm
title: Signature Algorithm
sidebar_label: Signature Algorithm
---

### Using RM Merchant Portal to get Signature

### Step 1 : Create New Application

Go to **Merchant Portal** > **Developer** > **Applications** tab (last on the list) and you will see the following page:<br/>

![image](/img/developer-application/1.png)<br />

### Step 2 : Obtain Credential

Click on the <b>Applications</b> created in Step 1. You may edit and update relevant information here :
<br/>

If you would like to disable the application , simply toggle the **"ON/OFF"** switch button at the top right.
<br/>

![image](/img/developer-application/4.png)

Click on **Show** to reveal your **clientSecret**:

![image](/img/developer-application/5.png)

<hr/>

### Generate RSA KEYS

If you need help to generate a key, go to **Merchant portal > Developer > Application > Generator RSA Key** Suggested key size: 2048 Bit. Keep your private keys in a safe place! Or use our **Generate RSA key** tool.

- `Private Keys` are required to sign API request(s) contents.
- `Public Keys` are used to verify content received.

![image](/img/developer-application/rks-key.png)

<hr/>

### Optional Tool: Signature Debugger

`Public Keys` needs to have be wrap as following :

![image](/img/developer-application/9.png)<br/>
For security purposes, we enhanced our authentication flow and Open API by adding layers of encryption to our endpoints. You may develop your own encryption tool on your desired application directly, or use our Signature Debugger to do signing/verification using private/public keys as obtained from the previous step.
Refer more on `Signature Debugger`

![image](/img/developer-application/signature-debug.png)

<hr/>

### Using API to get Signature

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/tool/signature/generate`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/tool/signature/generate`

### Request Parameters

> Example Request

```json
{
  "data": {
    "order": {
      "title": "hello",
      "detail": "hello",
      "additionalData": "world",
      "amount": 100,
      "currencyType": "MYR",
      "id": "13234353986"
    },
    "method": [],
    "type": "WEB_PAYMENT",
    "storeId": "10946114768247530",
    "redirectUrl": "https://www.youtube.com/watch?v=k9NZYQHQ7Gg&list=RDGfcbOdIFWPE&index=13",
    "notifyUrl": "https://google.com",
    "layoutVersion": "v2"
  },
  "method": "post",
  "nonceStr": "XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG",
  "privateKey": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAvNvEeQ/Se29PKPbD4jWEvOPmMgGYJOQOKc/s0PhUSlIaZDnb\n9dc1Wvkl6vbsi1KYulRvrCNThO5db6a1Jj0erRpovcGXi3ACHF3sei9enaUHEHvd\nFWMAulAD2EI37sNIsyGm1wK5fpuVLlUPjeV+PzJKID1RvHM+3A5m9ZnxSj/SNF/7\nvSXRM1z4SYJuQDGmxVWEEkTkBcbleK2J1pdB88E3xhqzD3UQN2LLHSCM/A2nmA8Y\nEXkwfr7kRl2CJlDl+qrjb0n5i60D+j8JMFDg5mkl6VuTBuUg1PKJuJzRXmJK0GuA\na52I0QXId6uWXHc+Up1B6zvh5IhXa3+dzXBm4wIDAQABAoIBAGVnhy4NndGjKZjw\nLqtmWxhlMfPFwWCFh0lSGHD39aJWRU9tdbqhzEdFoeNwpAAG4HSj47ZE3ZJxvn+1\nvmyCwtblaDoDGZDIGooKsG/GwYHZ21oxd7sFBp4DWp0iqQ+tkXqFZiTqlJjzhv1y\ntMBW6huasAxxgFK0epsDrKrQ9qsLfX1MYjXUU/q1edIJ6+kf5gPeqboH8mWMi038\nSyTDnDuTqBsaWlOdfrlQjs4feVILrmAor6Egz1PcpNSwHpdtjh7vNb1f//8y+rxp\n5p6wvhVS5quRW6yT871qtp97Vq9TR6DThbIsp/Pc5cnRT653pdfNBgAE83ukacye\n6WfErdECgYEA+msNuG+tfgE1toA1+asXaCC0r4mrYLjP+uXBA57ZNHm5drS2tiI4\n3EqcVeek9VGUk/O65yWQ6SBgo0fXpGTNI8qYMONF6MDgRez/u81wBvVRLayAecJO\n7pA8Sokgitb/jyTqvIXJQYxQl+kHKiYtX281DNZ9CRfE0XOmf6UHTysCgYEAwRFw\neOc84ASQnBRzh6DHwKCQWRYZze5njIawty9zX/HZsPDlp4wqh4X4WzBFmBscnZ0L\n0EvaqBtQkIeGrdMAsgbFPFEPqMP3/iRCwBn3M6gW0CCSCLt4X7K2wXq1kJ6x7dhH\njt9b8u7MYonco+k8k7SHJj1elJXLa7Zh6q6pqykCgYEA4MZ6+FR1/CaF2hzXVhW2\n2uaQiQgf5p+9P84/JErPWITybpTjdDTfqQznq0xUC0eBABTEbXqQylEfrTBtZch9\nQmU1mpxGQhfut5V2L1LF/djxVvgCEkjRpN2e4KCZr0Yw+oH+md3UupuCM/kdTz4Z\neBJQIgfdD+5f4knW57hwCSUCgYEAtZN1OAAiHH2uk1wYm4H2248msuI6OpbxBBTY\ntjAGTkHi/qpREpacmQDCZuCrUzaMXx+IMMpmRpwJ1SPg4jIEAWqkrOl/1LUZ0wa/\nUHQbLZX0fqFjNps5xqcJgkWp5O2bYZl7Ez+19m/oAPSvcei1dCTgxnIJNaz7t727\nsT+7iqECgYBgfmuGu77mHrGdz8JMDwqdYWYJbtdxrPOqlH37G2D1IufAyDvLv2LN\nxjenpecoSSyhlVPQMTqD1T3HUaJ99GNE5ANe0qyVcENQVI38+9bb/VtY8vsXpvPi\nnHCRMiX3Li2Q75PT21I4GGiNoxXQphlAPevtfWfKKbrS2Y2DgQfeMA==\n-----END RSA PRIVATE KEY-----",
  "requestUrl": "https://sb-open.revenuemonster.my/v3/payment/online",
  "signType": "sha256",
  "timestamp": "1591946239"
}
```

### Response Parameters

> Example Response

```json
{
  "data": "data=eyJsYXlvdXRWZXJzaW9uIjoidjIiLCJtZXRob2QiOltdLCJub3RpZnlVcmwiOiJodHRwczovL2dvb2dsZS5jb20iLCJvcmRlciI6eyJhZGRpdGlvbmFsRGF0YSI6IndvcmxkIiwiYW1vdW50IjoxMDAsImN1cnJlbmN5VHlwZSI6Ik1ZUiIsImRldGFpbCI6ImhlbGxvIiwiaWQiOiIxMzIzNDM1Mzk4NiIsInRpdGxlIjoiaGVsbG8ifSwicmVkaXJlY3RVcmwiOiJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWs5TlpZUUhRN0dnXHUwMDI2bGlzdD1SREdmY2JPZElGV1BFXHUwMDI2aW5kZXg9MTMiLCJzdG9yZUlkIjoiMTA5NDYxMTQ3NjgyNDc1MzAiLCJ0eXBlIjoiV0VCX1BBWU1FTlQifQ==&method=post&nonceStr=XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG&requestUrl=https://sb-open.revenuemonster.my/v3/payment/online&signType=sha256&timestamp=1591946239",
  "sequenceData": "{\"layoutVersion\":\"v2\",\"method\":[],\"notifyUrl\":\"https://google.com\",\"order\":{\"additionalData\":\"world\",\"amount\":100,\"currencyType\":\"MYR\",\"detail\":\"hello\",\"id\":\"13234353986\",\"title\":\"hello\"},\"redirectUrl\":\"https://www.youtube.com/watch?v=k9NZYQHQ7Gg&list=RDGfcbOdIFWPE&index=13\",\"storeId\":\"10946114768247530\",\"type\":\"WEB_PAYMENT\"}",
  "signature": "sha256 FKdep5OjChzPEZI0IxQBl4gSmIxS9HWb6cyxWPTT3X76RmX/pU6EPXj/WCzW3DFkapNllnLegMylQKgNMNhI29ylihYQhFvbrDdbPNBLHio0MJVH/oRkdf7zrl0GOi6CtEBAktj0yQKN7qjk7qa7ZAghSEKRYeq+zGvgmpxF61EjGYogtShsxXK53+l+tnihOkNC0lgb7rY9W5Sahohrc0E7udY6mSqSTEoYVAmLq/KhYW7Ve6mp6cMRC5N/ELB2atcX8CvU6OnJ4sKPAqr0ML5cmIpKbjypVIPHv4HvvWFm2LC6wX8IMe5SgD891FAdBXfFgl3wR6nGhkpbMjg8ug=="
}
```

<hr/>

### Invalid Request Signature

:::note
If you received **INVALID_REQUEST_SIGNATURE**

```json
{
  "error": {
    "code": "INVALID_REQUEST_SIGNATURE",
    "message": "The request signature is invalid"
  }
}
```

- Check your **Private key** and **Public key**
- No space in **JSON DATA**
- For access all wallet **method:[]**
- For **amount:100** = 0.10 sen

:::

<!-- `Public Keys` needs to have be wrap as following :
![image](/img/developer-application/9.png)

**Optional Tool: Signature Debugger**<br />

For security purposes, we enhanced our authentication flow and Open API by adding layers of encryption to our endpoints. You may use our Signature Debugger
You may develop your own encryption tool on your desired application directly, or you may use our Signature Debugger to do signing/verification using private/public keys as obtained from previous step.
Refer more on `Signature Debugger`

![image](/img/developer-application/10.png) -->
