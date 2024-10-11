import HeroSection from "./components/HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectGallery from "./components/ProjectGallery";
import { useEffect, useState } from "react";

const coreProjects = [
  { id: 1, video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", title: "title 1" },
  { id: 2, video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", title: "title 2" },
];

const projects = [
  { id: 1, image: "https://placehold.co/600x400", title: "title 1" },
  { id: 2, image: "https://placehold.co/600x400", title: "title 2" },
  { id: 3, image: "https://placehold.co/600x400", title: "title 3" },
  { id: 4, image: "https://placehold.co/600x400", title: "title 4" },
  { id: 5, image: "https://placehold.co/600x400", title: "title 5" },
  { id: 6, image: "https://placehold.co/600x400", title: "title 6" },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [indexedProject, setIndexedProject] = useState(coreProjects[0]);

  useEffect(() => {
    // 화면이 준비되면 로딩 해제
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 예시로 2초 후 로딩 해제
    return () => clearTimeout(timer); // 컴포넌트 해제 시 타이머 정리
  }, []);




  const handleActiveIndexChange = (slide) => {
    setIndexedProject(coreProjects[slide.realIndex]);
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <div>
        <Header />
        <main>
          <section>
            <Swiper navigation loop modules={[Navigation]} onActiveIndexChange={handleActiveIndexChange} className="mySwiper">
              {coreProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <HeroSection project={project} indexedProject={indexedProject} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          <section>
            <ProjectGallery projects={projects} />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default App;
