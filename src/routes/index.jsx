import Home from 'containers/homePage/Home';
import home from 'containers/Appcopy';
import home1 from 'containers/Appcopy2';

var indexRoutes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/link1', name: 'link1', component: home },
  { path: '/link2', name: 'link2', component: home1 },
  { path: '/', name: 'home', component: Home }
];

export default indexRoutes;
