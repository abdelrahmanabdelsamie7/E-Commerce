import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './Categories/list-categories/list-categories.component';
import { ShowCategoryComponent } from './Categories/show-category/show-category.component';
import { ListSubCategoriesComponent } from './SubCategories/list-sub-categories/list-sub-categories.component';
import { ShowSubCategoeyComponent } from './SubCategories/show-sub-categoey/show-sub-categoey.component';
import { ShowAllSubCategoriesComponent } from './Categories/show-all-sub-categories/show-all-sub-categories.component';
import { ListBrandsComponent } from './Brands/list-brands/list-brands.component';
import { ShowBrandComponent } from './Brands/show-brand/show-brand.component';
import { ListProductsComponent } from './Products/list-products/list-products.component';
import { ShowProductComponent } from './Products/show-product/show-product.component';
import { SignupComponent } from './shared/signup/signup.component';
import { SigninComponent } from './shared/signin/signin.component';
import { ShowUserDataComponent } from './User/show-user-data/show-user-data.component';
import { HomeComponent } from './shared/home/home.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { ResetCodeComponent } from './User/reset-code/reset-code.component';
import { ResetPasswordComponent } from './User/reset-password/reset-password.component';
import { AllUsersComponent } from './User/all-users/all-users.component';
import { UserCartComponent } from './cart/user-cart/user-cart.component';
import { ListItemsComponent } from './WishList/list-items/list-items.component';
import { AddYourAddressComponent } from './AAddress/add-your-address/add-your-address.component';
import { ListAddressComponent } from './AAddress/list-address/list-address.component';
import { ListAllOrdersComponent } from './Orders/list-all-orders/list-all-orders.component';
import { MakeOrderComponent } from './Orders/make-order/make-order.component';
import { UserOrderComponent } from './Orders/user-order/user-order.component';

const routes: Routes = [
  // Home Page
  { path: '', component: HomeComponent },
  //Sign Up
  { path: 'SignUp', component: SignupComponent },
  { path: 'SignIn', component: SigninComponent },
  // Start Categories
  { path: 'AllCategories', component: ListCategoriesComponent },
  { path: 'ShowCategory/:id', component: ShowCategoryComponent },
  {
    path: 'showAllSubCategories/:id',
    component: ShowAllSubCategoriesComponent,
  },
  // End Categories
  // Start Sub Categories
  { path: 'All_SubCategories', component: ListSubCategoriesComponent },
  { path: 'Show_SubCategory/:id', component: ShowSubCategoeyComponent },
  // End Sub Categories
  // Start Brand
  { path: 'ListBrands', component: ListBrandsComponent },
  { path: 'ShowBrand/:id', component: ShowBrandComponent },
  //End Brand
  // Start Product
  { path: 'ListProducts', component: ListProductsComponent },
  { path: 'ShowProduct/:id', component: ShowProductComponent },
  //End Product
  // Start User
  { path: 'User', component: ShowUserDataComponent },
  { path: 'ForgetPassword', component: ForgetPasswordComponent },
  { path: 'ResetCode', component: ResetCodeComponent },
  { path: 'ResetPassword', component: ResetPasswordComponent },
  { path: 'AllUsers', component: AllUsersComponent },
  // End User
  //  Start Cart
  { path: 'UserCart', component: UserCartComponent },
  // End Cart
  // Start WishList
  { path: 'WishList', component: ListItemsComponent },
  // End WishLisr
  // Start Address
  { path: 'AddYourAddress', component: AddYourAddressComponent },
  { path: 'MyAddresses', component: ListAddressComponent },
  // End Address
  // Start Orders
  { path: 'AllOrders', component: ListAllOrdersComponent },
  { path: 'MakeOrder/:id', component: MakeOrderComponent },
  { path: 'MyOrders', component: UserOrderComponent },
  // End Orders
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
