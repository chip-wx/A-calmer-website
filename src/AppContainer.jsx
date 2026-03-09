import App from "./App";
import { AppRouter } from "./routing/AppRouter";


export function AppContainer() {
    return (
        <AppRouter>
            <App />
        </AppRouter>
    );
}