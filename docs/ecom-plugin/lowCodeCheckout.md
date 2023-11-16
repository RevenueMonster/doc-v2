---
id: lowCodeCheckout
title: Low-Code Checkout Button
sidebar_label: (Official) Low-Code Checkout
---

<head>
    <link rel="stylesheet" href="https://rm-component-sandbox.oss-ap-southeast-3.aliyuncs.com/checkout-button/index.css" />
    <script type="module" src="https://rm-component-sandbox.oss-ap-southeast-3.aliyuncs.com/checkout-button/index.js"></script>
</head> 

export const PayButton = ({ variant, size }) => (
    <rm-pay-button
        variant={variant} 
        size={size}
        clientId="1700119175882466350"
        orderId={"DEMO-"+Date.now()}
        storeId="10946114768247530" 
        customerId="docdemo"  
        currency="MYR"
        amount="1390"
        title="Test Demo"
        detail="some product demo detail"
    >
        Checkout
    </rm-pay-button>
)

:::note
This integrate a checkout button to your e-commerce website with minimal code.
:::

### Setup & Configuration

1. Go to [RM Merchant Portal](https://merchant.revenuemonster.my/), and login with your merchant account.
   
2. Go to Developer \> Applications \> Choose Your Application \> Low Code Checkout

3. Low Code Checkout URL

Your e-commerce website URL, it's a must have to let us identify come from your ecommerce website instead other and provide better security always check while there's an order.

3. Redirect URL

The URL to redirect when the payment for the order is completed by the user (either successful or failed) and [example of redirect url parameters](../v2/payment/online-payment#redirect-response) so you can handle page rendering accordingly with status, id and reason.

4. Notify URL ( Optional )

The URL where we can notify you regarding the order status and [example of notify url parameters](../v2/payment/online-payment#notify-response). This is optional for low code checkout use case, unless you have your own server and have extra business logic is needed after payment is completed.


<img src="/img/low-code-checkout/application-settings.png" height="auto" />

### Checkout Button

1. Add the stylsheet and script tag to your head

```html
<head>
    <!--- ... -->

    <link rel="stylesheet" href="https://rm-component.oss-ap-southeast-3.aliyuncs.com/checkout-button/index.css"/>
    <script type="module" src="https://rm-component.oss-ap-southeast-3.aliyuncs.com/checkout-button/index.js"></script>
</head>
```

2. Add the button with the checkout details to the body

```html
<body>
    <!--- ... -->
    
   <rm-pay-button
        clientId="1698131134927762904"
        orderId="1234567890" 
        storeId="10946114768247530" 
        customerId="123123123"  
        currency="MYR"
        amount="1390"
        title="Product X"
        detail="Detail of the order"
    >
        Checkout
    </rm-pay-button>
</body>
```


**Button Parameters**

| Parameter        | Type   | Required | Description                            | Example                               |
| ---------------- | ------ | -------- | -------------------------------------- | ------------------------------------- |
| `clientId`       | Uint   | Yes      | Client ID of your application          | 1698131134927762904                   |
| `orderId`        | Uint   | No       | Order ID, unique for each order        | 1234567890                            |
| `storeId`        | Uint   | Yes      | Store ID for the order                 | 10946114768247530                     |
| `currency`       | String | Yes      | Currency                               | "MYR"                                 |
| `amount`         | Uint   | Yes      | Amount in cents                        | 1390 => <i>RM13.90</i>                |
| `title`          | String | Yes      | Order title                            | "Product X"                           |
| `detail`         | String | No       | Order detail                           | "Detail of the order"                 |
| `additionalData` | String | No       | Order additional data                  | <i>Any data relevant to the order</i> |
| `customerId`     | Uint   | No       | Customer ID, required for tokenization | 1234567890                            |
| `customerName`   | String | No       | Customer name                          | "John"                                |
| `customerEmail`  | String | No       | Customer email                         | "john@example.com"                    |

**Styling Paramters**

| Parameter | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| `variant` | String | Button variant types            |
| `class`   | String | Custom class for custom styling |

**Example (Variants)**

| Variant     | Button                                                |
| ----------- | ----------------------------------------------------- |
| default     | <PayButton variant="default">Checkout</PayButton>     |
| destructive | <PayButton variant="destructive">Checkout</PayButton> |
| outline     | <PayButton variant="outline">Checkout</PayButton>     |
| secondary   | <PayButton variant="secondary">Checkout</PayButton>   |
| ghost       | <PayButton variant="ghost">Checkout</PayButton>       |
| link        | <PayButton variant="link">Checkout</PayButton>        |

