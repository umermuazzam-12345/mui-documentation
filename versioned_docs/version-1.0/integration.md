---
title: Integration
description: My document description
slug: /my-custom-url
---

Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.

## Write components with code and markup

React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.

:::tip[My tip]

Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.

:::

## Add interactivity wherever you need it

React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.
React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.
React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.

```


+import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
 // or `v1X-appRouter` if you are using Next.js v1X

 export default function RootLayout(props) {
   return (
     <html lang="en">
       <body>
+        <AppRouterCacheProvider>
           {props.children}
+        </AppRouterCacheProvider>
       </body>
     </html>
   );
 }



```
