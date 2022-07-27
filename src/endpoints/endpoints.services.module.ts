import { Module } from "@nestjs/common";
import { ApiConfigModule } from "src/common/api-config/api.config.module";
import { DynamicModuleUtils } from "src/utils/dynamic.module.utils";
import { TestSocketModule } from "./test-sockets/test.socket.module";
import { TokenModule } from "./tokens/token.module";
import { UsersModule } from "./users/user.module";

@Module({
  imports: [
    TestSocketModule,
    UsersModule,
    TokenModule,
    ApiConfigModule,
    DynamicModuleUtils.getCachingModule(),
  ],
  exports: [
    TestSocketModule, UsersModule, TokenModule,
  ],
})
export class EndpointsServicesModule { }