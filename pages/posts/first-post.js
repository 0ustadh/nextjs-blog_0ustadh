/*
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return( 
      <Layout>
        <Head>
          <title>First Post</title>
          <Script 
          src="https://connect.facebook.net/en_US/sdk.js" 
          strategy='lazyOnload'
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
          />
        </Head>

        <h1>First Post</h1>
        <h2>
            <Link href='/'>Back to home</Link>
        </h2>
      </Layout>
    );
}
*/

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}