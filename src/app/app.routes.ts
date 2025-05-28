import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

export const routes: Routes = [
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'cadastrar',
    component: CadastrarComponent
},
{
    path: 'cardapio',
    component: CardapioComponent
},
{
    path: 'pedidos',
    component: PedidosComponent
}
];
