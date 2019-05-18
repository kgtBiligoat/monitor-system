<template>
    <div id="mychart3" style="width:570px;height:250px;"></div>
</template>
<script>
import echarts from 'echarts';
export default {
        data() {
            return {
                time: []
            }
        },
        mounted() {
            this.draw();
        },
        methods: {
            draw: function () {
                let echart1 = echarts.init(document.getElementById('mychart3'));
                var randomData1 = [];
                for(var i = 0; i<500; i++){
                    randomData1.push(Math.floor(Math.random()*100));
                }
 
                // 指定图表的配置项和数据
                var option1 = {
                    title:{
                        text:'内存监控'
                    },
                    legend:{},
                    dataset: {
                        source: [
                            ['product', '内存'],
                            // ['10:00', 41.1, 30.4, 65.1, 53.3],
                            // ['11:00', 86.5, 92.1, 85.7, 83.1],
                            // ['12:00', 24.1, 67.2, 79.5, 86.4],
                            // ['13:00', 55.2, 67.1, 69.2, 72.4],
                            // ['14:00', 55.2, 67.1, 69.2, 72.4],
                            // ['15:00', 55.2, 67.1, 69.2, 72.4],
                            // ['16:00', 55.2, 67.1, 69.2, 72.4]
                        ]
                    },
                    xAxis: {
                        type: 'category',
 
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        { type: 'line', color:'yellow'},
                        ],
 
                };
 // 使用刚指定的配置项和数据显示图表。
                echart1.setOption(option1);
                setInterval(() =>{
                    this.time.push(new Date().toLocaleTimeString().slice(2))
                    // randomData1.push(Math.floor(Math.random()*100));
                    // randomData1.shift();
                    // randomData2.push(Math.floor(Math.random()*100));
                    // randomData2.shift();
                    // randomData3.push(Math.floor(Math.random()*100));
                    // randomData3.shift();
                    // randomData4.push(Math.floor(Math.random()*100));
                    // randomData4.shift();
 
                    echart1.setOption({
                        xAxis: {
                            data: this.time
                        },
 
                        series: [
                            { data: randomData1 , type: 'line', color:'yellow'},
                            ],
 
                    });
                }, 1000)
              }
            }
           }  
</script>