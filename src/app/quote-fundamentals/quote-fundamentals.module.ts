import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFundamentalsRoutingModule } from './quote-fundamentals-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [QuoteDetailsComponent],
  imports: [QuoteFundamentalsRoutingModule, CommonModule, SharedModule],
})
export class QuoteFundamentalsModule {}
