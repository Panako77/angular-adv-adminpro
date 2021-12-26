import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  constructor() { }

  @Input() titulo: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: Label[] = [ 'Ventas descargadas', 'Ventas en tienda', 'Ventas por email' ];
  @Input('data') doughnutChartData: MultiDataSet = [ [ 350, 450, 100 ] ];
  @Input('colors') colors: Color[] = [
    {backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]}
  ]
  @Input('chartType') doughnutChartType: ChartType = 'doughnut';

  // // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

}
