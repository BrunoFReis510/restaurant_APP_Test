How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
R: Gastei quase 72h a pesquisar código, fazer e testar, visto que sou novo em Angular tive de aprender tudo do zero. Se tivesse mais tempo colocaria o programa mais intuitivo.

What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
R: Foi o routing onde permitiu fazer o rastreio das páginas. 

const routes: Routes = [
  path: '', 
    children: [
  { path: 'home', component: HomeComponent, canActivate:[AuthorizatedGuard] },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'restaurants/:id', component: RestaurantDetailsComponent },
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
    ],

    canActivate: [AuthorizatedGuard],
];

How would you track down a performance issue in production? Have you ever had to do this?
R: Conforme os erros que apareciam e desempenho do programa em execução. Nunca tive de fazer isso.
