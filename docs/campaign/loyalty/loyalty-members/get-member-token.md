---
id: get-member-token
title: Get Member Token
sidebar_label: Get Member Token
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/member/redirect?accessToken={{token}} `<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/member/redirect?accessToken={{token}} `

:::note

- Redirect to loyalty app
- Using Query String to input the **accessToken**
- **accessToken** by input `{token}`
- **token** you can copy from **[member authorize response](./member-authorize)**

:::

### Request Parameters

> Example Request

```bash
curl --location --request POST 'https://sb-open.revenuemonster.my/v3/loyalty/member/redirect?accessToken={{token}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNbkFxWjZHek9MS0ZRIl0sImV4cCI6MTYxMTczMzcxMiwiaWF0IjoxNjA5MTQxNzEyLCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UTYtRElnc3E3dEtvVyIsIm5iZiI6MTYwOTE0MTcxMiwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.vDyDrmriPMyvrzpadJx3iBLvBtX4ELsK4shnKkUPqgC9KovNzSTFVEqOe9hxAqqh9VFrEC7kBbS4FNm007CWC4P9_zbN0Ax829Q1DRS3ZZQg-wYEXywFgIqMEPKavG9KkpQ_zvNplu4kLq-gdlR0sjF37x9s7j7uZVJg8xAf8LVEOJzqfgsnt56JpcOGWsaQahQyvhAUq8_O9EYLM_PewqxIfVT6hJA83_ULGUFF9wp4xVbS1kU-u93E569F0gdiJnmcQ80CB6fz4q4u_oMrqBZiaZIJ1RYNKRXk3i8pNPhu9d3sIulPCY8PuD9eqdL31LF9npd8r54lWs05ATrg-g' \
--header 'X-Signature: sha256 XvedDW8H2gqGL5gMzTHqDy1PXX3OqRF09WuQDkeCDwuinOAsPstcPOSefUwkyHPM9WPNKKHyR5qXbKNLC7UgQyGi8Ynio03kDo0p+g3BqXaUT1tpo5D8kv42Kh2S8CW4RkX2Dkf+Yxi2XMQ8l3kzPZaRyhudaGerUZony4Npzf63p4+oTBbXE01uX/4x/WL57+zkaaVRc1KlJsLdGsBmLlPOHLana7udJffJyxXhOmyokBuJ4GoOC8JpDG9oaKCNMZ88ow9CWWB0yRPrK2KeaEDwzCm2Jh8IFKw1gS6avQAwsjychZWv5XmAXkZ8ZQrnLXJquA09QpLxPTtOeQC9SA==' \
--header 'X-Nonce-Str: XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG' \
--header 'X-Timestamp: 1599467903' \

```

### Response Parameters

> Example Response

```bash
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="description" content="" />
	<title>Loyalty Program</title>
	<link href="/public/vendors~main.1f80cff55e18228d2565.css" rel="stylesheet">
</head>

<body>
	<div id="app"></div>
	<script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
	<script type="text/javascript" src="/public/vendors~main.03379817be1520667542.js"></script>
	<script type="text/javascript" src="/public/main.8278531ab006cded29ef.js"></script>
</body>

</html>
```
