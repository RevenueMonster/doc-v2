---
id: daily-settlement-report
title: Daily Settlement Report
sidebar_label: Daily Settlement Report
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL :`https://open.revenuemonster.my/v3/payment/reconciliation`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/reconciliation`

:::note
To Get Daily Payment report
:::

### Request Parameters

| Parameter         | Type   | Required | Description                                          | Example      |
| ----------------- | ------ | -------- | ---------------------------------------------------- | ------------ |
| `transactionType` | String | Yes      | "PAYMENT" or "REFUND"                                | "PAYMENT"    |
| `date`            | String | Yes      | Date of the report                                   | "2019-12-31" |
| `method`          | String | Yes      | [RM currently supported method](../method/quick-pay) | []           |
| `region`          | String | Yes      | Region of wallet, "MALAYSIA" or "CHINA"              | []           |
| `cursor`          | String | Yes      | Optional, if pagination exists                       | ""           |

> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/reconciliation" \
--header "Content-Type: application/json"\
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \
--header "X-Signature: sha256 OsjlEWZLKx0IXgC5PUk6sM+ZZdrS/ELBNdEGj+okOhVAwo/i+GK91CwEmIbLko+p0Vbs8Ph+iBQG/3DyS7kHug=="\
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1527407052" \
--data-raw "{
	"transactionType": "PAYMENT",
    "date": "2019-12-31",
    "method": [],
    "region": [],
    "cursor": ""
}"
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `items`   | Object | Transaction object                                                                                        | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |
| `meta`    | Object | Database object                                                                                           | {}                           |

<br/>

<strong>Transaction object (item):</strong>

| Parameter          | Type     | Description                                                                                                                    | Example                                    |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `transactionAt`    | DateTime | Transaction date time of transaction                                                                                           | "2019-12-31T07:00:10Z"                     |
| `merchantId`       | String   | (Can view From RM Portal)                                                                                                      | "4118165203679668885"                      |
| `merchantName`     | String   | (Can view From RM Portal)                                                                                                      | "Revenue Monster Sdn Bhd"                  |
| `storeId`          | String   | Store ID                                                                                                                       | "4949529109748431621"                      |
| `storeName`        | String   | Store Name                                                                                                                     | "Kim's Food Corner"                        |
| `region`           | String   | Region of wallet, "MALAYSIA" or "CHINA"                                                                                        | "MALAYSIA"                                 |
| `method`           | String   | tyuioigiigqhih                                                                                                                 | "TNG"                                      |
| `transactionType`  | String   | "PAYMENT" or "REFUND"                                                                                                          | "PAYMENT"                                  |
| `type`             | String   | "QUICK_PAY" , "QR_PAY","Web_Payment" , "Mobile_Payment" , "Mobile_Web_Payment"                                                 | "QUICK_PAY"                                |
| `transactionId`    | String   | Transaction ID (from RM server)                                                                                                | "191231070009010323431829"                 |
| `orderId`          | String   | Order ID (from Merchant), max: 24                                                                                              | "1577775608765190100M6010"                 |
| `currencyType`     | String   | Currency notation (currently only support `MYR`)                                                                               | "MYR"                                      |
| `grossAmount`      | Double   | Gross Amount QR pay                                                                                                            | "0.10"                                     |
| `mdr`              | Double   | MDR (from RM server)                                                                                                           | "0.70"                                     |
| `serviceFee`       | Double   | Service Fee (from RM server)                                                                                                   | "-0.00"                                    |
| `settlementAmount` | Double   | Settlement Amount                                                                                                              | "0.10"                                     |
| `store`            | Object   | Store object                                                                                                                   | (Refer to explanation below)               |
| `referenceId`      | String   | Transaction ID (from WeChat server)                                                                                            | ""                                         |
| `transactionId`    | String   | Transaction ID (from RM server)                                                                                                | "152161448229438994"                       |
| `order`            | Object   | Order object                                                                                                                   | (Refer to explanation below)               |
| `payee`            | Object   | Object of userID made payment (payment sender)                                                                                 | {"userId": "o74f0wjjzv9eKRu1fccrZswVFnOQ"} |
| `platform`         | String   | Currently only support "OPEN_API"                                                                                              | "OPEN_API"                                 |
| `method`           | String   | Currently only support "WECHATPAY" , "PRESTO" , "BOOST" , "TNG" , "MAYBANK" , "ALIPAY" , "GRABPAY".                            | "ALL"                                      |
| `type`             | String   | Currently only support "QUICKPAY"                                                                                              | "QUICKPAY"                                 |
| `status`           | String   | Status returned from WeChat server, "SUCCESS" or "IN_PROCESS" or "FAILED". "IN_PROCESS" means user scanned and making payment. | "FAILED"                                   |
| `createdAt`        | DateTime | Creation date time of transaction                                                                                              | "2018-03-21T06:41:22Z"                     |
| `updatedAt`        | DateTime | Last update date time of transaction                                                                                           | "2018-03-21T06:41:22Z"                     |

<br/>

<strong>Store object (store):</strong>

| Parameter      | Type               | Description                                     | Example                                   |
| -------------- | ------------------ | ----------------------------------------------- | ----------------------------------------- |
| `id`           | String             | Store ID                                        | "6170506694335521334"                     |
| `name`         | String             | Store Name                                      | "REVENUE MONSTER"                         |
| `addressLine1` | String             | Store Address 1                                 | "B-5-30, 5th Floor, Block Bougainvillea," |
| `addressLine2` | String             | Store Address 2                                 | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard," |
| `postCode`     | String             | Postcode of store                               | "47400"                                   |
| `city`         | String             | City of store                                   | "Petaling Jaya"                           |
| `state`        | String             | State of store                                  | "Selangor"                                |
| `country`      | String             | Country of store                                | "Malaysia"                                |
| `countryCode`  | String             | Country code of store contact number            | "60"                                      |
| `phoneNumber`  | String             | Phone number of store                           | "377334080"                               |
| `geoLocation`  | Object of [String] | Geo Location (latitude and longtitude) of store | {"Lat": 3.1349857, "Lng": 101.6136659 }   |
| `status`       | String             | Current status of store                         | "ACTIVE"                                  |
| `createdAt`    | DateTime           | Creation date time of store                     | "2018-02-12T08:53:13Z"                    |
| `updatedAt`    | DateTime           | Last update date time of store                  | "2018-02-12T08:53:13Z"                    |

<br/>

<strong>Order object (order):</strong>

| Parameter        | Type   | Description                                    | Example                        |
| ---------------- | ------ | ---------------------------------------------- | ------------------------------ |
| `id`             | String | Order ID (from Merchant)                       | "134850717797247290"           |
| `title`          | String | Order title                                    | "Sales"                        |
| `details`        | String | Order details                                  | "1 x iPhone X; 2 x SAMSUNG S8" |
| `additionalData` | String | For merchant's remark                          | ""                             |
| `currencyType`   | String | Currency notation (currently only support MYR) | "MYR"                          |
| `amount`         | Uint   | Amount of order                                | 100                            |

> Example Respond

```json
{
  "items": [
    {
      "transactionAt": "2019-12-31T07:00:10Z",
      "merchantId": "4118165203679668885",
      "merchantName": "Revenue Monster Sdn Bhd",
      "storeId": "4949529109748431621",
      "storeName": "Kim's Food Corner",
      "region": "MALAYSIA",
      "method": "TNG",
      "transactionType": "PAYMENT",
      "type": "QUICK_PAY",
      "transactionId": "191231070009010323431829",
      "orderId": "1577775608765190100M6010",
      "currencyType": "MYR",
      "grossAmount": "0.10",
      "mdr": "0.70",
      "serviceFee": "-0.00",
      "settlementAmount": "0.10"
    },
    {
      "transactionAt": "2019-12-31T07:42:55Z",
      "merchantId": "4118165203679668885",
      "merchantName": "Revenue Monster Sdn Bhd",
      "storeId": "4949529109748431621",
      "storeName": "Kim's Food Corner",
      "region": "MALAYSIA",
      "method": "TNG",
      "transactionType": "PAYMENT",
      "type": "QUICK_PAY",
      "transactionId": "191231074255010324053928",
      "orderId": "1577778173933190100M6010",
      "currencyType": "MYR",
      "grossAmount": "1.00",
      "mdr": "0.70",
      "serviceFee": "-0.01",
      "settlementAmount": "0.99"
    }
  ],
  "code": "SUCCESS",
  "meta": {}
}
```
