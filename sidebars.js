module.exports = {
  someSidebar: {
    Introduction: ["introduction/overview", "introduction/usecase"],
    "Quick Start": ["quickstart/sdk", "quickstart/developer-application"],
    Payment: [
      "payment/rm-payment",

      {
        type: "category",
        label: "Quick Pay",
        items: [
          "payment/quickpay/quick-pay",
          "payment/quickpay/refund",
          "payment/quickpay/reverse",
        ],
      },
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
      "payment/daily-sattlement-report",
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
  },
};
