---
id: spending-loyalty-point
title: Spending Loyalty Point
sidebar_label: Spending Loyalty Point
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
Url : `https://open.revenuemonster.my/v3/loyalty/spending-reward`<br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/loyalty/spending-reward`

:::note
To give loyalty points to customers using phone number or member ID.
By (Amount) giving the point
:::

### Request Parameters

| Parameter                 | Type    | Required | Description                                        | Example                                                  |
| ------------------------- | ------- | -------- | -------------------------------------------------- | -------------------------------------------------------- |
| <code>currencyType</code> | String  | Yes      | Currently `MYR` only                               | MYR                                                      |
| <code>amount</code>       | Integer | Yes      | Loyalty point given to customers.                  | 100                                                      |
| <code>type</code>         | String  | Yes      | "ID" ,"PHONENUMBER" or "QRCODE"                    | Use phone number , ID or QR Code to give loyalty points. |
| <code>memberId</code>     | String  | No       | Member ID if type "ID" being provided.             | "2777058682717858418"                                    |
| <code>countryCode</code>  | String  | No       | Country code if type "PHONENUMBER" being provided. | "60"                                                     |
| <code>phoneNumber</code>  | String  | No       | Phone number if type "PHONENUMBER" being provided. | "172826990"                                              |

> Example Request Phone Number

```json
curl --location --request POST "{{open_base_path}}/v3/loyalty/reward" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer {{clientToken}}" \
  --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
  --header "X-Timestamp: 1528450585" \
  --data "{
   \"currencyType\": \"MYR\",
   \"amount\": 100,
   \"type\": \"PHONENUMBER\",
   \"countryCode\": \"60\",
   \"phoneNumber\": \"176473298\"
}"
```

> Example Request QRCODE

```json
curl --location --request POST "{{open_base_path}}/v3/loyalty/reward" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer {{clientToken}}" \
  --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
  --header "X-Timestamp: 1528450585" \
  --data "{
   \"currencyType\": \"MYR\",
   \"amount\": 100,
   \"type\": \"QRCODE\",

}"
```

> Example Request Member ID

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/loyalty/reward" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \
  --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
  --header "X-Timestamp: 1528450585" \
  --data "{
    \"currencyType\": \"MYR\",
    \"amount\": 100,
    \"type\": \"ID\",
    \"memberId\": \"2777058682717858418\",

}"
```

### Response Parameters

| Parameter         | Type   |                                                                           Description                                                                            | Example   |
| ----------------- | ------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------- |
| <code>code</code> | String | Successfully call this endpoint. If fail, will return error code object (Refer [Appendix 1: Error Codes](https://doc.revenuemonster.my/#appendix-1-error-codes)) | "SUCCESS" |

> Example Respond (PhoneNumber & Memebr ID)

```json
{
  "code": "SUCCESS"
}
```

> Example Respond (QR Code)

```json
{
  "item": {
    "id": "83f575034d45f776b8e1fed1a26e2fee",
    "qrCodeUrl": "https://dev-rm-api.ap.ngrok.io/qr/4118165203679668885/loyalty/d3008719d04cab91c53eb0b5d8cc4ee6"
  },
  "code": "SUCCESS"
}
```