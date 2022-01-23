import './App.scss';
import SectionIntro from './components/SectionIntro/SectionIntro';
import SectionHighlights from './components/SectionHighlights/SectionHighlights';
import { highlightsMock, introSectionMock } from './lib/mock/section';

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
      <SectionHighlights />
    </>
  );
}

export default App;