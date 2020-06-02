---
id: get-payment-transaction-by-order-id
title: Get Payment Transaction By Order ID
sidebar_label: Get Payment Transaction By Order ID
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
Url :`https://sb-open.revenuemonster.my/v3/payment/transaction/order/190423044930300434571311`

:::note
Get Payment Transaction By Order ID
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Transaction object                                                                                        | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>
<strong>Transaction object (item):</strong>

| Parameter       | Type     | Description                                                                                                                    | Example                                    |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `store`         | Object   | Store object                                                                                                                   | (Refer to explanation below)               |
| `referenceId`   | String   | Transaction ID (from WeChat server)                                                                                            | ""                                         |
| `transactionId` | String   | Transaction ID (from RM server)                                                                                                | "152161448229438994"                       |
| `order`         | Object   | Order object                                                                                                                   | (Refer to explanation below)               |
| `payee`         | Object   | Object of userID made payment (payment sender)                                                                                 | {"userId": "o74f0wjjzv9eKRu1fccrZswVFnOQ"} |
| `platform`      | String   | Currently only support "OPEN_API"                                                                                              | "OPEN_API"                                 |
| `method`        | String   | [RM currently supported method](../method#quickpay)                                                                            | "ALL"                                      |
| `type`          | String   | Currently only support "QUICKPAY"                                                                                              | "QUICKPAY"                                 |
| `status`        | String   | Status returned from WeChat server, "SUCCESS" or "IN_PROCESS" or "FAILED". "IN_PROCESS" means user scanned and making payment. | "FAILED"                                   |
| `region`        | String   | Region of wallet, "MALAYSIA" or "CHINA"                                                                                        | "MALAYSIA"                                 |
| `createdAt`     | DateTime | Creation date time of transaction                                                                                              | "2018-03-21T06:41:22Z"                     |
| `updatedAt`     | DateTime | Last update date time of transaction                                                                                           | "2018-03-21T06:41:22Z"                     |

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

> Example Repsond

```json
{
  "item": {
    "store": {
      "id": "5980004217354859450",
      "name": "yussuf",
      "addressLine1": "GUGUSAN MELUR",
      "addressLine2": "",
      "postCode": "47810",
      "city": "PETALING JAYA",
      "state": "SELANGOR",
      "country": "MALAYSIA.",
      "countryCode": "60",
      "phoneNumber": "176473298",
      "geoLocation": {
        "latitude": 0,
        "longitude": 0
      },
      "status": "ACTIVE",
      "createdAt": "2018-05-28T02:05:50Z",
      "updatedAt": "2018-05-28T02:05:50Z"
    },
    "transactionId": "1806151242300013190769",
    "order": {
      "id": "9809099398273542333339",
      "title": "title",
      "detail": "desc",
      "additionalData": "In-store payment",
      "amount": 100
    },
    "payee": {},
    "currencyType": "MYR",
    "balanceAmount": 100,
    "platform": "MOBILE_APP",
    "method": "WECHATPAY",
    "error": {
      "message": "Invalid Auth Code"
    },
    "transactionAt": "2018-06-15T12:42:30Z",
    "type": "QUICK_PAY",
    "status": "FAILED",
    "region": "CHINA",
    "createdAt": "2018-06-15T12:42:30Z",
    "updatedAt": "2018-06-15T12:42:30Z"
  },
  "code": "SUCCESS"
}
```
