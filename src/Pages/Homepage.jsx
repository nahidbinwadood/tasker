import HeroSection from './Sections/HeroSection';
import TaskBoard from './Sections/Taskboard';

const Homepage = () => {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <TaskBoard />
    </main>
  );
};

export default Homepage;
