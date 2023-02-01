import Head from "next/head";
import { SWRConfig } from "swr";

import { CommentsComponent } from "src/components/Comments";
import { Header } from "src/components/Header";

export const getStaticProps = async () => {
  const COMMENTS_API_URL = "https://jsonplaceholder.typicode.com/comments";
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};

const Comments = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>Comments Page</title>
        <meta name="description" content="User一覧を表示するぺージ" />
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </div>
  );
};

export default Comments;
