package codecheck.example;

import org.apache.commons.cli.CommandLine;
import java.util.Arrays;

public class App {
  public static void run(CommandLine cmd) {
    Arrays.asList(cmd.getArgs()).forEach(v -> System.out.println(v));
  }
}