# Request

```
POST /v3/loyalty/member

Headers

{
    authorization: Bearer {{token}}
}

Body

{
    "name": "Oska",
    "countryCode": "60",
    "phoneNumber": "1878241152",
    "email":"developer.oskang@gmail.com",
    "nric": "990714055405",
    "birthDate": "1999-07-14T00:00:00Z",
    "gender": "MALE",
    "state": "JOHOR",
    "point": 0,
    "address": {
        "addressLine1": "1, Jalan Pertanian 25",
        "addressLine2": "Taman Universiti",
        "postCode": "81300",
        "city": "SKUDAI",
        "State": "JOHOR",
        "Country": "MALAYSIA"
    }
}
```

# Response

```js
{
    "item": {
        "id": "",
        "key": "EhIKBk1lbWJlchDCkZOfvLyOphYSGQoNTWVtYmVyUHJvZmlsZRCZp_uzvLyOphY",
        "name": "Oska",
        "email": "",
        "nric": "950711015205",
        "birthDate": "1995-07-11",
        "gender": "MALE",
        "state": "JOHOR",
        "address": {
            "addressLine1": "17, Jalan Pertanian 25",
            "addressLine2": "Taman Universiti",
            "postcode": "81301",
            "city": "SKUDAI",
            "state": "JOHOR",
            "country": "MALAYSIA"
        },
        "memberTier": null,
        "totalLoyaltyPoint": 0,
        "hasPinCode": false,
        "loyaltyPointBalance": 0,
        "spendingPoint": 0,
        "creditBalance": 0,
        "status": "ACTIVE",
        "createdAt": "2020-11-30T07:53:37.0578116Z",
        "updatedAt": "0001-01-01T00:00:00Z"
    },
    "code": "SUCCESS"
}
```
