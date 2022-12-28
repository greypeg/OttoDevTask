import React from 'react'
import { useQuery, gql } from "@apollo/client";
import {
    ListItem,
    ListItemLabel,
    SHAPE
  } from "baseui/list";
  import { Check } from "baseui/icon";

type Props = {}

const QUERY = gql`
query issues { 
    repository(owner: "t3-oss", name: "create-t3-app") {
      labels(last: 10) {
        nodes {
          id
          name
          issues {
            totalCount
          }
        }
      }
    }
  }
`;

export default function List({ }: Props) {
   /* const { data, loading, error } = useQuery(QUERY);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }
    console.log(data)*/
    return (
        <ListItem
      artwork={props => <Check {...props} />}
      shape={SHAPE.ROUND}
      endEnhancer={() => (
        <ListItemLabel>End Enhancer</ListItemLabel>
      )}
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            outline: `${$theme.colors.warning600} solid`,
            backgroundColor: $theme.colors.warning600
          })
        }
      }}
    >
      <ListItemLabel>Label</ListItemLabel>
    </ListItem>
  );
}