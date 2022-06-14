import { UserStatus } from "./user-status";

export class CreateUserStatusDto {
    userUid: string;
    gameUid: string;
    status: UserStatus;
}
