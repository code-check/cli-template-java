# CLIアプリケーション作成用テンプレート(Java)

JavaでCLIアプリケーションを作成するためのテンプレートです。

[src/main/java/codecheck/example/App.java](src/main/java/codecheck/example/App.java)を編集することでCLIアプリケーションを作成することができます。

このテンプレートではCLI作成のユーティリティとして、Commons-CLIを使用していsます。  
Commons-CLIについての詳細は[Commons-CLIウェブサイト](https://commons.apache.org/proper/commons-cli/)をごらんください。

## コマンドライン引数の取得方法
Appクラスでは`run`というstaticメソッドが定義されており、CommandLineクラスが引数として渡されます。

``` java
public class App {
  public static void run(CommandLine cmd) {
  }
}
```

通常のパラメータは`cmd.getArgs()`メソッドにより、文字列の配列として取得できます。
オプション形式の引数を使用する場合はCommons-CLIのOptionsを拡張して使用してください。([src/main/java/codecheck/example/CLI.java](src/main/java/codecheck/example/CLI.java))

## コマンド実行結果の標準出力への出力
標準の`System.out.println`メソッドを使用してください。

``` java
  String arg1 = cmd.getArgs()[0];
  System.out.println(arg1);
```
