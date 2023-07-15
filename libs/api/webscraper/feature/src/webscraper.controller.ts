import { Controller, Get } from "@nestjs/common";
import { PrivatePropertySaleService } from "./PrivatePropertySale.service";
import { PrivatePropertyRentService } from "./PrivatePropertyRent.service";
import { PropertiesService } from "@estate-match/api/properties/feature";
import { ICreatePropertyRequest, IProperty } from "@estate-match/api/properties/util";

@Controller()
export class WebScraperController {
    constructor(private readonly PrivatePropertySaleService: PrivatePropertySaleService,
      private readonly PrivatePropertyRentService: PrivatePropertyRentService,
      private readonly propertyService: PropertiesService
      ) {}
    
    @Get("/PrivatePropertySaleScraper")
    async getScrapedProperties() {
        const properties = await this.PrivatePropertySaleService.PrivatePropertySalescrape();
        // properties.forEach(property => {
        
        
        // });
        for(let i = 0; i < properties.length; i++){
          const property: IProperty = {
            title: properties[i].title,
            price: parseInt(properties[i].price.replace(/\s/g, "")),
            bedrooms: properties[i].bedrooms,
            bathrooms: properties[i].bathrooms,
            garages: properties[i].garages,
            location: properties[i].location,
            amenities: properties[i].amenities,
            images: properties[i].imageURLs,
        }
          const request: ICreatePropertyRequest = {
            property: property
          };
          // console.log(request);
          this.propertyService.createProperty(request);
        }
        
        return properties;
      }

    @Get("/PrivatePropertyRentScraper")
    async getScrapedPropertiesRent() {
      const properties = await this.PrivatePropertyRentService.PrivatePropertyRentscrape();
      // properties.forEach(property => {
      
      
      // });
      for(let i = 0; i < properties.length; i++){
        const property: IProperty = {
          title: properties[i].title,
          price: parseInt(properties[i].price.replace(/\s/g, "")),
          bedrooms: properties[i].bedrooms,
          bathrooms: properties[i].bathrooms,
          garages: properties[i].garages,
          location: properties[i].location,
          amenities: properties[i].amenities,
          images: properties[i].imageURLs,
      }
        const request: ICreatePropertyRequest = {
          property: property
        };
        // console.log(request);
        this.propertyService.createProperty(request);
      }
      
      return properties;
    }

}
