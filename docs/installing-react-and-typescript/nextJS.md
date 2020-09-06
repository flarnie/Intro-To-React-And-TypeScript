# Setting up React and TypeScript with Next.js

1. Create your Next.js app with this command:
```sh
npx create-next-app my-test-app
cd my-test-app
```

2. Run these commands to add TypeScript:
```sh
npm install --save-dev typescript @types/react @types/node
mv pages/index.{js,tsx}
npm run dev
```

When we start the Next.js server, it will automatically create the
`tsconfig.json` and the `next-env.d.ts` for us.

That's it! Enjoy your new app!

Sources:
* https://nextjs.org/docs/getting-started
* https://nextjs.org/learn/basics/create-nextjs-app
* https://nextjs.org/learn/excel/typescript
