import { DataTypes } from "sequelize";
import {
  Table,
  Model,
  Column,
  DataType,
  Sequelize,
} from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "transactions",
})
class Transactions extends Model {
  @Column({
    type: DataType.STRING(5),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    unique: true,
  })
  ID!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  receiver!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sender!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  })
  confirmed!: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount!: number;
}

export { Transactions };
