import React from "react";
import { useAuthenticatedFetch } from "../hooks";

const ViewSubscriptions = () => {
  const fetch = useAuthenticatedFetch;
  const data = `
    {
      subscriptionContracts(first: 10) {
        edges {
          node {
            customer {
              displayName
            }
            id
            lineCount
            lines(first: 10) {
              edges {
                node {
                  title
                }
              }
            }
            nextBillingDate
            orders(first: 10) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  `

  fetch("https://ketochow.myshopify.com/admin/api/2022-10/graphql.json", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Sucess:', data);
    })
    .catch((error) => {
      console.log('Error:', error);
    });

  return (
    <div>viewSubscriptions</div>
  )
}

export default ViewSubscriptions