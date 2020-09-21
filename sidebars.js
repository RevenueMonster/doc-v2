module.exports = {
  someSidebar: {
    Introduction: ["introduction/overview", "introduction/usecase"],

    "Quick Start": [
      {
        type: "category",
        label: "SDK",
        items: ["quickstart/sdk", "quickstart/mobile-sdk"],
      },
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
          "payment/webpayment/notify-url",
          // "payment/webpayment/get-web-payment-qr-code",
          "payment/webpayment/qr-code&url-by-checkout-id",
          "payment/webpayment/get-online-transaction",
        ],
      },
      "payment/refund",
      "payment/reverse",
      "payment/query-status-by-order-id",
      "payment/query-status-by-transaction-id",
      "payment/get-all-transaction",
      "payment/daily-settlement-report",
    ],

    "à la carte": [
      "alacarte-open/auth",
      {
        type: "category",
        label: "Orders",
        items: [
          "alacarte-open/orders/get-orders-by-store-id",
          "alacarte-open/orders/get-order-by-id",
          "alacarte-open/orders/update-order-delivery-status",
          "alacarte-open/orders/refund-order",
        ],
      },
      {
        type: "category",
        label: "Store",
        items: [
          "alacarte-open/store/get-store-by-id",
          "alacarte-open/store/close-store",
        ],
      },
      {
        type: "category",
        label: "Inventory",
        items: [
          "alacarte-open/inventory/get-categories-by-store-id",
          "alacarte-open/inventory/update-category-by-id",
          "alacarte-open/inventory/get-items-by-menu-id",
          "alacarte-open/inventory/get-all-items-by-store-id",
          "alacarte-open/inventory/update-item-by-id",
          "alacarte-open/inventory/update-item-quantity-by-id",
        ],
      },
    ],

    "POS Integration": ["pos-integration"],

    "Supported Payment Methods": [
      "method/quick-pay",
      "method/transaction-qr",
      "method/web-payment",
    ],

    "Loyalty & Voucher": [
      {
        type: "category",
        label: "Loyalty",
        items: [
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
      {
        type: "category",
        label: "Voucher",
        items: [
          "campaign/voucher/overview",
          "campaign/voucher/get-voucher-batches",
          "campaign/voucher/voucher-by-code",
          "campaign/voucher/voucher-batch-by-key",
          "campaign/voucher/issue-voucher",
          "campaign/voucher/void-voucher",
        ],
      },

      {
        type: "category",
        label: "Campaign",
        items: ["campaign/chop-stamp", "campaign/gourmet-card"],
      },
    ],

    Settings: [
      {
        type: "category",
        label: "Store",
        items: [
          "settings/store-detail/store-details",
          "settings/store-detail/get-store-by-id",
          "settings/store-detail/create-store",
          "settings/store-detail/update-store",
          "settings/store-detail/delete-store",
        ],
      },
      {
        type: "category",
        label: "Merchant",
        items: [
          "settings/merchant-detail/merchant-profile",
          "settings/merchant-detail/merchant-subscriptions",
        ],
      },
      {
        type: "category",
        label: "User",
        items: ["settings/user-profile"],
      },
    ],

    "Push Notification": ["push-notification/push-to-merchant"],
    Downloads: [
      "downloads/application",
      "downloads/logo",
      "downloads/testing-wallets",
    ],
    // FAQ: ["introduction/overview"],
    Appendix: ["product-terms", "error-codes"],
    "Plug-in": ["plug-in/wooCommerce"],
  },
};
