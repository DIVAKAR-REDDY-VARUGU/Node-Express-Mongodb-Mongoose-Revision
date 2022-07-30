console.clear()
const process=require('process');


console.log(`Process Architecture: ${process.arch}`);
// Process Architecture: x64
console.log(`Process PID: ${process.pid}`);
// Process PID: 14216
console.log(`Process Platform: ${process.platform}`);
// Process Platform: win32
console.log(`Process Version: ${process.version}`);  
// Process Version: v16.6.2

console.log(process.versions);  
// {
//   node: '16.6.2',
//   v8: '9.2.230.21-node.19',
//   uv: '1.41.0',
//   zlib: '1.2.11',
//   brotli: '1.0.9',
//   ares: '1.17.2',
//   modules: '93',
//   nghttp2: '1.42.0',
//   napi: '8',
//   llhttp: '6.0.2',
//   openssl: '1.1.1k+quic',
//   cldr: '39.0',
//   icu: '69.1',
//   tz: '2021a',
//   unicode: '13.0',
//   ngtcp2: '0.1.0-DEV',
//   nghttp3: '0.1.0-DEV'
// }

