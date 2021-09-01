import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import StyleSheet from "../styles/Layout.module.css";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={StyleSheet.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Pear Programming",
  description: "Find and create peer led code demos and workshops",
  keywords: "code, software, workshop, demos, help",
};
