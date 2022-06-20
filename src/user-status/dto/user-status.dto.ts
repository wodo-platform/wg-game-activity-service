import { UserStatusEnum } from "../enums/user-status-enum";

export class UserStatusDto {
    userUid: string;
    gameUid: string;
    statusCode : UserStatusEnum;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }
