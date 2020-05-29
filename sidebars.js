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
    ],
  },
};
