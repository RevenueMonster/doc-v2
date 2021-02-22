---
id: get-fpx-bank-list
title: Get Fpx Bank List
sidebar_label: Get Fpx Banks
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/fpx-bank`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/fpx-bank`

:::note
To get fpx bank lists
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

```json
{
    "item": {
        "AFFIN_BANK": {
            "code": "AFFIN_BANK",
            "isOnline": true,
            "name": "Affin Bank"
        },
        "ALLIANCE_BANK": {
            "code": "ALLIANCE_BANK",
            "isOnline": true,
            "name": "Alliance Bank"
        },
        "AMBANK": {
            "code": "AMBANK",
            "isOnline": true,
            "name": "AmBank"
        },
        "BANK_ISLAM": {
            "code": "BANK_ISLAM",
            "isOnline": true,
            "name": "Bank Islam"
        },
        "BANK_MUAMALAT": {
            "code": "BANK_MUAMALAT",
            "isOnline": true,
            "name": "Bank Muamalat"
        },
        "BANK_RAKYAT": {
            "code": "BANK_RAKYAT",
            "isOnline": false,
            "name": "Bank Rakyat"
        },
        "BSN": {
            "code": "BSN",
            "isOnline": true,
            "name": "Bank Simpanan Nasional"
        },
        "CIMB_CLICKS": {
            "code": "CIMB_CLICKS",
            "isOnline": true,
            "name": "CIMB Bank"
        },
        "HLB_CONNECT": {
            "code": "HLB_CONNECT",
            "isOnline": true,
            "name": "Hong Leong Bank"
        },
        "HSBC": {
            "code": "HSBC",
            "isOnline": true,
            "name": "HSBC"
        },
        "KUWAIT_FINANCE_HOUSE": {
            "code": "KUWAIT_FINANCE_HOUSE",
            "isOnline": false,
            "name": "Kuwait Finance House"
        },
        "MAYBANK2U": {
            "code": "MAYBANK2U",
            "isOnline": true,
            "name": "Maybank"
        },
        "OCBC": {
            "code": "OCBC",
            "isOnline": true,
            "name": "OCBC"
        },
        "PUBLIC_BANK": {
            "code": "PUBLIC_BANK",
            "isOnline": true,
            "name": "Public Bank"
        },
        "RHB_NOW": {
            "code": "RHB_NOW",
            "isOnline": true,
            "name": "RHB Bank"
        },
        "STANDARD_CHARTERED_BANK": {
            "code": "STANDARD_CHARTERED_BANK",
            "isOnline": true,
            "name": "Standard Chartered Bank"
        },
        "UNITED_OVERSEA_BANK": {
            "code": "UNITED_OVERSEA_BANK",
            "isOnline": true,
            "name": "United Oversea Bank"
        }
    },
    "code": "SUCCESS"
}
```
