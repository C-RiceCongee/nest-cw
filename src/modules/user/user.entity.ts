import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm"
import {ProfileEntity} from "../profile/profile.entity";
import {FilesEntity} from "../files/files.entity";

@Entity("users")
export class UserEntity {
    @PrimaryColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    // one 用户 -> one 信息
    @OneToOne(() => ProfileEntity)
    @JoinColumn()
    profile: ProfileEntity

    // one 用户-> many 个文件
    @OneToMany(() => FilesEntity, files => files.user)
    files: FilesEntity[]
}