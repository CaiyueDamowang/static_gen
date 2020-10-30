#### 简单脚本生成READM.md

```js
# package.json
  "scripts": {
    "d": "zsh ./deploy.sh", // bash  或者zsh 都可以
  },
```

```js
node ./scripts/genDoc.js  // 读取文件 写文件

git add .
git commit -m "deploy"
git push origin master
```

