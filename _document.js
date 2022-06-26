import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    
    render() {
        
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="News Site Blog"/>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"/>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />

                    <script src="https://kit.fontawesome.com/a076d05399.js" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
        
    }
    
}


export default MyDocument;