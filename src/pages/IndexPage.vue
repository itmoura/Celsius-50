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
							<q-btn class="btnBarCode" unelevated  @click="iniciarLeitor()">
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

			<kinesis-container v-show="cameraStatus === 1" class="leitor">
				<kinesis-element type="rotate" :strength="20">
					<q-page class="flex flex-center " >
						<div id="scan" v-show="cameraStatus === 1"></div>
						<q-page-sticky position="bottom-right" :offset="[18, 18]">
							<q-btn  icon="cancel" color="negative" label="Fechar Leitor" v-show="cameraStatus === 1" @click="onStop" />
						</q-page-sticky>
					</q-page>
				</kinesis-element>
			</kinesis-container>

		</q-page-container>
	</div>
</template>

<style scoped lang="scss">
.leitor {
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 5;

	#scan {
		width: 100%;
		height: 100%;
	}
}
.homePage {
	width: 80vw;
	height: 100vh;

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
import Quagga from 'quagga'; // ES6
// const Quagga = require('quagga').default;
import VueKinesis from 'vue-kinesis'

export default defineComponent({
	name: "IndexPage",

	data() {
		return {
			dispatch: { number: "", lastname: "" },
			model: "",
			code: '',
			dialog: false,
			cameraStatus: 0
		};
	},
	methods: {
		iniciarLeitor () {
			this.cameraStatus = 1
			Quagga.init({
				inputStream: {
					name: 'Live',
					type: 'LiveStream',
					constraints: {
						width: window.innerWidth,
						height: window.innerHeight
					},
					target: document.querySelector('#scan')
				},
				frequency: 10,
				decoder: {
					readers: [
						'ean_reader'
					],
					multiple: false
				},
				numOfWorkers: navigator.hardwareConcurrency
				// locate: false
			}, (err) => {
				if (err) {
					console.log(err)
					return
				}
				console.log('Initialization finished. Ready to start')
				Quagga.start()
				Quagga.onDetected(this.onDetected)
			})
		},
		onDetected (data) {
			this.code = data.codeResult.code
			this.cameraStatus = 0
			this.dispatch.number = data.codeResult.code
			this.onStop()
		},
		onStop () {
			Quagga.stop()
			this.cameraStatus = 0
		}
	}
});
</script>
