package codecheck;

public class App {
	public static void main(String[] args) {
		for (int i = 0, l = args.length; i < l; i++) {
			string output = String.format("argv[%i]: %a", i, args[i]);
			System.out.println(output);
		}
	}
}
