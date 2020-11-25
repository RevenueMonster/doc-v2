# Request

```
POST /v3/loyalty/me/voucher/rms@xR43u4bRhUU/redeem

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
        "payload": null,
        "qrUrl": "",
        "code": "rms@xR43u4bRhUU",
        "isShipping": false,
        "address": null,
        "expiry": {
            "type": "DYNAMIC",
            "day": 1,
            "expiredAt": "2020-11-26T04:33:04Z"
        },
        "usedAt": "2020-11-25T13:58:55+08:00",
        "redeemedAt": "2020-11-25T04:33:04Z",
        "isDeviceRedeem": true,
        "status": "VOID",
        "voucherComboKey": null,
        "isMarketPlace": false,
        "createdAt": "2020-11-18T06:43:19Z",
        "updatedAt": "2020-11-25T05:58:56Z"
    }
}
```