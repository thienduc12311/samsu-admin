import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AllGradesComponent } from './management/all-grades/all-grades.component';
import { DepartmentDetailComponent } from './management/departments/department-detail/department-detail.component';
import { DepartmentsComponent } from './management/departments/departments.component';
import { AddEventProposalComponent } from './management/event-proposal/add-event-proposal/add-event-proposal.component';
import { AllEventProposalComponent } from './management/event-proposal/admin/all-event-proposal/all-event-proposal.component';
import { EditEventProposalComponent } from './management/event-proposal/edit-event-proposal/edit-event-proposal.component';
import { EventProposalComponent } from './management/event-proposal/event-proposal.component';
import { ViewProposalComponent } from './management/event-proposal/view-proposal/view-proposal.component';
import { AddEventComponent } from './management/events/add-event/add-event.component';
import { AllEventsComponent } from './management/events/all-events/all-events.component';
import { SingleEventComponent } from './management/events/single-event/single-event.component';
import { GradesComponent } from './management/grades/grades.component';
import { AllGroupsComponent } from './management/groups/all-groups/all-groups.component';
import { SingleGroupComponent } from './management/groups/single-group/single-group.component';
import { InvokePointComponent } from './management/invoke-point/invoke-point.component';
import { NotificationsComponent } from './management/notifications/notifications.component';
import { SemestersComponent } from './management/semesters/semesters.component';
import { AllStudentsComponent } from './management/students/all-students/all-students.component';
import { UserComponent } from './management/user/user.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'my-event-proposal',
      component: EventProposalComponent,
    },
    {
      path: 'event-proposals',
      component: AllEventProposalComponent,
    },
    {
      path: 'event-proposal/add',
      component: AddEventProposalComponent,
    },
    {
      path: 'event-proposal/view/:id',
      component: ViewProposalComponent,
    },
    {
      path: 'event-proposal/edit/:id',
      component: EditEventProposalComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'users',
      component: AllStudentsComponent,
    },
    {
      path: 'events',
      component: AllEventsComponent,
    },
    {
      path: 'events/add',
      component: AddEventComponent,
    },
    {
      path: 'groups',
      component: AllGroupsComponent,
    },
    {
      path: 'departments',
      component: DepartmentsComponent,
    },
    {
      path: 'departments/:id',
      component: DepartmentDetailComponent,
    },
    {
      path: 'grades',
      component: GradesComponent,
    },
    {
      path: 'grade-tickets',
      component: InvokePointComponent,
    },
    {
      path: 'all-grades',
      component: AllGradesComponent
    },
    {
      path: 'notifications',
      component: NotificationsComponent
    },
    {
      path: 'semesters',
      component: SemestersComponent
    },
    {
      path: 'user/:id',
      component: UserComponent,
    },
    {
      path: 'group/:id',
      component: SingleGroupComponent,
    }, 
    {
      path: 'event/:id',
      component: SingleEventComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
