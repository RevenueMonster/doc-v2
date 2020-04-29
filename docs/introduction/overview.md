---
id: overview
title: Overview
sidebar_label: Overview
---

Revenue Monster (hereafter mentioned as RM) Open APIs allow developers to manage payments, users, stores, loyalty, and social media through RESTful API or SDK. All RM products have API for most of its core functionalities. Start with our comprehensive API to reimagine your business.

**API Environment Summary** <br />

There are two services for our API (OAuth and Open API),both for sandbox and production environment. OAuth server is for authentication, Open API server is for core functions. You may test with sandbox endpoints before going production. You could self-signup for sandbox access and contact <sandbox@revenuemonster.my> to activate your sandbox account.

##### Sandbox Environment
API Server -> https://sb-oauth.revenuemonster.my  
Authetication Server -> https://sb-open.revenuemonster.my

##### Production Environment
API Server -> https://oauth.revenuemonster.my  
Authetication Server -> https://open.revenuemonster.my



**Before You Start**

Go to our merchant portal in Production [Merchant Portal](https://merchant.revenuemonster.my/) or [Sandbox Merchant Portal](https://sb-merchant.revenuemonster.my/) to sign up as merchant.

Submit all required documents as shown in our merchant portal and get approval from our admin. Should you need more assistance, please contact us at <bd@revenuemonster.my>.

Kindly go through `Signature Algorithm` to see our signing mechanism before proceed to call payment API endpoint(s). Payment API have higher security requirements than the rest.