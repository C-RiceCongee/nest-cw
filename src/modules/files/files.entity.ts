import {Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../user/user.entity";

@Entity("files")
export class FilesEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    file_path: string

    // many 文件 -> one 用户
    @ManyToOne(() => UserEntity, user => user.files)
    user: UserEntity
}