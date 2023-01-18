import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText,
} from "@shopify/polaris";


export default function HomePage() {
  const navigate = useNavigate();
  
  const isLoading = false;
  const isRefetching = false;
  const codes = [];
  
  const loadingMarkup = isLoading ? (
    <Card sectioned>
      <Loading />
      <SkeletonBodyText />
    </Card>
  ) : null;
  
  const emptyStateMarkup = 
  !isLoading && !codes?.length ? (
    <Card sectioned>
        <EmptyState 
          heading="Create unique codes for your product"
          action={{
            content: "Create",
            onAction: () => navigate("/codes/new"),
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>
            Use Codes!
          </p>
        </EmptyState>
      </Card>
    ) : null;
    
    return (
      <Page>
      <TitleBar
        title="Codes"
        primaryAction={{
          content: "Create Code",
          onAction: () => navigate("codes/new"),
        }}
      />
      <Layout>
        <Layout.Section>
          {loadingMarkup}
          {emptyStateMarkup}
        </Layout.Section>
      </Layout>
    </Page>
  );
}