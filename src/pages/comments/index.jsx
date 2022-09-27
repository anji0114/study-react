import Head from "next/head";
import { CommentsComponent } from "src/components/Comments";

import { Header } from "src/components/Header";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
        <meta name="description" content="User一覧を表示するぺージ" />
      </Head>
      <Header />

      <CommentsComponent />
    </div>
  );
};

export default Comments;
