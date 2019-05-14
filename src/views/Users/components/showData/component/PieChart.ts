import { Pie, mixins } from 'vue-chartjs';
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue'

@Component({
    extends: Pie, // this is important to add the functionality to your component

})
export default class PieChart extends Vue {
  [x: string]: any;
  @Prop()
  labels!: Array<String>
  @Prop()
  label!: string
  @Prop()
  data!: Array<Number>
  @Prop({
    default: '#f87979'
  })
  bc!: any

  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: this.label,
          backgroundColor: this.bc,
          data: this.data
        }
      ]
    })
  }
}