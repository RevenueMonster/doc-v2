---
id: sdk
title: SDK
sidebar_label: SDK
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";
import styles from "../../src/pages/styles.module.css";

The following language SDK(s) and documentations are available.

:::note
Not all SDK(s) fully implemented all API functions. Pull requests are welcome.
:::

<Flex marginTop="20px">
  <Box
    width={1 / 3}
    marginRight="20px"
    px={3}
    className={styles.sdkBox}
      onClick={() => {
        window.open("https://github.com/RevenueMonster/rm-sdk-go", "_blank");
    }}
    >
    <Text className={styles.text} >
     Go
    </Text>
  </Box>
  <Box
    width={1 / 3}
    marginRight="20px"
    px={3}
   className={styles.sdkBox}
   onClick={() => {
      window.open("https://github.com/RevenueMonster/RM-API-SDK-PHP", "_blank");
    }}>
    <Text className={styles.text}  >
     Php
    </Text>
  </Box>
  <Box
    width={1 / 3}
    marginRight="20px"
    px={3}
    className={styles.sdkBox}
    onClick={() => {
       window.open("https://github.com/RevenueMonster/RM-API-SDK-Nodejs", "_blank");
    }}>
    <Text className={styles.text} >
     NodeJS
    </Text>
  </Box>
</Flex>
<Flex marginTop="20px">
  <Box
    width={1 / 3}
    marginRight="20px"
    px={3}
   className={styles.sdkBox}
    onClick={() => {
       window.open("https://github.com/RevenueMonster/RM-API-SDK-JAVA", "_blank");
    }}>
    <Text className={styles.text} >
    Java
    </Text>
  </Box>
  <Box
    width={1 / 3}
    marginRight="20px"
    px={3}
   className={styles.sdkBox}
    onClick={() => {
       window.open("https://github.com/RevenueMonster/RM-API-SDK-Python", "_blank");
    }}>
    <Text className={styles.text}>
     Python
    </Text>
  </Box>
  <Box
    width={1 / 3}
    marginRight="20px"
    px={3}
    className={styles.sdkBox}
    onClick={() => {
       window.open("https://github.com/RevenueMonster/RM-API-SDK-Csharp", "_blank");
    }}>
    <Text className={styles.text} >
    C# (Deprecated)
    </Text>
  </Box>
</Flex>
