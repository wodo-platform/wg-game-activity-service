import { UserStatusDto } from "../dto/user-status.dto";
import { UserStatusEntity } from "../entities/user-status.entity";

export class USDtoMapper {

    public static toUserStatusDto (usEntity: UserStatusEntity): UserStatusDto {
        let dto:UserStatusDto = {description: usEntity.description,   
                                 statusCode: usEntity.status,
                                 userUid: usEntity.userUid,
                                 gameUid: usEntity.gameUid,
                                 createdAt: usEntity.createdAt,
                                 updatedAt: usEntity.updatedAt}          

        return dto;

    }

    public static toUserStatusDtos (userEntitys: UserStatusEntity[]): UserStatusDto[] {
        let dtos: UserStatusDto[] = new Array<UserStatusDto>()
        for (let index = 0; index < userEntitys.length; index++) {
            let glu:UserStatusEntity = userEntitys[index];
            dtos.push(this.toUserStatusDto(glu));
        }
        return dtos;

    }

}