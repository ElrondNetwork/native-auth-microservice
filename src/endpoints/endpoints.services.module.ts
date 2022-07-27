import { Module } from "@nestjs/common";
import { ApiConfigModule } from "src/common/api-config/api.config.module";
import { DynamicModuleUtils } from "src/utils/dynamic.module.utils";

@Module({
  imports: [
    ApiConfigModule,
    DynamicModuleUtils.getCachingModule(),
  ],
  exports: [
  ],
})
export class EndpointsServicesModule { }