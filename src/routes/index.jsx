import Home from 'containers/homePage/Home';
import cakes from 'containers/cakes/cakes';
import home1 from 'containers/Appcopy2';

var indexRoutes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/cakes', name: 'cake', component: cakes },
  { path: '/link2', name: 'link2', component: home1 },
  { path: '/', name: 'home', component: Home }
];

export default indexRoutes;
