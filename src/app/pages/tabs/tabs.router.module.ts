import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { UsuarioGuard } from 'src/app/guards/usuario.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'notificaciones',
        children: [
          {
            path: '',
            loadChildren: '../notificaciones/notificaciones.module#NotificacionesPageModule'
          }
        ]
      },
      {
        path: 'principal',
        children: [
          {
            path: '',
            loadChildren: '../principal/principal.module#PrincipalPageModule'
          },
          {
            path: 'contacto',
            loadChildren: '../contacto/contacto.module#ContactoPageModule'
          },
          {
            path: 'coloquios',
            loadChildren: '../coloquios/coloquios.module#ColoquiosPageModule'
          },
          {
            path: 'congresos',
            loadChildren: '../congresos/congresos.module#CongresosPageModule'
          },
          {
            path: 'sesiones',
            loadChildren: '../sesiones/sesiones.module#SesionesPageModule'
          },
          {
            path: 'mesadirectiva',
            loadChildren: '../mesadirectiva/mesadirectiva.module#MesadirectivaPageModule'
          },
          {
            path: 'casos',
                loadChildren: '../casos/casos.module#CasosPageModule'
          },
          {
            path: 'lista',
            loadChildren: '../pages/casos-lista/casos-lista.module#CasosListaPageModule'
          },
          {
            path: 'usuario',
            loadChildren: '../usuario/usuario.module#UsuarioPageModule',
            canLoad: [UsuarioGuard]
          },
          {
            path: 'programa',
            children: [
              {
                path: '',
                loadChildren: '../programa/programa.module#ProgramaPageModule'
              },
              {
                path: 'actividad/:id',
                loadChildren: '../actividad/actividad.module#ActividadPageModule'
              },
            ]
          },
          {
            path: 'buscador',
            loadChildren: '../buscador/buscador.module#BuscadorPageModule'
          },
          {
            path: 'esquema',
            loadChildren: '../esquema/esquema.module#EsquemaPageModule'
          },
          {
            path: 'carteles',
            loadChildren: '../carteles/carteles.module#CartelesPageModule'
          },
          {
            path: 'videos',
            loadChildren: '../videos/videos.module#VideosPageModule'
          },
          {
            path: 'actividades',
            loadChildren: '../actividades/actividades.module#ActividadesPageModule'
          },
          {
            path: 'ponentes',
            children: [
              {
                path: '',
                loadChildren: '../ponentes/ponentes.module#PonentesPageModule'
              },
              {
                path: 'ponente/:id',
                loadChildren: '../ponente/ponente.module#PonentePageModule'
              },
            ]
          },
          {
            path: 'bienvenida',
            loadChildren: '../bienvenida/bienvenida.module#BienvenidaPageModule'
          },
          {
            path: 'expocomercial',
            loadChildren: '../expocomercial/expocomercial.module#ExpocomercialPageModule'
          },
          {
            path: 'patrocinadores',
            loadChildren: '../patrocinadores/patrocinadores.module#PatrocinadoresPageModule'
          },
          {
            path: 'circuito',
            loadChildren: '../circuito/circuito.module#CircuitoPageModule'
          },
          {
            path: 'agenda',
            loadChildren: '../agenda/agenda.module#AgendaPageModule'
          },
          {
            path: 'congresistas',
            children: [
              {
                path: '',
                loadChildren: '../congresistas/congresistas.module#CongresistasPageModule',
                canLoad: [UsuarioGuard],
              },
              {
                path: 'congresista/:id',
                loadChildren: '../congresista/congresista.module#CongresistaPageModule'
              },
            ]
          },
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule',
          },
          {
            path: 'usuario',
            loadChildren: '../usuario/usuario.module#UsuarioPageModule',
            canLoad: [UsuarioGuard]
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/principal',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/principal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
