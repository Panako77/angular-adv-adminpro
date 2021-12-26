import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

labels1 :string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
data1: number[][] = [ [ 350, 450, 100 ] ];

}
