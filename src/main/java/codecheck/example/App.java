package codecheck.example;

import org.apache.commons.cli.CommandLine;
import java.util.Arrays;

public class App {
  public static void run(CommandLine cmd) {
    Arrays.asList(cmd.getArgs()).forEach((arg, i) ->
      {
        string result = String.format("argv[%i]: %v", i, arg);
        System.out.println(result);
      }
    );
  }
}
