import { Layout } from "@/components/layout/Layout";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function PrecosPage() {
  return (
    <Layout>
      <PricingSection />
      <FAQSection />
    </Layout>
  );
}
