<template>
	<div class="q-ma-md marginBottomMenu">
		<q-page-container class="flex flex-center">
			<div class="homePage ">
				<div class="tracking">
					<div class="logo">
						<h3>Cadê minha mala?</h3>
						<img
							alt="Quasar logo"
							src="~assets/logo.svg"
						/>
					</div>
					<form>
						<label for="tracking">Número de registro</label>
						<q-input outlined
								 v-model="dispatch.number"
								 placeholder="Número do comprovante de despacho da mala"
								 class="inputs"
								 dense/>
						<div class="lastName">
							<label for="lastName">Sobrenome</label>
							<q-input outlined v-model="dispatch.lastname" placeholder="Sobrenome cadastrado na passagem" class="inputs" dense/>
						</div>

						<div class="orContent">
							<h2>ou ative a câmera para ler o código de barras</h2>
						</div>

						<div class="camera">
							<q-btn class="btnBarCode" unelevated >
								<img src="~/assets/home/barCode.svg" alt="Código de barras">
								Leitor de código de barras
							</q-btn>
						</div>

						<div class="containerSearch">
							<q-btn class="btnSearch" unelevated @click="$router.push('/ConfirmData')" >
								ACHAR MINHA MALA
							</q-btn>
						</div>
					</form>
				</div>
			</div>
		</q-page-container>
	</div>
</template>

<style scoped lang="scss">
.homePage {
	width: 80vw;


	.tracking {
		text-align: center;

		.logo {
			margin-top: 1.5rem;
			margin-bottom: 2.5rem;

			h3 {
				color: $gray;
				margin: 0;
				font-size: 14px;
				font-weight: 600;
			}

			img {
				width: auto;
			}
		}

		form {
			margin-top: 20px;

			label {
				display: flex;
				justify-content: flex-start;
				color: black;
				margin-bottom: 8px;

				img {
					margin-left: 24px;
					width: 22px;
				}
			}

			.inputs {
				font-size: 13px;
				color: $gray;
				border-color: $gray;
				margin-bottom: 20px;
				border-radius: 8px;
			}

			.orContent {
				max-width: 70%;
				margin: 0 auto;
				margin-bottom: 15px;

				h2 {
					color: #000000;
					font-size: 16px;
					font-weight: 400;
					margin-top: 2rem;
					line-height: normal;
				}
			}

			.camera {
				.btnBarCode {
					width: 100%;
					height: 48px;
					background-color: $gray-2;
					border-radius: 8px;
					font-size: 14px;
					font-weight: 400;
					line-height: 15px;

					img {
						margin-right: 7px;
					}
				}
			}

			.containerSearch {
				margin-top: 72px;

				.btnSearch {
					width: 100%;
					height: 48px;
					background-color: $secondary;
					border-radius: 8px;
					font-size: 14px;
					font-weight: 600;
					color: $primary;
				}
			}
		}
	}
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "IndexPage",

	data() {
		return {
			dispatch: { number: "", lastname: "" },
			model: "",
		};
	}
});
</script>
