# mangazavr
JavaScript library for mangazavr.ru
# main
```js
async function main(){
    const {mangazavr} = require('./mangazavr');
    const manga= new mangazavr();
    let req=await manga.sigin("login","password")
    console.log(req)
}
main()
```
