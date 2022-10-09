## Description

heimdall-shared library contains classes (mostly models) that shared between applications. This is stored on GIT (including `dist` folder) in order to pull it down during docker builds. However, to speed up local development, developers can follow instruction on __Development__ section to link it locally. __Please remember to unlink it before pushing to remote repo__ 

## Development

Run following on the root dir of this package
```bash
npm link
npm run build
```

On the package that used this library, run following command
```bash
npm link heimdall-shared
```

When this library is changes, let other developers know this has changed and they need to pull it and run `npm i` on packages that use this library. This is a temporary solution until we publish these to npm, at which point we can just push and pull from npm instead of locally linking.

## Production

After development make sure to build and push all the changes to the remote git repo. This step is required as other users of this library pull it from the git.
```bash
npm run build
git add .
git commit -m "Commit message"
git push origin main
```