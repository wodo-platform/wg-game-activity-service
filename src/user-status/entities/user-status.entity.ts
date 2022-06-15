import { UserStatusDto } from "../dto/user-status.dto";


export class UserStatusEntity {
    userUid: string;
    gameUid: string;
    status: UserStatusDto;
}

