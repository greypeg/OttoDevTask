import React, { useEffect } from 'react'
import { useQuery, gql } from "@apollo/client";
import { ButtonGroup, MODE } from "baseui/button-group";
import {
    ListItem,
    ListItemLabel,
    SHAPE
} from "baseui/list";
import { Button } from "baseui/button";

type Props = {
    status?: boolean,
}
enum IssueState {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
}

export default function List({ status }: Props) {
    const [selected, setSelected] = React.useState(0);
    const [option, setOption] = React.useState<IssueState>(IssueState.OPEN)
    const owner = 'Automattic'
    const repo = 'mongoose'
    const QUERY = gql`
query fetchBasedOnState($option: IssueState!) { 
    repository(owner: "Automattic", name: "mongoose") {
      issues(first: 10, states: [$option], labels:["enhancement","question","duplicate","help wanted","invalid","bug"]) {
        totalCount
        nodes {
          id
          title
          publishedAt
          labels(last: 10) {
            edges {
              node {
                name
              }
            }
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
  
`;
    const { data, loading, error } = useQuery(QUERY, { variables: { option } });

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }
    return (
        <>
            <div className='grid grid-cols-2 gap-0.5'>
                <div className='grid grid-cols-2 gap-0.5'>
                    <div>
                        <h3>{owner} / {repo}</h3>
                    </div>
                    <span className='text-gray-500'>{"("}{data.repository.issues.totalCount + " issues"}{")"}</span>
                </div>
                <div>
                    <ButtonGroup mode={MODE.radio}
                        selected={selected}
                        onClick={(event, index) => {
                            setSelected(index);
                            if (index === 0)
                                setOption(IssueState.OPEN)
                            else
                                setOption(IssueState.CLOSED)
                        }}>
                        <Button>Open</Button>
                        <Button>Closed</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className='p-3 m-2 bg-[#EEEEEE] rounded-lg'>
                {data.repository.issues.nodes?.map((item: any, index: number) =>
                    <div className='mt-3' key={index}>
                        <ListItem
                            shape={SHAPE.ROUND}
                            endEnhancer={() => (
                                <ListItemLabel>{item.publishedAt}</ListItemLabel>
                            )}
                            overrides={{
                                Root: {
                                    style: ({ $theme }) => ({
                                        backgroundColor: '#D7D7D7',
                                    })
                                }
                            }}
                        >
                            <ListItemLabel>{item.title}</ListItemLabel>
                        </ListItem>
                    </div>)}
            </div>

        </>
    );
}

