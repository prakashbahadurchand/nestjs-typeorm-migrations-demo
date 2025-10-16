import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Profile } from 'src/features/profiles/entities/profile.entity';

@Entity('users')
export class User {
    @ApiProperty({ example: 1, description: 'Unique identifier for the user' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'John Doe', description: 'Name of the user' })
    @Column()
    name: string;

    @ApiProperty({ example: 'john@example.com', description: 'Email address of the user' })
    @Column({ unique: true })
    email: string;

    @ApiProperty({ example: '+1234567890', description: 'Mobile number of the user' })
    @Column({ unique: true })
    mobile: string;

    @ApiProperty({ example: 'A short bio about the user', description: 'Bio of the user' })
    @Column()
    bio: string;

    @ApiProperty({ example: 'An introduction to the user', description: 'Introduction of the user' })
    @Column()
    intro: string;

    @ApiProperty({ example: '2024-06-01T12:00:00.000Z', description: 'Date when the user was created' })
    @CreateDateColumn()
    createdAt: Date;

    // profile:
    @ApiProperty({ type: () => Profile, description: 'The profile associated with this user' })
    @OneToOne(() => Profile, profile => profile.user, { cascade: true, eager: true, nullable: true })
    profile: Profile;
}
