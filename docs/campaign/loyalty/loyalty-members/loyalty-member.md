---
id: loyalty-member
title: Get Loyalty Member By ID
sidebar_label: Get Loyalty Member By ID
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
Url : `https://open.revenuemonster.my/v3/loyalty/member/2940921291529816182`<br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/loyalty/member/2940921291529816182`

:::note
Get loyalty member by memberId
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::

### Respond Parameters

> Example Respond

```json
{
  "item": {
    "id": "2940921291529816182",
    "name": "Gan",
    "email": "junkai@revenuemonster.my",
    "nric": "",
    "address": {
      "addressLine1": "",
      "addressLine2": "",
      "postcode": "",
      "city": "",
      "state": "",
      "country": ""
    },
    "gender": "",
    "state": "",
    "birthDate": "0001-01-01T00:00:00Z",
    "loyaltyPoint": 0,
    "countryCode": "60",
    "phoneNumber": "167367171",
    "profileImageUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png",
    "memberTier": null,
    "status": "ACTIVE",
    "createdAt": "2018-09-19T10:00:21Z"
  },
  "code": "SUCCESS"
}
```
