# try-tonejs
Tone.jsを試しに使ってみる

# 手軽に鳴らす場合
[Demo Runstant](http://runstant.com/cat2151/projects/42fc9587)
- 詳しくは [qiita](https://qiita.com/cat2151/items/d6c2bf0dd3e5f441ad69) を参照ください 

# ある程度大規模なアプリケーションを開発するためにnpmとwebpackを使う場合

## [Demo](https://cat2151.github.io/try-tonejs/dist/index.html)

## ゴール
[Tone.js公式](https://tonejs.github.io/)の最初のコードを鳴らす

## Tone.jsをinstallしてブラウザで音が鳴るまでの作業手順
```
GitHubに空のリポジトリを作成し、ローカルにcloneする
```

```
npm init -y
npm install -D webpack webpack-cli@3.3.12 webpack-dev-server
npm install tone
```

```
package.jsonのscriptsにbuildとdevを追加する
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode=production",
    "dev": "webpack-dev-server --hot --open --content-base dist/"
```

```
dist/index.html と src/index.js を作成する
```

```
npm run dev
自動でブラウザが起動しpageが開かれることを確認する
playボタンを押して音が鳴ることを確認する
src/index.jsを編集し、鳴る音を変更する
自動でブラウザが更新され、playボタンを押すと鳴る音が変わっていることを確認する
npm run build
dist/main.js が生成されていることを確認する
```

## 参考
[JavaScriptによるオーディオプログラミング例](https://qiita.com/aike@github/items/2851b94b516cf75a5350) 音を鳴らすコードを書く際、参考にしました。

[webpackをかんたんに使う（Zero Configulation）](https://qiita.com/hashrock/items/3f1df615e68ee8aad9e8) webpackのinstallをする際、参考にしました。
