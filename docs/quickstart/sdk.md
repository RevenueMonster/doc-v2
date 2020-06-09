---
id: sdk
title: SDK
sidebar_label: SDK
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
      window.location.href = "https://github.com/RevenueMonster/rm-sdk-go";
    }}
    >
    <Text p={1} color="background" bg="primary" textAlign="center" fontWeight="700" >
     Go
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
    window.location.href = "https://github.com/RevenueMonster/RM-API-SDK-PHP";
    }}>
    <Text p={1} color="background" bg="primary" textAlign="center" fontWeight="700" >
     Php
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
    window.location.href = "https://github.com/RevenueMonster/RM-API-SDK-Nodejs";
    }}>
    <Text p={1} color="background" bg="primary" textAlign="center" fontWeight="700" >
     NodeJS
    </Text>
  </Box>
</Flex>
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
    window.location.href = "https://github.com/RevenueMonster/RM-API-SDK-JAVA";
    }}>
    <Text p={1} color="background" bg="primary" textAlign="center" fontWeight="700" >
    Java
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
    window.location.href = "https://github.com/RevenueMonster/RM-API-SDK-Python";
    }}>
    <Text p={1} color="background" bg="primary" textAlign="center" fontWeight="700" >
     Python
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
    window.location.href = "https://github.com/RevenueMonster/RM-API-SDK-Csharp";
    }}>
    <Text p={1} color="background" bg="primary" textAlign="center" fontWeight="700" >
    C# (Deprecated)
    </Text>
  </Box>
</Flex>
