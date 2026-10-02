"use client";

export { 
  MarketingHeroIllustration,
  MarketingHeroIllustration as CreativeGrowthStudio, 
  MarketingHeroIllustration as MarketingConsoleContainer, 
  MarketingHeroIllustration as GrowthEngineSvg 
} from "@/components/MarketingHeroIllustration";

export default function GrowthEngineSvgWrapper() {
  const { MarketingHeroIllustration } = require("@/components/MarketingHeroIllustration");
  return <MarketingHeroIllustration />;
}
