# Request

```
GET /v3/loyalty/me/vouchers?limit=100&cursor=asdasd

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
    "meta": {
        "count": 2
    },
    "items": [
        {
            "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIWCgdWb3VjaGVyGgtaUVlhUzAzVEppdA",
            "label": "Test",
            "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQuceypfycqqUW",
            "type": "CASH",
            "amount": 100,
            "discountRate": 0,
            "minimumSpendAmount": 0,
            "origin": "SYSTEM",
            "imageUrl": "",
            "memberProfile": null,
            "assignedAt": "0001-01-01T00:00:00Z",
            "qrUrl": "",
            "code": "ZQYaS03TJit",
            "isShipping": false,
            "address": null,
            "expiry": {
                "type": "DYNAMIC",
                "day": 1,
                "expiredAt": "2020-11-26T05:26:01Z"
            },
            "usedAt": "0001-01-01T00:00:00Z",
            "redeemedAt": "2020-11-25T05:26:01Z",
            "isDeviceRedeem": true,
            "status": "REDEEMED",
            "voucherComboKey": null,
            "isMarketPlace": false,
            "createdAt": "2020-11-25T05:25:30Z",
            "updatedAt": "2020-11-25T05:26:01Z"
        },
        {
            "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIcCgdWb3VjaGVyGhFybXNAeFI0M3U0YlJoVVUtMA",
            "label": "asdasd",
            "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQs4n7iuzioaQW",
            "type": "CASH",
            "amount": 100,
            "discountRate": 0,
            "minimumSpendAmount": 0,
            "origin": "SYSTEM",
            "imageUrl": "",
            "memberProfile": null,
            "assignedAt": "0001-01-01T00:00:00Z",
            "qrUrl": "",
            "code": "rms@xR43u4bRhUU",
            "isShipping": false,
            "address": null,
            "expiry": {
                "type": "DYNAMIC",
                "day": 1,
                "expiredAt": "2020-11-26T04:33:04Z"
            },
            "usedAt": "0001-01-01T00:00:00Z",
            "redeemedAt": "2020-11-25T04:33:04Z",
            "isDeviceRedeem": true,
            "status": "REDEEMED",
            "voucherComboKey": null,
            "isMarketPlace": false,
            "createdAt": "2020-11-18T06:43:19Z",
            "updatedAt": "2020-11-25T04:33:04Z"
        }
    ]
}
```