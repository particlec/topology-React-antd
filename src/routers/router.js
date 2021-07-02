import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from 'antd';
const { Header, Content, Sider } = Layout;

const WebRouter = () => {
  return (
    <HashRouter basename="/topology">
      <Switch>
        <Route path="/view">
          <Layout style={{ height: '100%' }}>
            <Header>
              <xxx />
            </Header>
            <Layout>
              <Sider>
                <xxx />
              </Sider>
              <Content>
                <xxx />
              </Content>
            </Layout>
          </Layout>
        </Route>

        <Redirect to="/view" />
      </Switch>
    </HashRouter>
  );
};
export default WebRouter;
