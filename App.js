import Start from './screens/Start';
import RootStack from './navigators/RootStack';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

export default function App() {
    return (
        <Provider store={Store}>
            <RootStack />
        </Provider>
    );
}
