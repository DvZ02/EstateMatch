import { Module } from "@nestjs/common";
import { WebScraperController } from "./webscraper.controller";
import { PrivatePropertySaleService } from "./PrivatePropertySale.service";
import { PrivatePropertyRentService } from "./PrivatePropertyRent.service";
import { RemaxSaleService } from "./RemaxSale.service";
import { PropertiesService } from "@estate-match/api/properties/feature";
import { CqrsModule } from "@nestjs/cqrs";

@Module({
    imports: [CqrsModule],
    controllers: [WebScraperController],
    providers: [PrivatePropertySaleService, PrivatePropertyRentService,RemaxSaleService, PropertiesService],
})
export class WebScraperModule {}