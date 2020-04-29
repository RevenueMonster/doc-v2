---
id: usecase
title: Business Use Case
sidebar_label: Business Use Case
---

For Merchant that using RM API to intergrate their E-Commerce platform :-

Web Payment
Mobile Payment
Mobile Browser

For Merchant that using Shop / Cafe :-

Transaction QR

- Redirect URL (URL to redirect after payment is made)
- Notify URL (This is a notify URL or callback URL to inform server on transaction status after payment made.)

QuickPay

Intergrate for Vending Machine :-

Transaction QR

Intergrate Supermarket

QuickPay
( To make payments with Quick Pay. Merchant to scan user's wallet.

- Scope: manage_payment
- Authentication: Access token obtained from Generate Access Token into Authorization header value as Bearer [access_token].
- If merchant has not entered Webhook URL and/or Client Public Key in Merchant Portal, system will throw error as below: )