import { Module } from "@nestjs/common";
import { ApiConfigModule } from "src/common/api-config/api.config.module";
import { DynamicModuleUtils } from "src/utils/dynamic.module.utils";
import { UsersModule } from "./users/user.module";

@Module({
  imports: [
    UsersModule,
    ApiConfigModule,
    DynamicModuleUtils.getCachingModule(),
  ],
  exports: [
    UsersModule,
  ],
})
export class EndpointsServicesModule { }