import React from 'react'
import ReactEchart from 'echarts-for-react';
import { useQuery, gql } from "@apollo/client";
type Props = {}

export default function Pie({ }: Props) {
    const QUERY = gql`
   query pie {
        repository(owner: "Automattic", name: "mongoose") {
          labels(last: 6) {
            nodes {
              id
              name
              color
              issues {
                totalCount
              }
            }
          }
        }
      }
`;
const { data, loading, error  } = useQuery(QUERY);
if (loading) {
    return <h2>Loading...</h2>;
}

if (error) {
    console.error(error);
    return null;
}
//const array = data.repository.labels.nodes.map((item:any)=>{return {value:item.issues.totalCount, name:item.name}})
    const array = data.repository.labels.nodes.map((item:any)=>{return {value:item.issues.totalCount, name:item.name}})
    console.log(array)
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
                data: array
            }
        ]

    }
    return (
        <div className='p-3 m-2 bg-[#EEEEEE] rounded-lg'>
            <ReactEchart option={eChartsOption} />
        </div>
    )
}