import { DashboardComponent } from './dashboard.component';
import { IntroductionComponent } from '../../_components/introduction/introduction.component';
import { OverviewComponent } from 'src/app/_components/overview/overview.component';
import { TestMCComponent } from 'src/app/_components/test-mc/test-mc.component';
import { TestModComponent } from 'src/app/_components/test-mod/test-mod.component'

export const dashboardRoutes = [{
    path: '', component: DashboardComponent,
    children: [
        { path: '', component: OverviewComponent },
        { path: 'overview', redirectTo: '' },
        { path: 'introduction', component: IntroductionComponent},
        { path: 'testmc', component: TestMCComponent },
        { path: 'testmod', component: TestModComponent }
    ]
}]

export const DashboardRoutingModule = [ ]