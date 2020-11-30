# Request

```
POST /v3/loyalty/member/check

Headers 

{
    authorization: Bearer {{token}}
}

Body

{
    "countryCode": "60",
    "phoneNumber": "1878241152"
}
```

# Response

```js
{
    "item": true,
    "code": "SUCCESS"
}
```