import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiModelProperty({ required: true })
  public readonly email: string;
  @ApiModelProperty({ required: true })
  public readonly password: string;
  @ApiModelProperty({ required: true })
  public readonly name: string;
  @ApiModelPropertyOptional()
  public readonly location: string;
  @ApiModelPropertyOptional()
  public readonly avatar: string;
  @ApiModelPropertyOptional()
  public readonly phone: string;
  @ApiModelPropertyOptional()
  public readonly tokens: Text;
  @ApiModelPropertyOptional()
  public readonly resetPasswordToken: string;
  @ApiModelPropertyOptional()
  public readonly resetPasswordSentAt: Date;
  @ApiModelPropertyOptional()
  public readonly confirmationToken: string;
  @ApiModelPropertyOptional()
  public readonly confirmationSentAt: Date;
  @ApiModelPropertyOptional()
  public readonly confirmedAt: Date;
  @ApiModelPropertyOptional()
  public readonly currentSigninAt: Date;
  @ApiModelPropertyOptional()
  public readonly currentSigninIP: string;
  @ApiModelPropertyOptional()
  public readonly lastSigninAt: Date;
  @ApiModelPropertyOptional()
  public readonly lastSigninIP: string;
  @ApiModelPropertyOptional()
  public readonly signinCount: number;
  @ApiModelPropertyOptional()
  public readonly lockedAt: Date;
  @ApiModelPropertyOptional()
  public readonly disable: boolean;
  @ApiModelPropertyOptional()
  public readonly isAdmin: boolean;
  @ApiModelProperty()
  public readonly createdAt: Date;
  @ApiModelProperty()
  public readonly updatedAt: Date;
}
