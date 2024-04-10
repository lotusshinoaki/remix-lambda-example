The minimum configuration of Remix + Vite + Rollup that can be deployed on AWS Lambda.

To distribute `build/client/assets/*` , additional configuration such as CloudFront is required.

```
$ pnpm install
$ pnpm build && pnpm archive
$ ls -l archive.zip
-rw-r--r--  1 xxxxx  staff  1034384  4 11 07:50 archive.zip
```
