---
id: merchant-subscriptions
title: Get Mercahant Subscriptions
sidebar_label: Get Mercahant Subscriptions
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
Url :`https://sb-open.revenuemonster.my/v3/merchant/subscriptions`

:::note
To query for merchant product subscription details.
:::

<strong>Request Parameters:</strong>

:::note
No request parameter is required for this endpoint.
:::

<strong>Response Parameters:</strong>

| Parameter | Type   | Description                                                                                   | Example                    |
| --------- | ------ | --------------------------------------------------------------------------------------------- | -------------------------- |
| `item`    | Object | Object of refund details.                                                                     | (Refer explanantion below) |
| `code`    | String | Status returned from Revenue Monster server, whether successfully called our endpoint or not. | "SUCCESS"                  |

<br/>

<strong>Item Object:</strong>

| Parameter            | Type     | Description                             | Example                                                        |
| -------------------- | -------- | --------------------------------------- | -------------------------------------------------------------- |
| `id`                 | String   | Store ID                                | "6170506694335521334"                                          |
| `companyName`        | String   | Company name of merchant                | "REVENUE MONSTER"                                              |
| `companyType`        | String   | Type of company incorporation           | "SOLE PROPRIETOR"                                              |
| `companyLogoUrl`     | String   | Public URL to show merchant's logo      | "https://storage.googleapis.com/rm-dev-asset/img/merchant.png" |
| `registrationNumber` | String   | Registration number of merchant         | “12344”                                                        |
| `businessCategory`   | String   | Business category of merchant           | "SOFTWARE AND IT"                                              |
| `establishedAt`      | String   | Established date time of merchant       | "2018-03-26T04:50:57Z"                                         |
| `countryCode`        | String   | Country code of merchant contact number | "60"                                                           |
| `phoneNumber`        | String   | Phone number of merchant                | "377334080"                                                    |
| `addressLine1`       | String   | Address 1 of merchant                   | "20, JALAN JASA 38, TAMAN MUTIARA RINI"                        |
| `addressLine2`       | String   | Address 2 of merchant                   | ""                                                             |
| `postcode`           | String   | Postcode of merchant                    | “81300”                                                        |
| `city`               | String   | City of merchant                        | "Selangor"                                                     |
| `state`              | String   | State of merchant                       | "Selangor"                                                     |
| `country`            | String   | Country of merchant                     | "Malaysia"                                                     |
| `invoiceAddres`      | Object   | Object of Invoice Address               | (Refer below)                                                  |
| `isActive`           | Boolean  | Merchant active or deactivated status   | true                                                           |
| `status`             | String   | Current status of merchant              | “REVIEWING”                                                    |
| `isMasterMerchant`   | Bool     | Master Merchant flag                    | true                                                           |
| `masterMerchantId`   | String   | Master Merchant ID, if any              | "2301663653361832803"                                          |
| `isPartner`          | Bool     | Partner Merchant flag                   | true                                                           |
| `partnerId`          | String   | Partner Merchant ID, if any             | "2301663653361832803"                                          |
| `gstNo`              | String   | GST No, if any                          | ""                                                             |
| `createdAt`          | DateTime | Creation date time of merchant          | "2018-02-12T08:53:13Z"                                         |
| `updatedAt`          | DateTime | Last update date time of merchant       | "2018-02-12T08:53:13Z"                                         |

<br/>
<strong>Invoice Address Object:</strong>

| Parameter      | Type   | Description           | Example                                 |
| -------------- | ------ | --------------------- | --------------------------------------- |
| `addressLine1` | String | Address 1 of merchant | "20, JALAN JASA 38, TAMAN MUTIARA RINI" |
| `addressLine2` | String | Address 2 of merchant | ""                                      |
| `postcode`     | String | Postcode of merchant  | “81300”                                 |
| `city`         | String | City of merchant      | "Selangor"                              |
| `state`        | String | State of merchant     | "Selangor"                              |
| `country`      | String | Country of merchant   | "Malaysia"                              |

> Example Respond

```json
{
  "item": [
    {
      "id": 1001,
      "gracePeriod": 90,
      "expiryAt": "2018-04-28T06:36:08Z",
      "terminateAt": "2018-07-27T23:59:59Z",
      "status": "ACTIVE"
    },
    {
      "id": 1000,
      "gracePeriod": 90,
      "expiryAt": "2018-04-25T02:51:10Z",
      "terminateAt": "2018-07-24T23:59:59Z",
      "status": "ACTIVE"
    },
    {
      "id": 1003,
      "gracePeriod": 90,
      "expiryAt": "2018-04-29T05:04:30Z",
      "terminateAt": "2018-07-28T23:59:59Z",
      "status": "ACTIVE"
    }
  ],
  "code": "SUCCESS"
}
```
