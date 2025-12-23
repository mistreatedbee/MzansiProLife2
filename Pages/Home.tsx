// React default import removed (using automatic JSX runtime)
import SEO from '../src/components/SEO';
import HeroSection from '../src/components/home/HeroSection';
import AboutPreview from '../src/components/home/AboutPreview';
import MissionVisionValues from '../src/components/home/MissionVisionValues';
import ChallengeSolutionSection from '../src/components/home/ChallengeSolutionSection';
import ProjectsSection from '../src/components/home/ProjectsSections';
import GallerySection from '../src/components/home/GallerySection';
import QuestionnairePreview from '../src/components/home/QuestionnairePreview';
import DonateSection from '../src/components/home/DonateSection';
import ContactSection from '../src/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <SEO
        title="Mzansi Prolife Development Institute NPC - Empowering Communities Through Safety, Skills, and Self-Reliance"
        description="Mzansi Prolife Development Institute NPC enables and improves the lives of ordinary citizens of South Africa to achieve extraordinary outcomes through community empowerment, skills development, and social change."
        keywords="Mzansi Prolife, Development Institute, NPC, South Africa, Community Development, Skills Development, Social Change, Non-Profit, Nelspruit"
      />
      <div className="min-h-screen">
        <HeroSection />
        <AboutPreview />
        <MissionVisionValues />
        <ChallengeSolutionSection />
        <ProjectsSection />
        <GallerySection />
        <QuestionnairePreview />
        <DonateSection />
        <ContactSection />
      </div>
    </>
  );
}