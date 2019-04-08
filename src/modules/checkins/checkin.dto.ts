import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { User } from 'entities/user.entity';

export class CreateCheckinDto {
  @ApiModelProperty({ required: true })
  public readonly user: User;
  @ApiModelProperty({ required: true })
  public readonly checkinAt: Date;
  @ApiModelPropertyOptional()
  public readonly location: string;
  @ApiModelPropertyOptional()
  public readonly checkoutAt: Date;
  @ApiModelProperty()
  public readonly createdAt: Date;
  @ApiModelProperty()
  public readonly updatedAt: Date;
}
