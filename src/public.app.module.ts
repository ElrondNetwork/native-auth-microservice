import { Module } from '@nestjs/common';
import '@elrondnetwork/erdnest/lib/utils/extensions/array.extensions';
import '@elrondnetwork/erdnest/lib/utils/extensions/date.extensions';
import '@elrondnetwork/erdnest/lib/utils/extensions/number.extensions';
import '@elrondnetwork/erdnest/lib/utils/extensions/string.extensions';
import { LoggingModule } from '@elrondnetwork/erdnest';
import { EndpointsServicesModule } from './endpoints/endpoints.services.module';
import { EndpointsControllersModule } from './endpoints/endpoints.controllers.module';
import { DynamicModuleUtils } from './utils/dynamic.module.utils';
import { NoSQLDatabaseModule } from './common/database/nosql.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    LoggingModule,
    EndpointsServicesModule,
    EndpointsControllersModule,
    NoSQLDatabaseModule,
    MongooseModule.forFeature([]),
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService(),
  ],
  exports: [
    EndpointsServicesModule,
  ],
})
export class PublicAppModule { }
