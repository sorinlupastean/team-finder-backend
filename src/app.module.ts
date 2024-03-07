import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/users/users.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { SkillsModule } from './modules/skills/skills.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, OrganizationsModule, SkillsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
