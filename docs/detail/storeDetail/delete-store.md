---
id: delete-store
title: Delete Store
sidebar_label: Delete Store
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "red", fontWeight: "bold" }}>DEL</span><br/>
Url : `https://sb-open.revenuemonster.my/v3/store/1662168764176583360`

:::note
To delete specific store under this merchant. Specify `store_id` in query parameter.
:::

<strong>Request Parameters:</strong>

:::note
No request parameter is required for this endpoint.
:::

<strong>Response Parameters:</strong>

| Parameter | Type   | Description                                                                                               | Example   |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | --------- |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS" |

> Example Respond

```json
{
  "code": "SUCCESS"
}
```
