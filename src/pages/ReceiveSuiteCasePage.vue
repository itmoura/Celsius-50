<template>
	<div class="q-ma-md marginBottomMenu">
		<q-page-container class="flex flex-center">
			<div class="receiveSuiteCasePage">
				<div class="tracking">
					<div class="logo">
						<h3>Cadê minha mala?</h3>
						<img
							alt="Quasar logo"
							src="~assets/logo.svg"
						/>
					</div>
					<div class="receiveSuiteCase">
						<form>
							<label for="name">Nome</label>
							<q-input outlined
									 v-model="receiveSuiteCase.name"
									 placeholder="Nome completo"
									 class="inputs"
									 dense/>

							<label for="cia">Cia Aérea</label>
							<select v-model="receiveSuiteCase.cia" class="selectInput">
								<option disabled value="">Selecione a Cia Aérea</option>
								<option>Azul</option>
								<option>Gol</option>
								<option>Latam</option>
								<option>Passaredo</option>
								<option>Tap</option>
								<option>Outra</option>
							</select>

							<label for="name">Número do Voo</label>
							<q-input outlined
									 v-model="receiveSuiteCase.plannerNumber"
									 placeholder="Número do Voo"
									 class="inputs"
									 dense/>

							<label for="name">Local de entrega</label>
							<q-input outlined
									 v-model="receiveSuiteCase.plannerNumber"
									 placeholder="Digite o endereço e todos os dados para melhor localização do local de entrega da sua malas"
									 class="inputs"
									 dense/>

							<div class="containerSearch">
								<q-btn class="btnSearch" unelevated @click="$router.push('/Success')" >
									ENVIAR
								</q-btn>
							</div>
<!--							<q-select-->
<!--								label="Scale"-->
<!--								transition-show="scale"-->
<!--								transition-hide="scale"-->
<!--								filled-->
<!--								v-model="receiveSuiteCase.cia"-->
<!--								:options="optionsSelect"-->
<!--								style="width: 250px"-->
<!--							/>-->
						</form>
					</div>
				</div>
			</div>
		</q-page-container>
	</div>
</template>

<style scoped lang="scss">
.receiveSuiteCasePage {
	width: 80vw;

	.tracking {
		text-align: center;

		.logo {
			margin-bottom: 2.5rem;

			h3 {
				color: $gray;
				margin: 0;
				font-size: 14px;
				font-weight: 600;
			}

			img {
				width: 60px;
				height: 60px;
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

			select {
				font-size: 13px;
				color: $gray;
				border-color: $gray;
				margin-bottom: 20px;
				border-radius: 8px;
				width: 100%;
				height: 48px;
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
	name: "ConfirmDataPage",

	data() {
		return {
			receiveSuiteCase: { name: "", cia: "", plannerNumber: "", destination: "" },
			model: "",
			optionsSelect: [
				'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
			]
		};
	},
});
</script>
