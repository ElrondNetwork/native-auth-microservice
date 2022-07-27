import { ApiModule, CachingModule, ApiModuleOptions, CachingModuleOptions, ERDNEST_CONFIG_SERVICE } from "@elrondnetwork/erdnest";
import { DynamicModule, Provider } from "@nestjs/common";
import { ApiConfigModule } from "src/common/api-config/api.config.module";
import { ApiConfigService } from "src/common/api-config/api.config.service";
import { ErdnestConfigServiceImpl } from "src/common/api-config/erdnest.config.service.impl";

export class DynamicModuleUtils {
  static getCachingModule(): DynamicModule {
    return CachingModule.forRootAsync({
      imports: [ApiConfigModule],
      useFactory: (apiConfigService: ApiConfigService) => new CachingModuleOptions({
        url: apiConfigService.getRedisUrl(),
        poolLimit: apiConfigService.getPoolLimit(),
        processTtl: apiConfigService.getProcessTtl(),
      }),
      inject: [ApiConfigService],
    });
  }

  static getApiModule(): DynamicModule {
    return ApiModule.forRootAsync({
      imports: [ApiConfigModule],
      useFactory: (apiConfigService: ApiConfigService) => new ApiModuleOptions({
        axiosTimeout: apiConfigService.getAxiosTimeout(),
        rateLimiterSecret: apiConfigService.getRateLimiterSecret(),
        serverTimeout: apiConfigService.getServerTimeout(),
        useKeepAliveAgent: apiConfigService.getUseKeepAliveAgentFlag(),
      }),
      inject: [ApiConfigService],
    });
  }

  static getNestJsApiConfigService(): Provider {
    return {
      provide: ERDNEST_CONFIG_SERVICE,
      useClass: ErdnestConfigServiceImpl,
    };
  }
}
