import type { ComponentChildren } from "preact";
import { Container, Layout } from "@/components";


type pageProps = {
    children: ComponentChildren;
};

const PageWrapper = ({ children }: pageProps) => (
    <>
        <Layout>
            <Container>
                {children}
            </Container>
        </Layout>
    </>
);

export default PageWrapper;
