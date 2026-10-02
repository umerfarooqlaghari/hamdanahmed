"use client";

export { 
  CreativeGrowthStudio, 
  CreativeGrowthStudio as MarketingConsoleContainer, 
  CreativeGrowthStudio as GrowthEngineSvg 
} from "@/components/CreativeGrowthStudio";

export default function GrowthEngineSvgWrapper() {
  const { CreativeGrowthStudio } = require("@/components/CreativeGrowthStudio");
  return <CreativeGrowthStudio />;
}
