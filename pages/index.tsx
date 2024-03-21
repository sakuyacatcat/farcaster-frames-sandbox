import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="This is an about page of our example Next.js application with meta tags."
        />
        {/* Open Graph / Facebook */}
        {/* <meta
          property="og:image"
          content="https://fc-dev-call.replit.app/image"
        /> */}
        {/* Custom fc:frame tags */}
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="https://fc-dev-call.replit.app/image"
        />
        <meta property="fc:frame:button:1" content="Spec" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta
          property="fc:frame:button:1:target"
          content="https://github.com/sakuyacatcat/farcaster-frames-sandbox"
        />

        <meta property="fc:frame:button:2" content="Image" />
        <meta property="fc:frame:button:2:action" content="link" />
        <meta
          property="fc:frame:button:2:target"
          content="https://fc-dev-call.replit.app/image"
        />

        <meta property="fc:frame:button:3" content="Frame Validator" />
        <meta property="fc:frame:button:3:action" content="link" />
        <meta
          property="fc:frame:button:3:target"
          content="https://warpcast.com/~/developers/frames"
        />

        <meta property="fc:frame:button:4" content="Vercel" />
        <meta property="fc:frame:button:4:action" content="link" />
        <meta
          property="fc:frame:button:4:target"
          content="https://farcaster-frames-sandbox.vercel.app/"
        />
      </Head>
      <h1>About This Project</h1>
      <p>
        This is a simple project to show how to use meta tags in Next.js with
        TypeScript, including custom fc:frame tags.
      </p>
    </>
  );
};

export default Home;
