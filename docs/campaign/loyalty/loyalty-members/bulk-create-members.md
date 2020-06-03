---
id: bulk-create-members
title: Bulk Create Members
sidebar_label: Bulk Create Members
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
Url : `https://open.revenuemonster.my/v3/loyalty/members`<br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/loyalty/members`

:::note
Get Loyalty Memeber Point History By `Member ID`
:::

### Request Parameters

```json
curl --location --request POST 'https://sb-open.revenuemonster.my/v3/loyalty/members' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA' \
--header 'X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==' \
--header 'X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN' \
--header 'X-Timestamp: 1528450585' \
--data-raw '{
	"members": [{
	    "name": "testing 1",
	    "countryCode": "60",
	    "phoneNumber": "1622288812",
	    "nric": "970503145887",
	    "email": "test@email.com",
	    "gender": "MALE",
	    "state": "",
	    "address": {
	      "addressLine1": "",
	      "addressLine2": "",
	      "postcode": "52100",
	      "city": "",
	      "country": ""
	     },
	     "loyaltyPoint": 10
	    },
	    {
	    "name": "testing 2",
	    "countryCode": "60",
	    "phoneNumber": "1622288813",
	    "nric": "970503145887",
	    "email": "test@email.com",
	    "gender": "MALE",
	    "state": "",
	    "address": {
	      "addressLine1": "",
	      "addressLine2": "",
	      "postcode": "52100",
	      "city": "",
	      "country": ""
	    }
	}]
}'

```

### Respond Parameters

> Example Respond

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
