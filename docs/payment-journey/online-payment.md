---
id: online-payment
title: "Online Payment"
sidebar_label: "Online Payment"
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

# Online Payment

Online payment allow business to accept online payments through our web applications. With Revenue Monster's Online Payment, customer can enter payment details or select e-wallet options to complete the payment process from their smartphones and website.

- Demo Web Payment (Version 3): [Click Here](https://sb-api.revenuemonster.my/demo/payment/online)

:::info
Online payment is an online payment method and it's subscription will based on online subscription rate.
:::

<Flex justifyContent="center">
  <Button
    width="100%"
    sx={{
      ":hover": {
        backgroundColor: "blue",
      },
      backgroundColor: "#528ef7",
      borderRadius: 15,
    }}
    onClick={() => {
      window.location.href =
        "https://drive.google.com/drive/folders/1MOJBWY6aw6KiUUMRMbHo-hXMuxjI3Z0Q?usp=sharing";
    }}
  >
    Payment Sequence Diagram
  </Button>
</Flex>

<br />

**Example of Web Payment**

![image](/img/gif/web-payment.gif)

**Example of Mobile Payment**

<img src="/img/gif/mobile-web-payment.gif" width="300" height="600" />


## Hosted Payment Checkout

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/online`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/online`

:::note
- To create a unified payment checkout page for your website and mobile.
- **Data object** needs to be sorted, the **Nested object** also needs to be sorted.
:::

**Request Parameters**

| Parameter              | Type     | Validation                            | Required    | Description                                                                  |
| ---------------------- | -------- | ------------------------------------- | ----------- | ---------------------------------------------------------------------------- |
| `storeId`              | String   |                                       | Yes         | Store ID                                                                     |
| `redirectUrl`          | String   | URL                                   | Yes         | Example of [Redirect URL Response](#redirect-url)                            |
| `notifyUrl`            | String   | URL                                   | Yes         | Example of [Notify URL Response](#notify-url)                                |
| `layoutVersion`        | String   | ENUM("v1", "v2", "v3")                | Yes         | v1 / **v2 (Supported Credit Card)** / **v3 (Supported Credit Card and FPX)** |
| `type`                 | String   | ENUM("WEB_PAYMENT", "MOBILE_PAYMENT") | Yes         | Checkout session type                                                        |
| `method`               | []String |                                       | No          | Payment methods                                                              |
| `order.id`             | String   | Length(24)                            | Yes         | Order ID                                                                     |
| `order.title`          | String   | Length(32)                            | Yes         | Order Title                                                                  |
| `order.currencyType`   | String   | ENUM("MYR")                           | Yes         | Order Currency Type ( currently supported MYR only)                          |
| `order.amount`         | Uint64   |                                       | Yes         | Order Amount                                                                 |
| `order.detail`         | String   | Length(600)                           | No          | Order Detail                                                                 |
| `order.additionalData` | String   | Length(128)                           | No          | Order Additional Data                                                        |
| `customer.userId`      | String   |                                       | Conditional | **Required** when the tokenization is enabled                                |
| `customer.email`       | String   |                                       | No          |                                                                              |
| `customer.countryCode` | String   |                                       | No          |                                                                              |
| `customer.phoneNumber` | String   |                                       | No          |                                                                              |

**Response Parameters**

| Parameter         | Type   | Validation      | Description                    |
| ----------------- | ------ | --------------- | ------------------------------ |
| `item.checkoutId` | String |                 | Checkout session id            |
| `item.url`        | String |                 | Checkout session url           |
| `code`            | String | ENUM("SUCCESS") | Determine request have success |
| `error.code`      | String |                 | Error code                     |
| `error.message`   | String |                 | Error message                  |
| `error.debug`     | String |                 | Debug message ( sandbox only ) |

### Advance: Individual Payment Checkout

After you have the **checkout session url** from the checkout api, you can append a query params "method" to proceed method checkout.

**Example**:
https://sb-pg.revenuemonster.my/checkout?checkoutId=1548316308361173347&method=TNG_MY


### Redirect Response

:::info
Redirect URL to redirect your customer back to your page after payment, it's can be any of the URL ( deeplink, browser url, server url ) as long as the browser itself can go and process.
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>GET</span><br/>

| Parameter | Type   | Validation                                        | Required | Description         |
| --------- | ------ | ------------------------------------------------- | -------- | ------------------- |
| `status`  | String | Enum("SUCCESS", "FAILED", "CANCELLED", "EXPIRED") | Yes      | Payment Status      |
| `orderId` | String |                                                   | Yes      | Payment Order ID    |
| `reason`  | String |                                                   | No       | Payment fail reason |

### Notify Response

:::info
Notify URL or Callback URL to inform server on transaction status after payment made. <br />

Notify will call only when the transaction is success, fail and refund will not fired a notify to your server. We suggest you to do a query transaction to get full transaction info if you need full info, for notify will only response the partial transaction info.

Reference: [Query Transaction](./query-transaction.md)
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>

| Parameter                   | Type                       | Validation                                                            | Required | Description                                                |
| --------------------------- | -------------------------- | --------------------------------------------------------------------- | -------- | ---------------------------------------------------------- |
| `eventType`                 | ENUM("PAYMENT_WEB_ONLINE") |                                                                       | Yes      | Notify event type                                          |
| `data.store`                | JSON                       | [Transaction Object: Store](./query-transaction.md#store)             | No       | Store details                                              |
| `data.referenceId`          | String                     |                                                                       | No       | Reference ID                                               |
| `data.transactionId`        | String                     |                                                                       | Yes      | Transaction ID                                             |
| `data.terminalId`           | String                     |                                                                       | No       | Terminal ID                                                |
| `data.currencyType`         | String                     | ENUM("MYR")                                                           | Yes      | Currency Type ( currently supported MYR only)              |
| `data.balanceAmount`        | Uint64                     |                                                                       | Yes      | Remaining balance amount for initiate refund               |
| `data.finalAmount`          | Uint64                     |                                                                       | Yes      | Amount after all deductions ( voucher, membership)         |
| `data.platform`             | String                     | ENUM("TERMINAL", "MOBILE_APP", "OPEN_API", "WEB_LOYALTY")             | Yes      | Transaction platform                                       |
| `data.type`                 | String                     | [Appendix: Type](./query-transaction.md#transaction-type)             | Yes      | Transaction type                                           |
| `data.method`               | String                     | [Appendix: Method](./query-transaction.md#transaction-method--region) | Yes      | Transaction payment method                                 |
| `data.region`               | String                     | [Appendix: Region](./query-transaction.md#transaction-method--region) | Yes      | Transaction pament region                                  |
| `data.status`               | String                     | [Appendix: Status](./query-transaction.md#transaction-status)         | Yes      | Transaction payment status                                 |
| `data.transactionAt`        | String                     | RFC3339                                                               | No       | Transaction payment date time ( exists only when SUCCESS ) |
| `data.createdAt`            | String                     | RFC3339                                                               | Yes      | Transaction created date time                              |
| `data.updatedAt`            | String                     | RFC3339                                                               | Yes      | Transaction last updated date time                         |
| `data.payee.userId`         | String                     |                                                                       | No       | Payment provider user id                                   |
| `data.payee.subUserId`      | String                     |                                                                       | No       | Payment provider sub user id                               |
| `data.order.id`             | String                     |                                                                       | Yes      | Order ID                                                   |
| `data.order.title`          | String                     | Length(32)                                                            | Yes      | Order Title                                                |
| `data.order.currencyType`   | String                     | ENUM("MYR")                                                           | Yes      | Order Currency Type ( currently supported MYR only)        |
| `data.order.amount`         | Uint64                     |                                                                       | Yes      | Order Amount                                               |
| `data.order.detail`         | String                     | Length(600)                                                           | No       | Order Detail                                               |
| `data.order.additionalData` | String                     | Length(128)                                                           | No       | Order Additional Data                                      |