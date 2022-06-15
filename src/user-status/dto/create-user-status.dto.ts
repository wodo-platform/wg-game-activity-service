import { UserStatusDto } from "./user-status.dto";

export class CreateUserStatusDto {
    userUid: string;
    gameUid: string;
    status: UserStatusDto;
}
