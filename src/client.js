import App from './views/App.marko'
import Home from './views/pages/Home'

export const Routes = [{ name: 'home', path: '/', component: Home }]

App.renderSync({ Routes }).prependTo(document.querySelector('#app'))
