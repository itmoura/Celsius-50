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
						<p>
							Cadastro realizado!
						</p>
						<p>
							Assim que tivermos atualizações, você receberá notificações direto no aplicativo.
						</p>
						<p>
							Não esqueça de deixar as notificações habilitadas.
						</p>
					</div>
				</div>
			</div>
		</q-page-container>
	</div>
</template>

<style scoped lang="scss">
.receiveSuiteCasePage {
	width: 80vw;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;

	.tracking {
		text-align: center;

		.logo {
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

		.receiveSuiteCase {
			p {
				color: #000000;
				font-size: 16px;
				font-weight: 400;
				margin-bottom: 1rem;
			}
		}
	}
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "SuccessPage",
});
</script>
