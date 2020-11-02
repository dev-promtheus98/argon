import { DepotsTraiteComponent } from './../../modules/depots-traite/depots-traite.component';
import { DepotsComponent } from './../../modules/depots/depots.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { DepotsLivreComponent } from 'src/app/modules/depots-livre/depots-livre.component';
import { PaiementsComponent } from 'src/app/modules/paiements/paiements.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },

    { path: 'depots',           component: DepotsComponent },
    { path: 'depots-traite',           component: DepotsTraiteComponent },
    { path: 'depots-livre',           component: DepotsLivreComponent },
    { path: 'paiements',           component: PaiementsComponent },
];
