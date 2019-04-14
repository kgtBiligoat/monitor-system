import { Line } from 'vue-chartjs';
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue'

@Component({
    extends: Line, // this is important to add the functionality to your component
})
export default class LineChart extends Vue {
  [x: string]: any;
  @Prop()
  labels!: Array<String>
  @Prop()
  label!: string
  @Prop()
  data!: Array<Number>
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: this.label,
          backgroundColor: '#f87979',
          data: this.data
        }
      ]
    })
  }
}