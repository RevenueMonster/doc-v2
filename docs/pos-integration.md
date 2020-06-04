---
id: pos-integration
title: POS Terminal Integration
sidebar_label: POS Terminal Integration
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
Url :`https://open.revenuemonster.my/v3/payment/terminal/quickpay`<br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay`

:::note
Using this API to integrate RM Terminal with POS System or Kiosk machine
:::

### Request Parameters

| Parameter       | Type   | Required | Description                                                                   | Example               |
| --------------- | ------ | :------: | ----------------------------------------------------------------------------- | --------------------- |
| `transactionId` | String |   Yes    | Transaction ID generated from Revenue Monster.                                | "1582107209454501456" |
| `cameraType`    | String |   Yes    | Display terminal Camera                                                       | "FRONT"               |
| `receiptType`   | Uint   |   Yes    | 1 : Print Merchant Copy and Customer copy <br/> <br/> 2 : Print Customer copy | 1                     |
| `type`          | String |   Yes    | Receipt E-wallet or Credit Card                                               | "E-WALLET"            |
| `order`         | String |   Yes    | (Refer `order` )                                                              | {}                    |

<br/>

<strong>Order object (order):</strong>

| Parameter        | Type   | Required | Description                                         | Example        |
| ---------------- | ------ | -------- | --------------------------------------------------- | -------------- |
| `amount`         | Uint   | Yes      | Amount of order in cent (min RM 0.10 or amount: 10) | 100            |
| `currencyType`   | String | Yes      | Currency notation (currently only support MYR)      | "MYR"          |
| `id`             | String | Yes      | Order ID (from Merchant), max: 24                   | "123443333304" |
| `title`          | String | Yes      | Order title, max: 32                                | "title"        |
| `details`        | String | Yes      | Order details, max: 600                             | "desc"         |
| `additionalData` | String | Yes      | For merchant's remark, max 128                      | "API Test"     |

> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV1Z4NF9UbE5MZEZRIl0sImV4cCI6MTU4NjMzNzc1OCwiaWF0IjoxNTgzNzQ1NzU4LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXlKSG9qb2VNcHYwViIsIm5iZiI6MTU4Mzc0NTc1OCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.FfBkCb7fjCKJdcy_DS06dKgEtcAvukPio0HyDRtH2UovhZsLFSqD_8oo21u094XSor_mqFg4hqXmLaHjX-h92Wz3kHl7OwiKQb16x8Rnl5OdyPHtMqIZqP8ab8Ch0RHEZ33VchK1zBTnG6Xosrb1B44tWqJ0_kdTtbRZN4rG821C8i4sb6sx8GaxgluJ5q7CEifMTBFJam_Jub9LfAfukq8YyIl0Bykp7B3A_su2QoELL9L_ElJdV9FuwFPHcKr9bxLvVSrEdyrFg7IBm_tJHxSl8gTh3j4b6lWZrBCfMSLraXaYRNzz1ddbVnwYD4aRuSyRmQeMYTUj0cInktnKUA" \
--header "X-Signature: sha256 GohuT2QTUXJV3MZh2OoEE9qW9wcfakOU9iVLmkTjM12NQuV6IcWMRQDz9NdxAOVIrh5MssfYCLDlafb2illXxgQMpmZkZ38NT6NQsMeMfGbHBS1Kc+BUtU7o1TMLUzk55J1tA6f0Z95oEuBlCeLm6VsgCG30wFm5YmgssJ0weIwMcW355r2sFl7QcKOuRqynoGtmmr/aGfOk1HjiFLoFzSd38O7rRjwGrekYwuYUD1N/Wp5GFXRjtaaPkzAERPbXEmnh/taLME8VeAhky6dAVGZE6gHKnP5WvvVjUE+KLtj3D32YIHzxhzEW9x3JEObqgvm5Q2oRZNxoh6/MvqwkVA==" \
--header "X-Nonce-Str: bfdgdjgtjhmnbmmjmdfdghghffj" \
--header "X-Timestamp: 1546850694" \
--data-raw {
   "terminalId":"1582107209454501456",
   "cameraType": "FRONT",
   "receiptType": 1,
   "type": "E-WALLET",
   "order":{
      "amount":100,
      "currencyType":"MYR",
      "id":"123443333304",
      "title":"title",
      "detail":"desc",
      "additonalData":"API Test"
   }
}
```

### Response Parameters

| Parameter       | Type     | Description                                         | Example                               |
| --------------- | -------- | --------------------------------------------------- | ------------------------------------- |
| `balanceAmount` | Uint     | Amount of order in cent                             | 10                                    |
| `createdAt`     | DateTime | Creation date time of store                         | "2020-02-13T07:08:56Z"                |
| `currencyType`  | String   | Currency notation (currently only support `MYR`)    | "MYR"                                 |
| `method`        | String   | [RM currently supported method](./method/quick-pay) | "CARD"                                |
| `order`         | String   | (Refer `order` )                                    | {}                                    |
| `platform`      | String   | Only "TERMINAL"                                     | "TERMINAL"                            |
| `referenceId`   | String   | Transaction ID (from server)                        | "00000000000791320002737201919250001" |
| `region`        | String   | Region of wallet                                    | "MALAYSIA"                            |
| `status`        | String   | Status returned from WeChat server                  | "SUCCESS"                             |
| `transactionAt` | DateTime | Transaction date time of store                      | "2020-10-25T04:35:22Z"                |
| `transactionId` | DateTime | Transaction ID generated from Revenue Monster.      | "200213070856100322408442"            |
| `type`          | String   | "QUICKPAY" or "BANK_CARD"                           | "BANK_CARD"                           |
| `updatedAt`     | DateTime | Last update date time of store                      | "2020-02-13T07:08:56Z"                |

<br/>
<strong>Order object (order):</strong>

| Parameter        | Type   | Required | Description                                         | Example               |
| ---------------- | ------ | -------- | --------------------------------------------------- | --------------------- |
| `amount`         | Uint   | Yes      | Amount of order in cent (min RM 0.10 or amount: 10) | 10                    |
| `id`             | String | Yes      | Order ID (from Merchant), max: 24                   | "201919250001"        |
| `title`          | String | Yes      | Order title, max: 32                                | "SALE"                |
| `details`        | String | Yes      | Order details, max: 600                             | "XXXX-XXXX-XXXX-3121" |
| `additionalData` | String | Yes      | For merchant's remark, max 128                      | "000008"              |

> Example Respond

```json
{
  "balanceAmount": 10,
  "createdAt": "2020-02-13T07:08:56Z",
  "currencyType": "MYR",
  "method": "CARD",
  "order": {
    "additionalData": "000008",
    "amount": 10,
    "detail": "XXXX-XXXX-XXXX-3121",
    "id": "201919250001",
    "title": "SALE"
  },
  "platform": "TERMINAL",
  "referenceId": "00000000000791320002737201919250001",
  "region": "MALAYSIA",
  "status": "SUCCESS",
  "transactionAt": "2020-10-25T04:35:22Z",
  "transactionId": "200213070856100322408442",
  "type": "BANK_CARD",
  "updatedAt": "2020-02-13T07:08:56Z"
}
```
