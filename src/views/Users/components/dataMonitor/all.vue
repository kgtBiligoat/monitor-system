<template>
    <div id="mychart1" style="width:570px;height:250px;"></div>
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
                console.log(2)
                let echart1 = echarts.init(document.getElementById('mychart1'));
                var randomData1 = [];
                var randomData2 = [];
                var randomData3 = [];
                var randomData4 = [];
                for(var i = 0; i<500; i++){
                    randomData1.push(Math.floor(Math.random()*100));
                    randomData2.push(Math.floor(Math.random()*100));
                    randomData3.push(Math.floor(Math.random()*100));
                    randomData4.push(Math.floor(Math.random()*100));
                }
 
                // 指定图表的配置项和数据
                var option1 = {
                    title:{
                        text:'数据监控'
                    },
                    legend:{},
                    dataset: {
                        source: [
                            ['product', 'CPU', '硬盘', '内存', '数据库'],
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
                        { type: 'line', color:'blue'},
                        { type: 'line', color:'green'},
                        { type: 'line', color:'yellow'},
                        { type: 'line', color:'pink'}
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
                            { data: randomData1 , type: 'line', color:'blue'},
                            { data: randomData2,  type: 'line', color:'green'},
                            { data: randomData3,  type: 'line', color:'yellow'},
                            { data: randomData4,  type: 'line', color:'pink'}
                            ],
 
                    });
                }, 1000)
              }
            }
           }  
</script>