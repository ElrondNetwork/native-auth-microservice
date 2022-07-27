import { Module } from '@nestjs/common';
import { ApiMetricsController } from './common/metrics/api.metrics.controller';
import { DynamicModuleUtils } from './utils/dynamic.module.utils';
import { LoggingModule } from '@elrondnetwork/erdnest';
import { ApiMetricsModule } from './common/metrics/api.metrics.module';
import { ApiConfigModule } from './common/api-config/api.config.module';

@Module({
  imports: [
    ApiMetricsModule,
    ApiConfigModule,
    DynamicModuleUtils.getCachingModule(),
    LoggingModule,
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService(),
  ],
  controllers: [
    ApiMetricsController,
  ],
})
export class PrivateAppModule { }
