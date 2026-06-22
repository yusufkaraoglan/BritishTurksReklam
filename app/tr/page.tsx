import type { Metadata } from "next";
import { LandingPage } from "../../components/LandingPage";
import { siteContent } from "../../lib/siteContent";

export const metadata: Metadata = {
  title: "BritishTurks ile Reklam Ver | UK Türk Toplumu Medya Platformu",
  description:
    "Markanızı, etkinliğinizi veya işletmenizi BritishTurks Instagram reklam paketleriyle Birleşik Krallık Türk toplumuna tanıtın.",
  alternates: {
    canonical: "/tr",
    languages: {
      "en-GB": "/",
      "tr-TR": "/tr"
    }
  }
};

export default function TurkishHome() {
  return <LandingPage content={siteContent.tr} />;
}
