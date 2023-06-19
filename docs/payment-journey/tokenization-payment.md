---
id: tokenization-payment
title: "Tokenization Payment"
sidebar_label: "Tokenization Payment"
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

# Tokenization Payment

Tokenization involves the substitution of sensitive data with non-sensitive data. Within the payments sector, it is employed to protect a card's Primary Account Number (PAN) by substituting it with a distinctive sequence of numbers. Payment tokens are issued in real-time used at online payment scenario only example recurring, subscription and mobility or even micromobility transactions.

## Tokenization: Recurring Payment

Recurring payment is for your customer to bind their card and our system able to take the fund from customer card and receive payment based on the recurring rules been defined and pass to recurring engine.

### Create Recurring Payment

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/recurring-payment`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/recurring-payment`

**Request Parameters**

| Parameter | Type   | Validation | Required | Description    |
| --------- | ------ | ---------- | -------- | -------------- |
| `storeId` | String |            | Yes      | Store ID       |
| `email`   | String | EMAIL      | Yes      | Customer email |
| `name`    | String |            | Yes      | Customer name  |

## Tokenization: Tokenized Customer

Tokenized customer is for your to let your customer bind their card and you can take the fund from customer and receive payment based on your own requirements. If you have own recurring engine to process payment you can using this API instead of our recurring payment example like [WooCommerce Subscription Plugin](https://woocommerce.com/products/woocommerce-subscriptions/).