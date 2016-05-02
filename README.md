# CLI template for Java

This is template app for CLI test.  
You can make console application by editing [src/main/java/codecheck/example/App.java](src/main/java/codecheck/example/App.java)

It uses Commons-CLI. See detail in [Commons-CLI website](https://commons.apache.org/proper/commons-cli/)

## How to get input parameters
App class has a static method `run`.

``` java
public class App {
  public static void run(CommandLine cmd) {
  }
}
```

You can get normal arguments as array by `cmd.getArgs()` method.

If you want to use option parameter, you can use Commons-CLI's option feature in [src/main/java/codecheck/example/CLI.java](src/main/java/codecheck/example/CLI.java)

## How to output result
You can use `Sytem.out.println` method

``` java
  String arg1 = cmd.getArgs()[0];
  System.out.println(arg1);
```