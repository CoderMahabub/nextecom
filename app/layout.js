import "./globals.css";
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import TopNav from "@/components/TopNav";

export const metadata = {
  title: "Nextecon",
  description: "eCommerce app using next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
