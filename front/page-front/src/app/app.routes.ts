import { Routes } from '@angular/router';
import { AppLayout } from './components/menu/telas/sidebar/app.layout';
import { Carosel1Component } from './components/carosel/carosel1/carosel1.component';
import { Landing } from './components/landing/landing';
import { OrganizacaoComponent } from './components/organizacao/organizacao.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FrameComponent } from './components/frame/frame.component';
import { GridItemComponent } from './components/grids/grid-item/grid-item.component';
import { GridIconComponent } from './components/grids/grid-icon/grid-icon.component';

export const routes: Routes = [
  {path: '', component: AppLayout, children: [
    {path: 'carosel', component: Carosel1Component},
    {path: 'organizacao', component: OrganizacaoComponent},
    {path: 'noticias', component: NoticiasComponent},
    {path: 'frame', component: FrameComponent},
    {path: 'grid', component: GridItemComponent},
    {path: 'grid/icon', component: GridIconComponent}
  ]}
];
