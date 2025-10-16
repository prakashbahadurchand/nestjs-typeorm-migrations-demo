import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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

    @ApiProperty({ example: '+1234567890', description: 'Phone number of the user' })
    @Column({ unique: true })
    phone: string;

    @ApiProperty({ example: '2024-06-01T12:00:00.000Z', description: 'Date when the user was created' })
    @CreateDateColumn()
    createdAt: Date;
}
