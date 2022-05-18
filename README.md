# Next.js example

## How to use

Configure environment variables:

```
cp .envsample .env
cp .env.sh.example .env.sh
```

Update $PG_URI in .env to have the correct URI for your postgres database

Update $PGPASSWORD in .env.sh with the correct password


Install it and run:

```sh
npm install
npm run dev
```

To open a psql shell for the production database, run:

```
./scripts/connect.sh
```

Note, the above requires you have the postgres client `psql` installed.


## The idea behind the example

The project uses [Next.js](https://github.com/vercel/next.js), which is a framework for server-rendered React apps.
It includes `@mui/material` and its peer dependencies, including `emotion`, the default style engine in MUI v5.
If you prefer, you can [use styled-components instead](https://mui.com/material-ui/guides/interoperability/#styled-components).

## What's next?

<!-- #default-branch-switch -->

You now have a working example project.
You can head back to the documentation, continuing browsing it from the [templates](https://mui.com/material-ui/getting-started/templates/) section.
