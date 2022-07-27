import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { NativeAuth, NativeAuthGuard } from "@elrondnetwork/erdnest";

@Controller()
@ApiTags('auth')
export class AuthController {
	@Get("/auth")
	@UseGuards(NativeAuthGuard)
	@ApiResponse({
		status: 200,
		description: 'Authorizes the user and returns the encoded address',
	})
	async authorize(
		@NativeAuth() auth: unknown
	): Promise<unknown> {
		return auth;
	}
}