package codecheck.example;

import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.Options;

public class CLI {

  public static void main(String[] args) throws Exception {
    Options options = new Options();
    CommandLine cmd = new DefaultParser().parse(options, args);
    App.run(cmd);
  }
}