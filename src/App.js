import React, {
  Component
} from 'react';
import Layout from './componenets/layout/Layout.jsx'
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder'
class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    )
  }

}

export default App;