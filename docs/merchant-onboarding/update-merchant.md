---
id: update-merchant
title: Update Merchant
sidebar_label: Update Merchant
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "gray", fontWeight: "bold" }}>PATCH</span><br/>
URL : `https://open.revenuemonster.my/v3/partner/merchant/{merchantID}`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantID}`

:::note
Update Merchant By ID
:::

### Request Parameters

| Parameter     | Type   | Example               |
| ------------- | ------ | --------------------- |
| `companyName` | String | "Edwin Testing"       |
| `countryCode` | String | "60"                  |
| `email`       | String | "rmtesting@gmail.com" |
| `firstName`   | String | "Edwin"               |
| `lastName`    | String | "Testing"             |
| `phoneNumber` | String | "164699177"           |

> Example Request

```json
curl --location --request PATCH "https://sb-open.revenuemonster.my/v3/partner/merchant/1629258448138509563" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \
  --header "X-Signature: sha256 Uf8oEHcq3l5ZkPc/y9eUsRjoKkx0dLUQz5PEFntWUZcR4A0DYdtQ9+VTx5Rq4e4XsRVp+4KZb4cwpDfzPABCZA==" \
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
  --header "X-Timestamp: 1527407052" \
  --data-raw '{
    "companyName":"Ed Testing",
    "countryCode":"60",
    "email":"testing@gmail.com",
    "firstName":"Edwin",
    "lastName":"Testing",
    "phoneNumber":"164699197"
}'
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object |                                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>
<strong>Item Object :</strong>

| Parameter                 | Type              | Description                             | Example                                 |
| ------------------------- | ----------------- | --------------------------------------- | --------------------------------------- |
| `id`                      | String            | Store ID                                | "1629258558902992793"                   |
| `MerchantId`              | String            | Merchant ID                             | "1629258448138509563"                   |
| `isDefault`               | bool              | Default Settlement                      | true                                    |
| `companyName`             | String            | Company name of merchant                | "REVENUE MONSTER"                       |
| `companyType`             | String            | Type of company incorporation           | "SOLE PROPRIETOR"                       |
| `registrationNumber`      | String            | Registration number of merchant         | “12344”                                 |
| `businessCategory`        | String            | Business category of merchant           | "SOFTWARE AND IT"                       |
| `businessScope`           | String            | Business category of merchant           | "SOFTWARE AND IT"                       |
| `sourceOfFunds`           | String            | Business category of merchant           | "SOFTWARE AND IT"                       |
| `customerOrigin`          | String            | Business category of merchant           | "SOFTWARE AND IT"                       |
| `establishedAt`           | DateTime          | Established date time of merchant       | "2018-03-26T04:50:57Z"                  |
| `countryCode`             | String            | Country code of merchant contact number | "60"                                    |
| `phoneNumber`             | String            | Phone number of merchant                | "377334080"                             |
| `addressLine1`            | String            | Address 1 of merchant                   | "20, JALAN JASA 38, TAMAN MUTIARA RINI" |
| `addressLine2`            | String            | Address 2 of merchant                   | ""                                      |
| `postcode`                | String            | Postcode of merchant                    | “81300”                                 |
| `city`                    | String            | City of merchant                        | "Selangor"                              |
| `state`                   | String            | State of merchant                       | "Selangor"                              |
| `country`                 | String            | Country of merchant                     | "Malaysia"                              |
| `isSameBusinessAddress`   | Boolean           |                                         | false                                   |
| `invoiceAddress`          | String (nullable) |                                         | null                                    |
| `inspectList`             | String (nullable) |                                         | null                                    |
| `status`                  | String            | Current status of merchant              | “REVIEWING”                             |
| `document`                | Object            |                                         | Refer Below                             |
| `documentFile`            | Object            |                                         | Refer Below                             |
| `bankAccountNo`           | String            |                                         | ""                                      |
| `bankAccountType`         | String            |                                         | ""                                      |
| `bankAccountHolderName`   | String            |                                         | ""                                      |
| `bankName`                | String            |                                         | ""                                      |
| `bankCode`                | String            |                                         | ""                                      |
| `averageTicketSize`       | Uint              |                                         | 0                                       |
| `averageTurnoverPerMonth` | Uint              |                                         | 0                                       |
| `paymentSubscription`     | String            |                                         | ""                                      |
| `createdAt`               | DateTime          | Creation date time of merchant          | "2021-02-12T08:53:13Z"                  |
| `updatedAt`               | DateTime          | Last update date time of merchant       | "2021-02-12T08:53:13Z"                  |

<br/>

> Example Response

```json
{
  "item": {
    "id": "1629258558902992793",
    "merchantId": "1629258448138509563",
    "isDefault": true,
    "companyName": "Ed Testing",
    "companyType": "",
    "registrationNumber": "",
    "businessCategory": "",
    "businessScope": "",
    "sourceOfFunds": "",
    "customerOrigin": "",
    "establishedAt": "0001-01-01T00:00:00Z",
    "countryCode": "60",
    "phoneNumber": "164699197",
    "addressLine1": "",
    "addressLine2": "",
    "postcode": "",
    "city": "",
    "state": "",
    "country": "",
    "isSameBusinessAddress": false,
    "invoiceAddress": null,
    "inspectList": null,
    "status": "REVIEWING",
    "document": {
      "ctosFileUrl": "",
      "ownerICFileUrl": "",
      "directorICFileUrl": "",
      "shareHolderICFileUrl": "",
      "businessRegistrationFileUrl": "",
      "bankStatementFileUrl": "",
      "moaFileUrl": "",
      "form24FileUrl": "",
      "form49FileUrl": "",
      "section14FileUrl": "",
      "form44FileUrl": "",
      "businessSitePhotoFileUrl": "",
      "essmDocumentFileUrl": "",
      "letterOfConsentFileUrl": ""
    },
    "documentFile": {
      "CTOSFileURL": null,
      "OwnerICFileURL": null,
      "DirectorICFileURL": null,
      "ShareHolderICFileURL": null,
      "BusinessRegistrationFileURL": null,
      "BankStatementFileURL": null,
      "MOAFileURL": null,
      "Form24FileURL": null,
      "Form49FileURL": null,
      "Section14FileURL": null,
      "Form44FileURL": null,
      "BusinessSitePhotoFileURL": null
    },
    "bankAccountNo": "",
    "bankAccountType": "",
    "bankAccountHolderName": "",
    "bankName": "",
    "bankCode": "",
    "averageTicketSize": 0,
    "averageTurnoverPerMonth": 0,
    "paymentSubscription": "",
    "createdAt": "2021-08-18T14:28:12Z",
    "updatedAt": "2021-08-18T14:28:12Z"
  },
  "code": "SUCCESS"
}
```
