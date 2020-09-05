# Using TypeScript with React

1. Open the `my-app` project. Run `yarn install --frozen-lockfile` or `npm ci`.

Run `yarn start` or `npm run start` to verify things are working as expected.

The "solution" is in `my-app--solution` if anything is confusing and you want a
reference.

2. Let's make the TypeScript configurations more strict, because this provides
   more protection against various errors.

Open `my-app/tsconfig.json` and add the following configurations under
`"compilerOptions"`:

```
"alwaysStrict": true,
"noUnusedLocals": true,
"noUnusedParameters": true,
"noImplicitAny": true,
```

3. Uncomment the components in `my-app/src/App.tsx` at the top of the page, and uncomment the line below which renders the component inside MyApp.
   Fill in the missing types for the `<HelloWorld>` props.

Congratulations! You've got a fully typed React component!
