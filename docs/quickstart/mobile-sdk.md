---
id: mobile-sdk
title: Mobile SDK
sidebar_label: Mobile SDK
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

The following language SDK(s) and documentations are available.

:::note
Not all SDK(s) fully implemented all API functions. Pull requests are welcome.
:::

<Flex marginTop="20px">
  <Box
    width={1 / 3}
    marginRight="20px"
    px={3}
    sx={{
      cursor:"pointer",
      p: 1,
      borderRadius: 2,
      border: "0.5px solid",
      borderColor: "#e3e8ee",
      transition: "0.3s",
      ":hover": {
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", 
      },
    }}
      onClick={() => {
      window.location.href = "https://github.com/RevenueMonster/RM-Android";
    }}
    >
    <Text p={1} color="background" bg="primary" textAlign="center" fontWeight="700" >
     Android
    </Text>
  </Box>
    <Box
    width={1 / 3}
    marginRight="20px"
    px={3}
    sx={{
      cursor:"pointer",
      p: 1,
      borderRadius: 2,
      border: "0.5px solid",
      borderColor: "#e3e8ee",
      transition: "0.3s",
      ":hover": {
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", 
      },
    }}
    onClick={() => {
    window.location.href = "https://github.com/RevenueMonster/RM-IOS";
    }}
    >
    <Text p={1} color="background" bg="primary" textAlign="center" fontWeight="700" >
     IOS
    </Text>
  </Box>
</Flex>
