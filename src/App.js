import './App.scss';
import SectionIntro from './components/SectionIntro/SectionIntro';
import { introSectionMock } from './lib/mock/section';

function App() {
  return (
    <>
      {introSectionMock.map(section => (
        <SectionIntro
          key={section.id}
          title={section.title}
          description={section.description}
        />
      ))}
    </>
  );
}

export default App;
