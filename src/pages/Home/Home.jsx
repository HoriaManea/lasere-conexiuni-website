import React from "react";
import HeroSection from "../../components/Herosection/Herosection";
import HighlightsSection from "../../components/HighlightsSection/HighlightsSection";
import BadgeSection from "../../components/Badge/BadgeSection";
import VideoMask from "../../components/VideoMask/VideoMask";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <VideoMask />
      <BadgeSection />
    </>
  );
}
