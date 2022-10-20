import "antd/dist/antd.css";
import { MDXProvider } from "@mdx-js/react";
import { Typography } from "antd";

const { Text } = Typography;

const Code = ({ children }) => <Text code>{children}</Text>;

const components = {
  Text,
  Code,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
