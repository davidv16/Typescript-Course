import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { MatchData } from './MatchData';
import { HtmlReport } from './reportTargets/HtmlReport';

//interface that interacts with the WinsAnalysis class
export interface Analyzer {
  run(matches: MatchData[]): string;
}

//interface that interacts with classes like HtmlReport or ConsoleReport
export interface OutputTarget {
  print(report: string): void;
}

//class that ties together the matches and report
//When making an instance of Summary, one can decide where to send the report, to the console class or the HtmlReport class
export class Summary {
  //static function that can be run without creating an instance of the summary class
  //takes in a team name to pass it on to the Analysis class
  static winsAnalysisWithHtmlReport(team: string): Summary {
    //returns a new instance of Summary with the two interfaces on top.
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  //constructor to set the rules of which classes it can take, according to the interface above
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  //function to run the wins check and print the report
  buildAndPrintReport(matches: MatchData[]): void {
    //runs the analyzer to check how many matches a certain team won
    const output = this.analyzer.run(matches);
    //outputs the wins and the team to the report decided by the static function above.
    this.outputTarget.print(output);
  }
}
