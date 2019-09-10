# 目次

# component指向
 - https://angular.jp/guide/architecture-components
## injectとexport
 - [@Input データバインディングでディレクティブへ値を渡す
](https://angular.jp/guide/attribute-directives#input-%E3%83%87%E3%83%BC%E3%82%BF%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%A7%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E3%81%B8%E5%80%A4%E3%82%92%E6%B8%A1%E3%81%99)
## アトミックデザイン
 - [Atomic Design を
分かったつもりになる](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B/)
## formとvalidation
 - https://angular.jp/guide/reactive-forms
 - https://angular.jp/guide/form-validation
## ディレクティブ
- letのスコープ
- ngFor,ngIf
## asyncの表示
- [Async pipe](https://angular.jp/guide/pipes#%E4%B8%8D%E7%B4%94%E3%81%AAasyncpipe)
## cssフレームワーク
- https://material.angular.io/components/categories

# serviceについて
 - https://angular.jp/guide/http
## HTTPリクエスト
## interceptor
 - https://github.com/forestsource/angular8-real-world-sample/blob/master/src/app/http-interceptor/http-error-interceptor.ts
## component間 データ共有
https://github.com/forestsource/angular8-real-world-sample/search?q=onNotifySharedDataChanged&unscoped_q=onNotifySharedDataChanged
## ローカルmock
- https://github.com/forestsource/angular8-real-world-sample/blob/master/src/app/services/movie.service.ts#L38
- https://github.com/forestsource/angular8-real-world-sample/blob/master/src/app/services/mockes/mock-movies.ts
## Abstract Factory
 - https://qiita.com/kaikusakari/items/8943247246cb243b8fd6

# 環境変数
 - https://github.com/forestsource/angular8-real-world-sample/blob/master/angular.json#L32-L55
 - https://github.com/forestsource/angular8-real-world-sample/tree/master/src/environments

# Routing
## ng-router
- https://angular.jp/guide/router
- https://github.com/forestsource/angular8-real-world-sample/blob/master/src/app/app-routing.module.ts
## guard
- https://angular.jp/guide/router#milestone-5-route-guards
- https://github.com/forestsource/angular8-real-world-sample/blob/master/src/app/guard/auth.guard.ts

# Rxjs
- https://rxjs-dev.firebaseapp.com/
## Observable
  - https://rxjs-dev.firebaseapp.com/guide/observable
  - [pipe] (https://rxjs-dev.firebaseapp.com/api/index/function/pipe)
## 例: 定期ポーリング
  - https://github.com/forestsource/angular8-real-world-sample/blob/master/src/app/services/notification.service.ts#L25-L32

# i18n
## ngx-translate
  - https://github.com/ngx-translate/core
## pipe
  - https://github.com/ngx-translate/core#4-use-the-service-the-pipe-or-the-directive
## 変数の取り扱い
## 注入(atomicデザインと合わせて)
- https://github.com/forestsource/angular8-real-world-sample/blob/master/src/app/notification/notification.component.html#L1
- https://github.com/forestsource/angular8-real-world-sample/blob/master/src/app/navimenu/navimenu.component.html#L78

# APIのmockについて
## json-server
- https://github.com/typicode/json-server
### 設定
- https://github.com/forestsource/angular8-real-world-sample/blob/master/api-mock/routes.json
### DBファイル
- https://github.com/forestsource/angular8-real-world-sample/blob/master/api-mock/db.json

# ng コマンド
## リソース作成
```
ng g [component | service | class | guard | interceptor]
```
## module
- https://github.com/forestsource/angular8-real-world-sample/blob/master/src/app/app.module.ts

# Angular update
- https://update.angular.io/
```
# グローバル
npm reinstall -g @angular/cli
# Project Root
ng update @angular/cli
```

# style guide
https://angular.jp/guide/styleguide

# 辞書
https://angular.jp/guide/cheatsheet
