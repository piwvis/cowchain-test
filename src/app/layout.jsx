import "./index.css";
import "./home.css";

export const metadata = {
  title: "Cowchain - Blockchain Development",
  description: "Web site created using create-react-app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/homepage/video.mp4" type="video" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="stylesheet" href="https://use.typekit.net/cqp2qoa.css" />

        <meta name="theme-color" content="#000000" />
      </head>

      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
