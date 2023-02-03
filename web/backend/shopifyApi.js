import { useAuthenticatedFetch } from "../frontend/hooks/useAuthenticatedFetch";


const adminApiUrl = "https://ketochow.myshopify.com/admin/api/2022-10/graphql.json";
const fetch = useAuthenticatedFetch;

async function fetchAdminApi(query = "", { variables } = {}) {
  const headers = {
    "Content-Type": "application/json",
  };

  const res = fetch(adminApiUrl, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  
  const json = await res.json();
  if( json.errors ) {
    console.erros(json.erros);
    throw new Error("Failed to fetch API");
  }
  return json.data
}

export async function getSubscriptionContracts() {
  let subscriptionContracts = await fetchAdminApi(`
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
  `)
  return subscriptionContracts;
}
