## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Run https proxy server to be able to see preview on storyblok

```bash
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```