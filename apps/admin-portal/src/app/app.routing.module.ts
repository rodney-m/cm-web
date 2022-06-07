import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@christ-embassy/core';
import { ContainerComponent } from '@christ-embassy/layout';

const routes : Routes = [
    { path: 'auth', loadChildren: () => import('@christ-embassy/auth').then(c => c.AuthModule) },
    {
      path: '',
      component: ContainerComponent,
      canActivate:[AuthGuard],
      children: [
        {
          path: 'user-management', loadChildren: () => import('@christ-embassy/usermanagement').then(c => c.UsermanagementModule)
        }
      ]
    }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
