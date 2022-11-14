<template>
	<q-page class="flex flex-center leitor">
		<q-btn color="primary" icon="camera_alt" label="Ler Código de Barras"
			   class="full-width" size="lg" @click="iniciarLeitor()"
			   v-show="cameraStatus === 0"/>
		<div class="text-h6" v-if="code">Codigo: {{ code }}</div>
		<div id="scan" v-show="cameraStatus === 1"></div>
		<q-page-sticky position="bottom-right" :offset="[18, 18]">
			<q-btn  icon="cancel" color="negative" label="Fechar Leitor" v-show="cameraStatus === 1" @click="onStop" />
		</q-page-sticky>
	</q-page>
</template>

<style scoped lang="scss">
.leitor {
	width: 100%;
	height: 100%;

	#scan {
		width: 100%;
		height: 100%;
	}
}
</style>

<script>
import { defineComponent } from "vue";
import Quagga from 'quagga'; // ES6
// const Quagga = require('quagga').default;

export default defineComponent({
	name: "LeitorPage",

	data() {
		return {
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
			this.onStop()
		},
		onStop () {
			Quagga.stop()
			this.cameraStatus = 0
		}
	}
});
</script>
