---
id: signature-algorithm
title: Signature Algorithm
sidebar_label: Signature Algorithm
---

Signature algorithm is used to sign your API request with a private key to obtain **additional security**.

### Step 1 : Share with us your public key

If you need help to generate a key, go to **Merchant portal > Developer > Application > Generator RSA Key** Suggested key size: 2048 Bit. Keep your private keys in a safe place! Or use our **Generate RSA key** tool.

- `Private Keys` are required to sign API request(s) contents.
- `Public Keys` are used to verify content received.

![image](/img/developer-application/rks-key.png)

<hr/>

:::important

- <span style={{ color: "black", fontWeight: "bold" }}>You only need to do this once per integration</span>

:::

### Step 2 : Prepare a Request Parameter

:::important

- <span style={{ color: "black", fontWeight: "bold" }}>Data object</span> needs to be sorted, the <span style={{ color: "black", fontWeight: "bold" }}>Nested object</span> also needs to be sorted.

:::

:::note

- Refer to which API endpoint you are calling , below request parameter is just an **EXAMPLE**

:::

#### Example of `Update Category By ID`

| Parameter        | Type   | Description                                                | Example  |
| ---------------- | ------ | ---------------------------------------------------------- | -------- |
| `name`           | String | Category name                                              | "Drinks" |
| `status`         | String | Status of Category **"ACTIVE"** and **"INACTIVE"**         | "ACTIVE" |
| `positionChange` | Int    | Move **UP** or **DOWN** the position using **-1** or **1** | 1        |

<br />

> Example Request

```json
{
  "name": "Drinks",
  "status": "ACTIVE",
  "positionChange": -1
}
```

:::important

- Sort the above json key **alphabetically** and **url encode it**

- Replace following special character on the json body:<br/>
  **&lt;** to **\u003c**<br/>
  **&gt;** to **\u003e**<br/>
  **&amp;** to **\u0026**<br/>

:::

**Example**
:::note
name=Drinks&positionChange=-1&status=ACTIVE
:::

### Step 3 : Sign with you private key from Step 1 with SHA256

- Hash your sorted message with SHA256 hash function
- Parse/load your private key
- Pass the loaded pirvate key, and hashed message into the rsa signing function

Refer to https://pkg.go.dev/crypto/rsa#SignPKCS1v15 for reference or equivalent in your chosen programming langauge.

### Step 4: Encode the signature using Base64 format​

:::note
**Example of resulting base64 ecnoded Signature**
AaUJDc6ldDBISsnmqSE3JgRTK+Iv++TJ+9ElHz9jtoWdye3aDyPBH4UX1GbF2pKepDnjJqLvxUi2W4Cqym/QY2fqMb4Ugk/wcI6H7fkUwivNTCE0HOOojkERk6T49CcNmOfllr7TwQbPOYhS4LAbXsg9AapUVIcjpBVt8QrtdFbqObz3ZL7PJ1F05j/Qm0tBSsduPT9yV53rdftEbrWLpKiv68yWHHrkPFJJfu4xaMJWSLgReO1JvvAOxkMAV9KsJSSZ3jARR1/36uXZmqT04Rq7SsGrL7lhPUwByXgIIiO1hrWVe8YXRexCCoZtlqeGm4+z6wFCH9HDQPzSIXz1rw==
:::

### Step 5: Signature of Request Data

:::note
Put this **Signature** into header under **X-Signature**, construct the request as below and call API endpoint:
:::

```json
curl --location --request PATCH 'https://sb-api.alacarte.my/open/v1/cateogry/{id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVKTE42dFdBMG82MEx3Il0sImV4cCI6MTYwMzI1NDU2OSwiaWF0IjoxNjAwNjYyNTY5LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UTZNenR5b1RFckpzVyIsIm5iZiI6MTYwMDY2MjU2OSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.H3G6UDX7sR9EXtTMNs4Q2OHdhUGIhhCfdlAeOpywH4rDuVOcWXXwzF4Imbx8E7I10vFAJpwYZrEkCWCdCCw-WV11y9VT5kP6k75CeS-ZPMOLcKnC5iFT7vEi07r6ovwty9erlcZeXrtrmEIn3rnLva-dxSg3vZ2MyymoNDk-kV7ltXnkoWW4jtXRls6siLhxeY__8kXn2qa0ojVX4Nm6HmzN_vgi-RKSmToMgsdzTF94Y61QVBWhZfolD2-JpHx4qNlklcUdv8HOJ1QHHWpyoJytaJmvr3GJ5G399LbcTLwxB1p2qPg7z4hpoGNu4AP-ybRJVC3P9q9OscQYDNX-dA' \
--header 'X-Signature: AaUJDc6ldDBISsnmqSE3JgRTK+Iv++TJ+9ElHz9jtoWdye3aDyPBH4UX1GbF2pKepDnjJqLvxUi2W4Cqym/QY2fqMb4Ugk/wcI6H7fkUwivNTCE0HOOojkERk6T49CcNmOfllr7TwQbPOYhS4LAbXsg9AapUVIcjpBVt8QrtdFbqObz3ZL7PJ1F05j/Qm0tBSsduPT9yV53rdftEbrWLpKiv68yWHHrkPFJJfu4xaMJWSLgReO1JvvAOxkMAV9KsJSSZ3jARR1/36uXZmqT04Rq7SsGrL7lhPUwByXgIIiO1hrWVe8YXRexCCoZtlqeGm4+z6wFCH9HDQPzSIXz1rw==' \
--data-raw '{
  "name": "Drinks",
  "status": "ACTIVE",
  "positionChange": -1
}'
```

<hr/>

### Response Parameters

:::note
Response parameters will differ individually based on the API endpoint, please refer to the next parts of the documentation for examples.
:::
