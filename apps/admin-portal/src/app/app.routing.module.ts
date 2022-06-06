import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [    
    { path: 'auth', loadChildren: () => import('@christ-embassy/auth').then(c => c.AuthModule) },
    { path: '', loadChildren: () => import('@christ-embassy/layout').then(c => c.LayoutModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
