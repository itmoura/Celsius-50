<template>
	<div class="q-ma-md marginBottomMenu">
		<q-page class="flex flex-center">
			<div class="confirmDataPage">
				<div class="tracking">
					<div class="logo">
						<h3>Cadê minha mala?</h3>
						<img
							alt="Quasar logo"
							src="~assets/logo.svg"
						/>
					</div>
					<div class="dispatch">
						<div class="dispatchNumber">
							<p>Número de registro</p>
							<h3>{{ dispatch.number }}</h3>
						</div>

						<div class="dispatchLastName">
							<p>Sobrenome</p>
							<h3>{{ dispatch.lastname }}</h3>
						</div>

						<q-card class="cardTicket" flat bordered>
							<q-card-section horizontal>
								<q-card-actions class="cardDetails">
									<div class="cardDetails__title">
										<img src="~/assets/confirmData/airplaneInFlight.svg" alt="Avião em vôo"/>
										<p>GOL GL8890</p>
									</div>
									<div class="cardDetails__info">
										<img src="~/assets/confirmData/clockClockwise.svg" alt="Avião"/>
										<p>13:42 - 14:38</p>
									</div>
									<div class="cardDetails__info">
										<img src="~/assets/confirmData/clockClockwise.svg" alt="Avião"/>
										<p>SDU - GRU</p>
									</div>
									<div class="cardDetails__info">
										<img src="~/assets/confirmData/clockClockwise.svg" alt="Avião"/>
										<p>14/11/2022</p>
									</div>
								</q-card-actions>

								<q-card-actions vertical class="justify-around q-px-md">
									<img src="~/assets/confirmData/barCode.svg">
								</q-card-actions>
							</q-card-section>
						</q-card>

						<div class="containerSearch">
							<q-btn class="btnSearch" unelevated @click="$router.push('/ReceiveSuiteCase/2')" >
								RECEBER MINHA MALA
							</q-btn>
							<q-btn class="btnSafe btnSearch" unelevated >
								ACIONAR SEGURO
							</q-btn>
						</div>
					</div>
				</div>
			</div>
		</q-page>
	</div>
</template>

<style scoped lang="scss">
.confirmDataPage {
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

		div.dispatch {
			margin-top: 20px;

			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 24px;
				margin-bottom: 8px;
			}

			h3 {
				font-size: 36px;
				font-weight: 700;
				color: #000000;
				margin: 0;
				text-transform: uppercase;
			}

			.dispatchLastName {
				margin-top: 30px;
			}

			.cardTicket {
				margin-top: 60px;
				width: 100%;
				border: 1px solid #000000;

				.cardDetails {
					justify-content: space-between;
					align-items: center;
					margin-left: 1.25rem;
					border-right: 2px dashed #000000;

					.cardDetails__title {
						display: flex;
						margin-bottom: 18px;

						p {
							font-size: 24px;
							font-weight: 600;
							margin-left: 10px;
							margin-bottom: 0;
						}
					}

					.cardDetails__info {
						display: flex;
						margin-bottom: 4px;
						margin-left: 10px;

						p {
							font-size: 16px;
							font-weight: 400;
							margin-left: 10px;
							margin-bottom: 0;
						}
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

				.btnSafe {
					margin-top: 20px;
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
			dispatch: { number: "RFG8890", lastname: "Silva" },
			model: "",
		};
	},
});
</script>
