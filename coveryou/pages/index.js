import Head from "next/head";
import { QueryClientProvider, QueryClient } from "react-query"
import Main from "../components/Main";
import Container from "../components/wrapper/Container";

export default function Home() {
  const queryClient = new QueryClient();

  return (
      <>
        <Head>
          <title>CoverMe</title>
          <meta name='description' content='Generate cover letters using AI, edit and save them.' />
        </Head>
        <Container className="p-6 md:p-10 overflow-hidden flex flex-col lg:flex-row min-h-full w-screen ">
            <Main />
        </Container>
      </>

  )
}
