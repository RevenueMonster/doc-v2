module.exports = {
  someSidebar: {
    Introduction: ["introduction/overview", "introduction/usecase"],
    "Quick Start": [
      "quickstart/sdk",
      "quickstart/signature-algorithm",
      {
        type: "category",
        label: "Access Token",
        items: [
          "quickstart/accesstoken/client-credentials",
          "quickstart/accesstoken/authorization-code",
          "quickstart/accesstoken/refresh-token",
        ],
      },
    ],
    Payment: [
      "payment/overview",
      "payment/quick-pay",
      "payment/refund",
      "payment/reverse",
      {
        type: "category",
        label: "Transaction QR",
        items: [
          "payment/transactionQR/transaction-qr",
          "payment/transactionQR/get-transaction-qr-code-url",
          "payment/transactionQR/get-transaction-qr-code-url-by-code",
          "payment/transactionQR/get-transaction-by-code",
        ],
      },
      {
        type: "category",
        label: "Web/Mobile Payment",
        items: [
          "payment/webpayment/web-payment",
          "payment/webpayment/get-web-payment-qr-code",
        ],
      },
      "payment/daily-settlement-report",
      "payment/get-all-payment-transaction",
      "payment/get-payment-transaction-id",
      "payment/get-payment-transaction-by-order-id",
    ],
    Details: [
      "detail/user-profile",
      {
        type: "category",
        label: "Merchant",
        items: [
          "detail/mercahantDetail/merchant-profile",
          "detail/mercahantDetail/merchant-subscriptions",
        ],
      },
      {
        type: "category",
        label: "Store",
        items: [
          "detail/storeDetail/store-detail",
          "detail/storeDetail/get-store-by-id",
          "detail/storeDetail/create-store",
          "detail/storeDetail/update-store",
          "detail/storeDetail/delete-store",
        ],
      },
    ],
    Campaign: [
      "campaign/loyalty/chop-stamp",
      {
        type: "category",
        label: "Loyalty Point",
        items: [
          "campaign/loyalty/loyalty-point/give-loyalty-point",
          "campaign/loyalty/loyalty-point/spending-loyalty-point",
          "campaign/loyalty/loyalty-point/cancel-spending-loyalty-point",
          "campaign/loyalty/loyalty-point/calculate-spending-reward",
        ],
      },
      {
        type: "category",
        label: "Loyalty Members",
        items: [
          "campaign/loyalty/loyalty-members/loyalty-members",
          "campaign/loyalty/loyalty-members/loyalty-member",
          "campaign/loyalty/loyalty-members/loyalty-member-history",
          "campaign/loyalty/loyalty-members/bulk-create-members",
        ],
      },
    ],
  },
};
