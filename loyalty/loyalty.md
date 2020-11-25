# Request

```
GET /v3/loyalty/me

Headers 

{
    authorization: Bearer {{token}}
    x-loyalty-cn: 60
    x-loyalty-pn: 187824152
}

```



# Response

```js
{
    "code": "SUCCESS",
    "item": {
        "id": "",
        "key": "EhIKBk1lbWJlchDOuOKz24XWkg4SGQoNTWVtYmVyUHJvZmlsZRDl-MTxiPOPjzY",
        "name": "yussuf",
        "email": "yussuf888@gmail.com",
        "nric": "",
        "birthDate": "0001-01-01",
        "gender": "",
        "state": "",
        "address": {
            "addressLine1": "",
            "addressLine2": "",
            "postcode": "",
            "city": "",
            "state": "",
            "country": ""
        },
        "memberTier": null,
        "totalLoyaltyPoint": 0,
        "hasPinCode": false,
        "loyaltyPointBalance": 0,
        "spendingPoint": 0,
        "creditBalance": 10160,
        "status": "ACTIVE",
        "createdAt": "2018-10-19T03:39:47Z",
        "updatedAt": "2020-06-29T10:14:33Z"
    }
}
```