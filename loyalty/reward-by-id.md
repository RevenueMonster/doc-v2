# Request

```
GET /v3/loyalty/me/reward/1575971661443933008

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
        "id": "1575971661443933008",
        "label": "Prudential RM 5 Cash Vouchers ( BoostPulse )",
        "imageUrl": "https://storage.googleapis.com/rm-sandbox-merchant/4118165203679668885/gallery/00c5184b36484d865372c1841f4cc4ce.jpeg",
        "point": 1,
        "payload": {
            "tnc": [
                "T&C"
            ],
            "contactInfo": {
                "email": "",
                "phoneNumber": ""
            }
        },
        "isShipping": false,
        "quantity": 49998,
        "balanceQuantity": 49991,
        "usedQuantity": 2,
        "redeemQuantity": 7,
        "isEnabled": true,
        "limitPerUser": 1,
        "status": "COMPLETED",
        "isCombo": false,
        "type": "",
        "createdAt": "2019-12-10T09:54:21Z",
        "updatedAt": "2019-12-10T09:55:05Z",
        "expiredAt": "2020-12-05T15:59:59Z"
    }
}
```