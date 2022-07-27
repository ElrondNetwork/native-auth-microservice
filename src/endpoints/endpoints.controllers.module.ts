import { Module } from "@nestjs/common";
import { DynamicModuleUtils } from "src/utils/dynamic.module.utils";
import { AuthController } from "./auth/auth.controller";
import { EndpointsServicesModule } from "./endpoints.services.module";
import { HealthCheckController } from "./health-check/health.check.controller";
import { TokensController } from "./tokens/token.controller";
import { UsersController } from "./users/user.controller";

@Module({
  imports: [
    EndpointsServicesModule,
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService(),
  ],
  controllers: [
    AuthController, HealthCheckController, UsersController, TokensController,
  ],
})
export class EndpointsControllersModule { }