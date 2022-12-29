import React from 'react'
import ReactEchart from 'echarts-for-react';
type Props = {}

export default function Pie({ }: Props) {
    const eChartsOption = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: 0,
            orient: 'vertical',
            align: 'left',
            height: '90px' //example,
        }, series: [
            {
                name: 'Labels',
                type: 'pie',
                radius: ['40%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'bug', },
                    { value: 735, name: 'duplicate' },
                    { value: 580, name: 'help wanted' },
                    { value: 484, name: 'enchancement' },
                    { value: 300, name: 'invalid' },
                    { value: 300, name: 'question' }
                ]
            }
        ]

    }
    return (
        <div className='p-3 m-2 bg-[#EEEEEE] rounded-lg'>
            <ReactEchart option={eChartsOption} />
        </div>
    )
}