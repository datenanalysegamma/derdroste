import StartPage from '../components/startpage/Index'
import Characteristics from '../components/characteristics/Index'
import TechStack from '../components/techstack/Index'
import Personal from '../components/personal/Index'
import Blog from '../components/blog/Index'
import Detail from '../components/blog/Detail'

 export const routes = [
     // Startseite
     {
         path: '/', component: StartPage, meta: { transitionName: 'slide'}
     },
     // Steckbrief
     {
         path: '/characteristics', component: Characteristics, meta: { transitionName: 'slide'}
     },
     // Techstack
     {
         path: '/techstack', component: TechStack, meta: { transitionName: 'slide'}
     },
     // Persönliches
     {
         path: '/personal', component: Personal, meta: { transitionName: 'slide'}
     },
     // Blog
     {
         path: '/blog', component: Blog, meta: { transitionName: 'slide'}
     },
     // Blog Details
     {
         path: '/blog/detail', component: Detail, meta: { transitionName: 'slide'}
     }
];
