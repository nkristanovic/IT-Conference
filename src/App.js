import './App.scss';
import SectionIntro from './components/SectionIntro/SectionIntro';
import SectionHighlights from './components/SectionHighlights/SectionHighlights';
import { highlightsSectionMock, introSectionMock } from './lib/mock/section';

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
      {highlightsSectionMock.map(highlights => (
        <SectionHighlights
          key={highlights.id}
          title={highlights.title}
          text={highlights.text}
          infoNumber={highlights.infoNumber}
          infoText={highlights.infoText}
        />
      ))}
    </>
  );
}

export default App;