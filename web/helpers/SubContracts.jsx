import React from "react";
import { useAuthenticatedFetch } from "../frontend/hooks";

export const SubContracts = () => {
  const fetch = useAuthenticatedFetch();
  console.log("hit");

  const res = fetch(
    "/apps/subscription-proxy", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(`
    //   {
    //     subscriptionContracts(first: 10) {
    //       edges {
    //         node {
    //           customer {
    //             displayName
    //           }
    //           id
    //           lineCount
    //           lines(first: 10) {
    //             edges {
    //               node {
    //                 title
    //               }
    //             }
    //           }
    //           nextBillingDate
    //           orders(first: 10) {
    //             edges {
    //               node {
    //                 name
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)
  })
    .then((res) => res.json())
      .then((res) => {
        console.log("Success:", res);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

  return (
    <div>h</div>
  )
}
