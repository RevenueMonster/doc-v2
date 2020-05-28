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
      "payment/transactionQR",
    ],
  },
};
