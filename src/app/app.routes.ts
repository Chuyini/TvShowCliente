import { Routes } from '@angular/router';
//Importamos componentes (paginas)
import { HomePage} from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';
import { TvShowPPage } from './pages/tv-show-p/tv-show-p.page';
import { ErrorPage } from './pages/error/error.page';
import { LoginPage } from './pages/login/login.page';
import { DetailPage } from './pages/Detail/detail/detail.page';
export const routes: Routes = [

   //Fue eliminada la direccion para con la signacion del puro componente
   {path:"detail",component:DetailPage},
    {path:"home",component: HomePage},
    {path: "contact", component: ContactPage},
    {path: "tv-shows-p",component: TvShowPPage},
    {path: "about",component: AboutPage},
    {path: "login", component: LoginPage},
    {path: "", redirectTo:"tv-shows-p",pathMatch:"full"},//cuando entre a la direccion vacía, será redirigido exactamente a tv-shows-p por eso esta en pathmatch full para que haga match con esa. 
    {path: "**", component:ErrorPage },//Este es el de la ruta no encontrada o error
    
];
