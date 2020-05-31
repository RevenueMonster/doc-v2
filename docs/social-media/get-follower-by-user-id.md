---
id: get-follower-by-user-id
title: Get Follower By User ID
sidebar_label: Get Follower By User ID
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
Url : `https://sb-open.revenuemonster.my/v3/socialmedia/messenger/follower/1276194035819892`<br/>

:::note
Get Messenger Follower By UserID
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
    "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCg1NZXNzZW5nZXJQYWdlEPGM2cyW38ICEhwKEU1lc3NlbmdlckZvbGxvd2VyEPTKraGRlqIC",
    "messengerId": 1276194035819892,
    "messengerPageKey": "EhgKDU1lc3NlbmdlclBhZ2UQ8YzZzJbfwgI",
    "firstName": "Junny",
    "lastName": "Lai",
    "profileImageUrl": "https://scontent.xx.fbcdn.net/v/t1.0-1/20882032_1531510183582448_2931528019550823604_n.jpg?oh=1c50d713d81205d37b12bf5120d109ac&oe=5B3881E7",
    "gender": "MALE",
    "status": "ACTIVE",
    "subscribedAt": "2018-03-08T02:16:12Z",
    "createdAt": "2018-03-08T02:16:12Z",
    "updatedAt": "2018-03-08T02:16:12Z"
  },
  "code": "SUCCESS"
}
```
