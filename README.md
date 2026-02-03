# JUCA

JSX UI Components for Apps
## Usage

### Button Component

```jsx
import { Button } from 'juca-jsx';

function App() {
    return (
        <node>
            <Button
              content="teste 1"
            />
            <Button
              content="teste 2"
              kind="danger"
            />
            <SkeletonButton/>
            <AnimatedButton
              kind="tertiary"
              content="teste 4"
            />
        </node>
    );
}

export default App;
```