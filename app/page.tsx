import { LandingPage } from "../components/LandingPage";
import { siteContent } from "../lib/siteContent";

export default function Home() {
  return <LandingPage content={siteContent.en} />;
}
