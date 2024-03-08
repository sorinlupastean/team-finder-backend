import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Organization } from '../organizations/organization.entity';
import { Skill } from '../skills/skill.entity';

export enum UserRole {
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
  PROJECT_MANAGER = 'project-manager',
  DEPARTMENT_MANAGER = 'department-manager',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.EMPLOYEE,
  })
  role: UserRole;

  @ManyToOne(() => Organization, (organization) => organization.users)
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;

  @ManyToMany(() => Skill, (skill) => skill.users)
  @JoinTable({
    name: 'user_skills',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'skill_id', referencedColumnName: 'id' },
  })
  skills: Skill[];
}
