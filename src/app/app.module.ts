import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoriesComponent } from './Categories/list-categories/list-categories.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShowCategoryComponent } from './Categories/show-category/show-category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
@NgModule({
  declarations: [
    AppComponent,
    ListCategoriesComponent,
    NavbarComponent,
    FooterComponent,
    ShowCategoryComponent,
    ListSubCategoriesComponent,
    ShowSubCategoeyComponent,
    ShowAllSubCategoriesComponent,
    ListBrandsComponent,
    ShowBrandComponent,
    ListProductsComponent,
    ShowProductComponent,
    SignupComponent,
    SigninComponent,
    ShowUserDataComponent,
    HomeComponent,
    ForgetPasswordComponent,
    ResetCodeComponent,
    ResetPasswordComponent,
    AllUsersComponent,
    UserCartComponent,
    ListItemsComponent,
    AddYourAddressComponent,
    ListAddressComponent,
    ListAllOrdersComponent,
    MakeOrderComponent,
    UserOrderComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
