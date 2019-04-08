import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { User } from 'entities/user.entity';

export class CreateMessageDto {
  @ApiModelProperty({ required: true })
  public readonly fromID: User;
  @ApiModelProperty({ required: true })
  public readonly toID: User;
  @ApiModelProperty({ required: true })
  public readonly content: string;
  @ApiModelPropertyOptional()
  public readonly status: boolean;
  @ApiModelProperty()
  public readonly createdAt: Date;
  @ApiModelProperty()
  public readonly updatedAt: Date;
}
