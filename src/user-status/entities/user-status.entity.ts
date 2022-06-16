import { Column, Model, NotNull, PrimaryKey, Table } from 'sequelize-typescript';
import { STRING} from 'sequelize/types';
import { UserStatusDto } from '../dto/user-status.dto';

/** 
 * This entity db mapping for user status object. 
*/
@Table({ tableName: "USER_STATUS", version: true, timestamps: true, paranoid:false, omitNull: true})
export class UserStatusEntity extends Model {

    @PrimaryKey
    @Column({allowNull:false})
    userUid!: string;

    @Column({allowNull:false})
    gameUid!: string;

    @Column({allowNull:false})
    status!: number;

    @Column({allowNull:false})
    description!: string;

}