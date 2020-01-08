# any-fs
![npm](https://img.shields.io/npm/l/anyfs.svg?style=flat-square)

any-fs is a composable and extendible file-system and fully compatible with the node `fs` module.

## Usage

```js
var { MemoryFS } = require('@teambit/any-fs');
const fs = new MemoryFS() 
fs.writeFile()
````

```js
var { Volume } = require('@teambit/any-fs');
const fs = new Volume() 
fs.writeFile()
```


## Adapters
AnyFS comes with following adapters
 - Memory - Builtin, access with `MemoryFS`
 - Fs - node fs 
 
## Features
- Full compatibility to the Node `fs` module.
- Supports the node `fs` promises API

## In-Progress
- Docker volume
- Kubernetes 
- SFTP
- AWS S3
- Google storage


Made with ❤ to free software by Team Bit.
