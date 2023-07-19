import { useState } from 'react';
import ContextProvider from '../context/ContextProvider'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
