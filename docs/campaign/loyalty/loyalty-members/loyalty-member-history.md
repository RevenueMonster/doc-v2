---
id: loyalty-member-history
title: Get Loyalty Member Hisotry
sidebar_label: Get Loyalty Member Hisotry
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL: `https://open.revenuemonster.my/v3/loyalty/member/2940921291529816182/history`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/member/2940921291529816182/history`

:::note
Get Loyalty Member Point History By `Member ID`
:::

### Request Parameters

:::note

- The URL is consists of `[base_URL]`/v3/loyalty/member/`[member_id]`/history

- Pass an empty JSON object Example: `{}`

:::

### Response Parameters

> Example Response

```json
{
  "items": [
    {
      "key": "EhIKBk1lbWJlchD2kJLw04qQ6CgSGQoNTWVtYmVyUHJvZmlsZRDFjJ-q6rzOxi8SGgoOTG95YWx0eUhpc3RvcnkQs7zyjL79rLIh",
      "type": "POINT_EXPIRED",
      "description": "99 loyalty points expired",
      "point": -99,
      "PointBalance": 0,
      "createdAt": "2018-09-19T16:00:00Z",
      "updatedAt": "0004-04-04T04:04:04Z"
    },
    {
      "key": "EhIKBk1lbWJlchD2kJLw04qQ6CgSGQoNTWVtYmVyUHJvZmlsZRDFjJ-q6rzOxi8SGgoOTG95YWx0eUhpc3RvcnkQ5dH4usjY7coe",
      "type": "VOUCHER_REDEEM",
      "description": "Redeemed voucher",
      "point": 0,
      "PointBalance": 99,
      "createdAt": "2018-09-19T10:01:02Z",
      "updatedAt": "0001-01-01T00:00:00Z"
    },
    {
      "key": "EhIKBk1lbWJlchD2kJLw04qQ6CgSGQoNTWVtYmVyUHJvZmlsZRDFjJ-q6rzOxi8SGgoOTG95YWx0eUhpc3RvcnkQmtaHztvlwqUW",
      "type": "VOUCHER_REDEEM",
      "description": "Discount for Apple Product voucher redeemed",
      "point": -1,
      "PointBalance": 99,
      "createdAt": "2018-09-19T10:00:37Z",
      "updatedAt": "2018-09-19T10:00:37Z"
    },
    {
      "key": "EhIKBk1lbWJlchD2kJLw04qQ6CgSGQoNTWVtYmVyUHJvZmlsZRDFjJ-q6rzOxi8SGgoOTG95YWx0eUhpc3RvcnkQzYCj3ofay5YO",
      "type": "QR_CODE_REDEEM",
      "description": "Earned 100 points",
      "point": 100,
      "PointBalance": 100,
      "createdAt": "2018-09-19T10:00:21Z",
      "updatedAt": "2018-09-19T10:00:21Z"
    }
  ],
  "code": "SUCCESS",
  "meta": {
    "count": 4
  }
}
```
