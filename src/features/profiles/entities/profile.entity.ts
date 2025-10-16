import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/features/users/entities/user.entity';

@Entity('profiles')
export class Profile {
    @ApiProperty({ example: 1, description: 'Unique identifier for the profile' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 1, description: 'User ID associated with this profile' })
    @Column()
    userId: number;

    @ApiProperty({ example: 'https://example.com/avatar.jpg', description: 'URL of the profile avatar' })
    @Column({ nullable: true })
    avatarUrl: string;

    @ApiProperty({ example: 'Short bio about the user', description: 'Bio of the profile' })
    @Column({ nullable: true })
    bio: string;

    @ApiProperty({ example: 'New York, USA', description: 'Location of the user' })
    @Column({ nullable: true })
    location: string;

    @ApiProperty({ example: 'https://example.com', description: 'Website of the user' })
    @Column({ nullable: true })
    website: string;

    @ApiProperty({ example: '2024-06-01T12:00:00.000Z', description: 'Date when the profile was created' })
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({ type: () => User, description: 'The user associated with this profile' })
    @OneToOne(() => User, user => user.profile)
    user: User;
}
