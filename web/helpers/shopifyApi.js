import { useAuthenticatedFetch } from "../frontend/hooks/useAuthenticatedFetch";


// const adminApiUrl = "https://ketochow.myshopify.com/admin/api/2022-10/graphql.json";

// function fetchAdminApi(query = "", { variables } = {}) {
//   const fetch = useAuthenticatedFetch();

//   const res = fetch(adminApiUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   })
//     .then((response) => response.json())
//       .then((data) => {
//         console.log('Sucess:', data);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
  
//   // const json = await res.json();
//   // if( json.errors ) {
//   //   console.erros(json.erros);
//   //   throw new Error("Failed to fetch API");
//   // }
//   // return json.data
// }

// export function getSubscriptionContracts() {
//   let subscriptionContracts = fetchAdminApi(`
//     {
//       subscriptionContracts(first: 10) {
//         edges {
//           node {
//             customer {
//               displayName
//             }
//             id
//             lineCount
//             lines(first: 10) {
//               edges {
//                 node {
//                   title
//                 }
//               }
//             }
//             nextBillingDate
//             orders(first: 10) {
//               edges {
//                 node {
//                   name
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   console.log(1, subscriptionContracts)
//   return subscriptionContracts;
// }
