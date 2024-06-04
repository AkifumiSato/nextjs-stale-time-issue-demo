# Next.js `staleTimes` behavior issue Demo

title: Once the Router Cache is used once, the value of `staleTimes.dynamic` is applied the next time.

## To Reproduce

1. `pnpm clean-start`.
2. Access `http://localhost:3000`.
3. Click link to `/static`.
4. Your devtools network tab show that the request is **not** made.
5. Browser back to `/` soon(under 3 seconds).
6. Click link to `/static` again.
7. Your devtools network tab show that the request is made.

## Current vs. Expected behavior

My `staleTimes` configuration is:

```ts
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 3,
      static: 10,
    },
  },
};
```

I expect that `staleTimes.static` is applied all times, but it is not applied after the first time.

## Provide environment information

```shell session
$ pnpm next info

Operating System:
  Platform: darwin
  Arch: arm64
  Version: Darwin Kernel Version 23.3.0: Wed Dec 20 21:30:44 PST 2023; root:xnu-10002.81.5~7/RELEASE_ARM64_T6000
  Available memory (MB): 65536
  Available CPU cores: 10
Binaries:
  Node: 20.12.2
  npm: 9.8.0
  Yarn: 1.22.22
  pnpm: 8.15.7
Relevant Packages:
  next: 14.2.3 // Latest available version is detected (14.2.3).
  eslint-config-next: N/A
  react: 18.3.1
  react-dom: 18.3.1
  typescript: 5.4.5
Next.js Config:
  output: N/A
```

