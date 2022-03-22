---
id: update-application-client
title: Update Application Client
sidebar_label: Update Application Client
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "blue", fontWeight: "bold" }}>PUT</span><br/>
URL : `https://open.revenuemonster.my/v3/partner/merchant/{merchantId}/application/{clientId}`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantId}/application/{clientId}`

:::note
Update Application Client
:::

### Request Parameters

| Parameter          | Type         | Example |
| ------------------ | ------------ | ------- | ---------------------- |
| `userId`           | String       |         | "1647501978916382207"  |
| `name`             | String       |         | "Name"                 |
| `homePageUrl`      | String       |         | "https://google.com"   |
| `logoUrl`          | String       |         | "https://google.com"   |
| `privacyPolicyUrl` | String       |         | "https://google.com"   |
| `redirectUri`      | Array String |         | ["https://google.com"] |
| `publicKey`        | String       |         | "......"               |

<br />

> Example Request

```json
curl --location --request PUT "https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantId}/application/{clientId}" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Timestamp: 1528450585" \

```

> Example Body Request

```json
{
  "userId": "1647501978916382207",
  "name": "required name",
  "homePageUrl": "https://google.com",
  "logoUrl": "https://google.com",
  "privacyPolicyUrl": "https://google.com",
  "redirectUri": ["https://google.com"],
  "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBsJf/68nKn3WFcmbA4uK45\nYTQJ2M9XRf82COhN6OQpTLs4PEQSFCix9/05DdOfqe4PR64JS+nlA3q54YXLq++b\nuG8aerNM39Ie0VssTq+Wu3antoq9qvSQL0ADSfLPtWxRKirY8ysrFWN8yU2p7ofp\n/byYvo5DZ9i6aclctottecc/1NWaXWFSLzbsceSGjP3O+17+gMXCnwroT87XdGXJ\nY/D11Cly8sD3Ll9OKIT1aDlKkkR9FWcFct0wDYEedutBAMOFjYAW3jvcUbdi7CKy\neX42N7t7dIb1tw+WTFSpx5+tHKqRwLUq5S9eTx4e8+UxJ9LUTyr14O+TkTSL8Fpx\nAgMBAAE=\n-----END PUBLIC KEY-----"
}
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object |                                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

| Parameter             | Type           | Description                       | Example                                                                             |
| --------------------- | -------------- | --------------------------------- | ----------------------------------------------------------------------------------- |
| `clientId`            | String         |                                   | "1647502414730379278"                                                               |
| `client`              | Object         |                                   | {publicKey: "**refer below example**"}                                              |
| `name`                | String         |                                   | "required name"                                                                     |
| `homePageUrl`         | String         |                                   | "https://google.com"                                                                |
| `logoUrl`             | String         |                                   | "https://storage.googleapis.com/rm-sandbox-asset/img/default-application-logo.png", |
| `privacyPolicyUrl`    | String         |                                   | "https://google.com"                                                                |
| `merchantKey`         | String         |                                   | "EhQKCE1lcmNoYW50EK6nndaiysbuFg"                                                    |
| `userKey`             | String         |                                   | "EhQKCE1lcmNoYW50EK6nndaiysbuFhIQCgRVc2VyEP_LweCiysbuFg"                            |
| `oAuthClientProducts` | Array          |                                   | []                                                                                  |
| `isActive`            | Bool           |                                   | false                                                                               |
| `redirectUri`         | Array (String) |                                   | ["https://google.com"],                                                             |
| `createdAt`           | DateTime       | Creation date time of merchant    | "2021-02-12T08:53:13Z"                                                              |
| `updatedAt`           | DateTime       | Last update date time of merchant | "2021-02-12T08:53:13Z"                                                              |

<br />

```json
{
  "item": {
    "clientId": "1647502414730379278",
    "client": {
      "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBsJf/68nKn3WFcmbA4uK45\nYTQJ2M9XRf82COhN6OQpTLs4PEQSFCix9/05DdOfqe4PR64JS+nlA3q54YXLq++b\nuG8aerNM39Ie0VssTq+Wu3antoq9qvSQL0ADSfLPtWxRKirY8ysrFWN8yU2p7ofp\n/byYvo5DZ9i6aclctottecc/1NWaXWFSLzbsceSGjP3O+17+gMXCnwroT87XdGXJ\nY/D11Cly8sD3Ll9OKIT1aDlKkkR9FWcFct0wDYEedutBAMOFjYAW3jvcUbdi7CKy\neX42N7t7dIb1tw+WTFSpx5+tHKqRwLUq5S9eTx4e8+UxJ9LUTyr14O+TkTSL8Fpx\nAgMBAAE=\n-----END PUBLIC KEY-----"
    },
    "name": "required name",
    "homePageUrl": "https://google.com",
    "logoUrl": "https://google.com",
    "privacyPolicyUrl": "https://google.com",
    "merchantKey": "EhQKCE1lcmNoYW50EK6nndaiysbuFg",
    "userKey": "EhQKCE1lcmNoYW50EK6nndaiysbuFhIQCgRVc2VyEP_LweCiysbuFg",
    "oAuthClientProducts": [],
    "isActive": false,
    "redirectUri": ["https://google.com"],
    "createdAt": "2022-03-17T07:33:34Z",
    "updatedAt": "2022-03-17T07:36:10.0593636Z"
  },
  "code": "SUCCESS"
}
```
