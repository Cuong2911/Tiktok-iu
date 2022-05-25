import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                {/* link demo */}
                <div>
                    {publicRoutes.map((route, index) => {
                        const path = route.path;
                        let aContent = path.substring(1);
                        if (aContent === '') aContent = 'Home';
                        return (
                            <a key={index} href={path} style={{ marginLeft: '12px' }}>
                                {aContent}
                            </a>
                        );
                    })}
                </div>

                {/* routes */}
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.Layout) {
                            Layout = route.Layout;
                        } else if (route.Layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
