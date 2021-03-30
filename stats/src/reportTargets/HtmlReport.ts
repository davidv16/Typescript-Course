import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  //a function to print the report out in html
  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>
    `;

    //write the variable 'html' to file called report.html
    fs.writeFileSync('report.html', html);
  }
}
