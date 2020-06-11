---
id: get-voucher-batches
title: Get Voucher Batches
sidebar_label: Get Voucher Batches
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
Url : `https://open.revenuemonster.my/v3/voucher-batches`<br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/voucher-batches`

:::note
To get multiple voucher batches.
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

| Parameter | Type     | Description                                                                                               | Example                      |
| --------- | -------- | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `items`   | []Object | Voucher object array                                                                                      | (Refer to explanation below) |
| `code`    | String   | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>

<strong>Voucher object (items):</strong>

| Parameter         | Type             | Description                                                                                                                | Example                                                                  |
| ----------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `id`              | String           | Voucher ID                                                                                                                 | “6544507929221794245"                                                    |
| `key`             | String           | Vocher Key                                                                                                                 | "EhQKCE1lcmNoYW50EJXVzd3wraq<br/>TORIVCgdWb3VjaGVyGgp<br/>OQWtsRWZiVmRW" |
| `label`           | String           | label of voucher for merchant remarks                                                                                      | "Free Breakfast”                                                         |
| `type`            | String           | Define type of vouchers: **DISCOUNT**, **GIFT**, “CASH"                                                                    | “GIFT"                                                                   |
| `amount`          | Uint             | Required if type = **CASH**, notation in cents, eg. RM 1.00 = 100                                                          | 10000                                                                    |
| `discountRate`    | Uint             | Required if type = **DISCOUNT**, notation without decimals, eg. 1% = 100                                                   | 0                                                                        |
| `imageUrl`        | String           | Image URL of current voucher, optional                                                                                     | Image Url link (refer to below code)                                     |  |
| `quantity`        | Uint             | Total quantity of voucher(s) in this batch                                                                                 | 1                                                                        |
| `balanceQuantity` | Uint             | Total quantity of voucher(s) remaining in this batch                                                                       | 0                                                                        |
| `usedQuantity`    | Uint             | Total quantity of voucher(s) used/assigned/redeemed in this batch                                                          | 1                                                                        |
| `expiry`          | Object of Expiry | Expiry date time of current voucher                                                                                        | (Refer below)                                                            |
| `origin`          | String           | **SYSTEM** (voucher code generated from RM server), **SELF** (voucher code uploaded from merchant csv file)                | “SYSTEM”                                                                 |
| `isShipping`      | Boolean          | **True** if items/goods to be delivered physically to customers                                                            | false                                                                    |
| `reason`          | String           | Will show if voucher batch is fail during creation. Optional.                                                              | ”"                                                                       |
| `isDeviceRedeem`  | Boolean          | **TRUE** means only can be redeemed through merchant app. **FALSE** means customer can do redemption from own loyalty app. | false                                                                    |
| `createdAt`       | DateTime         | Date time of voucher being created (UTC)                                                                                   | "2018-06-21T11:08:00Z"                                                   |
| `updatedAt`       | DateTime         | Date time of voucher being updated (UTC)                                                                                   | "2018-09-28T17:19:44.686549977Z"                                         |

> Example Response

```json
{
  "items": [
    {
      "id": "6544507929221794245",
      "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQxZP495jpsOla",
      "label": "Shell Voucher",
      "type": "CASH",
      "amount": 10000,
      "discountRate": 0,
      "imageUrl": "https://storage.googleapis.com/rm-sandbox-merchant/4118165203679668885/gallery/1d2721426e06da4b2b459446135da29e.jpeg",
      "quantity": 1,
      "balanceQuantity": 0,
      "usedQuantity": 1,
      "status": "COMPLETED",
      "expiry": {
        "type": "DYNAMIC",
        "day": 1,
        "expiredAt": "2050-12-31T23:59:59Z"
      },
      "origin": "SYSTEM",
      "isShipping": false,
      "reason": "",
      "isDeviceRedeem": true,
      "createdAt": "2018-09-21T07:12:31Z",
      "updatedAt": "2018-09-26T07:15:54Z"
    },
    {
      "id": "8223209398981211509",
      "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQ9eq2n5SsrY9y",
      "label": "Wedding",
      "type": "GIFT",
      "discountRate": 0,
      "imageUrl": "https://storage.googleapis.com/rm-sandbox-merchant/4118165203679668885/gallery/1d2721426e06da4b2b459446135da29e.jpeg",
      "quantity": 2,
      "balanceQuantity": 0,
      "usedQuantity": 0,
      "status": "COMPLETED",
      "expiry": {
        "type": "DYNAMIC",
        "day": 1,
        "expiredAt": "2050-12-31T23:59:59Z"
      },
      "origin": "SYSTEM",
      "isShipping": false,
      "reason": "",
      "isDeviceRedeem": false,
      "createdAt": "2018-09-19T03:41:54Z",
      "updatedAt": "2018-09-19T03:41:54Z"
    },
    {
      "id": "2304781924451151306",
      "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQytubna_ejv4f",
      "label": "Discount for Apple Product",
      "type": "GIFT",
      "discountRate": 0,
      "imageUrl": "https://storage.googleapis.com/rm-sandbox-merchant/4118165203679668885/gallery/9561650c763a67150e3323e2ce79aa2c.jpeg",
      "quantity": 10,
      "balanceQuantity": 0,
      "usedQuantity": 17,
      "status": "COMPLETED",
      "expiry": {
        "type": "DYNAMIC",
        "day": 1,
        "expiredAt": "2050-12-31T23:59:59Z"
      },
      "origin": "SYSTEM",
      "isShipping": false,
      "reason": "",
      "isDeviceRedeem": true,
      "createdAt": "2018-09-18T03:43:39Z",
      "updatedAt": "2018-09-18T03:43:39Z"
    }
  ],
  "code": "SUCCESS",
  "meta": {
    "count": 3
  }
}
```
