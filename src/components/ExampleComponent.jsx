import TabBarButton from './TabBarButton.jsx';
import Section from './Section.jsx';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import Tabs from './Tabs.jsx';

export default function ExampleComponent() {
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
        <Section title={'Examples'} id='examples'>

            <Tabs buttons={<> <TabBarButton isSelect={selectedTopic === 'components'} onClick={() => handleClick('components')}>Component</TabBarButton>
                <TabBarButton isSelect={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabBarButton>
                <TabBarButton isSelect={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabBarButton>
                <TabBarButton isSelect={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabBarButton> </>} >

            </Tabs>
            {tabContent}
        </Section>
    );
}