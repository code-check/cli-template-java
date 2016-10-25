# コマンドラインアプリケーション(CLI アプリ)作成用テンプレート(Java)

[App.java](src/main/java/codecheck/App.java)を編集して、CLIアプリを実装してください。  
チャレンジ内でファイルの作成が許可されていれば、可読性等のためにファイルを分割する事も可能です。

## コマンドライン引数の取得方法
コマンドライン引数は `main` メソッドの `args` として取得可能です。

```java
public static void main(String[] args) {
  // code to run
}
```

## コマンド実行結果の標準出力への出力
標準の`System.out.println`メソッド等を使用してください。

``` java
System.out.println(args);
```

## 外部ライブラリの追加方法
外部ライブラリを使用する場合は以下の手順で実施してください。

- [pom.xml](pom.xml) に依存ライブラリの追加
