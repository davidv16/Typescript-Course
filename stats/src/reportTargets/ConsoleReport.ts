import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  //a function to print to console the wins report.
  print(report: string): void {
    console.log(report);
  }
}
