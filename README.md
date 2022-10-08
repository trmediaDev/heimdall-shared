Run following on the root dir of this package
```
npm link
npm run build
```

On the package that used this library, run following command
```bash
npm link heimdall-shared
```

When this library is changes, let other developers know this has changed and they need to pull it and run `npm i` on packages that use this library. This is a temporary solution until we publish these to npm, at which point we can just push and pull from npm instead of locally linking.