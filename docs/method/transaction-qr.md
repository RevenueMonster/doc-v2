---
id: transaction-qr
title: Transaction QR
sidebar_label: Transaction QR
---

import { Box, Heading, Text, Card, Image, Button, Flex, Table } from "rebass";
import styles from "../../src/pages/styles.module.css"

:::note
**Following list is payment methods supported by Revenue Monster.**<br/>
(Payment method(s) not on the list are not supported)
**WeChat Pay Web/App integration requires the Merchant to apply for an OPEN ID. Please get the OPEN ID ready before starting integration.**<br/>
:::

### Transaction QR

<table>
  <tr>
    <th>Method</th>
    <th>Supported</th>
  </tr>
  <tr>
    <td>WECHATPAY</td>
    <td>
    <Card
        className={styles.supportCard}> Yes
        </Card>
    </td>
  </tr>
   <tr>
    <td>BOOST_MY</td>
  <td>
    <Card
        className={styles.supportCard}> Yes
        </Card>
    </td>
  </tr>
  <tr>
    <td>PRESTO</td>
    <td>
    <Card
        className={styles.supportCard}> Yes
        </Card>
    </td>
  </tr>
  <tr>
    <td>ALIPAY</td>
   <td>
    <Card
        className={styles.supportCard}> Yes
        </Card>
    </td>
  </tr>
</table>
