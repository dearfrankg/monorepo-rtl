import Head from "next/head";

<Head>
  <title>MONOREPO-RTL</title>
</Head>

# MONOREPO-RTL

## INTRO

**Manage all projects related to react testing library using the turborepo monorepo manager.**

| project        | description                                                                |
| :------------- | :------------------------------------------------------------------------- |
| [docs]         | the next framework has been configured to render .mdx files [docs][how-to] |
| [rtl-ninja]    | test a simple todo app which utilizes a todo api                           |
| [rtl-taskhero] | test a simple todo app which utilizes a todo api                           |

[docs]: http://localhost:3000
[rtl-ninja]: http://localhost:3001
[rtl-taskhero]: http://localhost:3002
[how-to]: https://stackoverflow.com/questions/71864146/using-remark-and-rehype-plugins-with-mdx-in-next-js-with-next-mdx

## COMMANDS

- perform task on all workspaces `yarn run lint`
- perform task on individual workspace `yarn -w rtl-ninja start`
