# Setting up React and TypeScript with Create React App

1. Run this command:
```sh
npx create-react-app my-app --template typescript
```

2. Run this command:
```sh
cd my-app && yarn start
```

That's it! Enjoy your new app!

## Troubleshooting

If you see a warning like this after running `npx create-react-app`:

```
A template was not provided. This is likely because you're using an outdated version of create-react-app.
Please note that global installs of create-react-app are no longer supported.
```

This means you have an old version of Create React App installed locally,
and you need to uninstall it. It is either installed globally or in the
directory where you currently are.

If you *still* get this message after running `npm uninstall -g
create-react-app` then try `which create-react-app` and delete that directory
manually.

See https://github.com/facebook/create-react-app/issues/8097

Sources:
* https://create-react-app.dev/docs/adding-typescript/
