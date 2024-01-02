
import { useState } from 'react';
import Header from './components/Header/Header.jsx'

import CoreConceptsComponent from './components/CoreConceptComponent.jsx';
import TabBarButton from './components/TabBarButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selctedButton) {
    console.log(selctedButton);
    setSelectedTopic(selctedButton);
  }
  let tabContent = <p>Please select a topic</p>
  if (selectedTopic) {
    tabContent = <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsComponent />
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabBarButton isSelect={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Component</TabBarButton>
            <TabBarButton isSelect={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabBarButton>
            <TabBarButton isSelect={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabBarButton>
            <TabBarButton isSelect={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabBarButton>
          </menu>

        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
