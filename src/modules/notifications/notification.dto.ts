import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { User } from 'entities/user.entity';

export class CreateNotificationDto {
  @ApiModelProperty({ required: true })
  public readonly user: User;
  @ApiModelProperty({ required: true })
  public readonly content: string;
  @ApiModelPropertyOptional()
  public readonly status: boolean;
  @ApiModelProperty()
  public readonly createdAt: Date;
  @ApiModelProperty()
  public readonly updatedAt: Date;
}
