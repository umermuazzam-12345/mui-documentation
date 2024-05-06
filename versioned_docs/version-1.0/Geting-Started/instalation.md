---
sidebar_position: 2
title: "Instalation"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Instalation

Install Material UI, the world's most popular React UI framework.

## Default installation

Run one of the following commands to add Material UI to your project:

<Tabs>
  <TabItem value="apple" label="Npm" default>
  ```jsx  
   npm install @mui/material @emotion/react @emotion/styled
   ```
  </TabItem>
  
</Tabs>

## Peer dependencies

Please note that react and react-dom are peer dependencies, meaning you should ensure they are installed before installing Material UI.

```jsx
 "peerDependencies": {
"react": "^17.0.0 || ^18.0.0",
"react-dom": "^17.0.0 || ^18.0.0"
},
```

## With styled-components

Material UI uses Emotion as its default styling engine. If you want to use styled-components instead, run one of the following commands:

<Tabs>
  <TabItem value="apple" label="Npm" default>
  ```jsx  
   npm install @mui/material @mui/styled-engine-sc styled-components
   ```
  </TabItem>
  
</Tabs>

Next, follow the styled-components how-to guide to properly configure your bundler to support @mui/styled-engine-sc.

:::danger

As of late 2021, styled-components is not compatible with server-rendered Material UI projects. This is because babel-plugin-styled-components isn't able to work with the styled() utility inside @mui packages. See this GitHub issue for more details.

We strongly recommend using Emotion for SSR projects.

:::

## Roboto font

Material UI uses the Roboto font by default. Add it to your project via Fontsource, or with the Google Fonts CDN.

<Tabs>
  <TabItem value="apple" label="Npm" default>
  ```jsx  
   npm install @fontsource/roboto
   ```
  </TabItem>
  
</Tabs>

Then you can import it in your entry point like this:

```jsx
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
```

:::note

Fontsource can be configured to load specific subsets, weights and styles. Material UI's default typography configuration relies only on the 300, 400, 500, and 700 font weights.
:::

## Google Web Fonts

To install Roboto through the Google Web Fonts CDN, add the following code inside your project's <head /> tag:

```jsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>

```

## Icons

To use the font Icon component or the prebuilt SVG Material Icons (such as those found in the icon demos), you must first install the Material Icons font. You can do so with npm, or with the Google Web Fonts CDN

<Tabs>
  <TabItem value="apple" label="Npm" default>
  ```jsx  
   npm install @mui/icons-material
   ```
  </TabItem>
  
</Tabs>
