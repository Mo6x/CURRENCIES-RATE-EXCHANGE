<template>
<div id="app" class="container">
	<div class="row main-container mx-auto">
		<div class="row title-container no-gutters">
			<div class="col-10">
				<h1 class="title">Currency Converter</h1>
			</div>
			<div class="col-2">

				<select class="select-country" @change="updateInputs" v-model="selected">
					<option v-for="(country, index) in countries" :key="index">{{country.name}}</option>
				</select>
			</div>
		</div>
		
		<div class="row">
			<!-- input field 1 -->
			<div class="col">
				<img class="country-flag" :src="imageSrc + 'flag-australia.png'"/>
				<h2 class="country-name">Australia</h2>
				<p>Rate: 1 AUD</p>
				<input type="number" id="currencyInput" class="currency-input" v-model="calc1" @keyup="calcInput_1(calc1, countryRate)" >
			</div>
			<!-- input field 2 -->
			<div class="col">
				<!-- <div v-for="(country, index) in countries" :key="index"> -->
					<div>
						<img class="country-flag" :src="imageSrc + select_country.image"/>
						<h2 class="country-name">{{select_country.name}}</h2>
						<p class="">Rate: {{select_country.rate}} AUD</p>
						<input class="currency-input" v-model="calc2" @keyup="calcInput_2(calc2, country1Rate, countryRate)"><span>{{select_country.money}}</span>
          </div>
				<!-- </div> -->
			</div>
		</div>
	</div>
</div>
</template>


<script>
import { ref,onMounted, computed } from 'vue'

export default {
  setup() {
    const selected = ref("Brazil")
    const country1Rate = ref(1)
    const countryRate = ref(2.5)
    const calc1 = ref("")
    const calc2 = ref("")
    const imageSrc = ref("https://s3-us-west-2.amazonaws.com/s.cdpn.io/286148/")
    const countries = [
      {
        name: "Brazil",
        money: "Reais",
        rate: 2.5,
        image: "flag-brazil.png"
      },
      {
        name: "UK",
        money: "Pounds",
        rate: 0.59,
        image: "flag-uk.png"
      },
      {
        name: "Germany",
        money: "Euro",
        rate: 0.67,
        image: "flag-germany.png"
      },
      {
        name: "USA",
        money: "USD",
        rate: 0.79,
        image: "flag-usa.png"
      },
      {
        name: "Canada",
        money: "CAD",
        rate: 0.94,
        image: "flag-canada.png"
      },
      {
        name: "New Zealand",
        money: "NZD",
        rate: 1.09,
        image: "flag-new-zealand.png"
      },
      {
        name: "Japanese",
        money: "YEN",
        rate: 88.51,
        image: "flag-japan.png"
      }
    ]
onMounted(() => {
  updateInputs()
})
    

     const select_country = computed(() => updateInputs());

    const calcInput_1 = (value, rate) => {
     
      calc2.value = value * rate;
    }
    const calcInput_2 = (value, rate, rate2) => {
      calc1.value = value * rate /  rate2
    }

    const updateInputs = () => {
      for (let i = 0; i < countries.length; i++) {
        if (selected.value == countries[i].name) {
           calc1.value =""
    calc2.value =""
          countryRate.value = countries[i].rate;
          return  countries[i];
        }
      }
    }
    
    return {
    selected,
    countryRate,
      country1Rate,
      select_country,
    calc1,
    calc2,
    imageSrc,
      countries,
      calcInput_1,
      calcInput_2,
    updateInputs
    }
  }
}

</script>

<style scoped>


@import url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/286148/Montserrat-Regular.ttf);


body{
	background: #93acd8;
	color: #000;
  font-family: 'Montserrat', sans-serif;
}

.row{
	width: 100%;
}
.title-container{
	margin-bottom: 25px;
	margin-left: 0;
	text-align: center;
	
}

.title-container .title{
		font-family: 'Montserrat', sans-serif;
		margin-right: 15px;
		text-align: left;
		color:#1d2f50;
	}

.select-country{
	width: 100%;
	height: 100%;
	background: white;
}


h2{
	color: #1d2f50;
}

.country-name{
	display: inline-block;
}
.country-flag{
	display: inline-block;
	margin-right: 10px;
	margin-bottom: 12px;
}

.main-container{
	width: 800px;
	position: absolute;
	border-radius: 10px;
	padding: 50px;
	top: 40%;
	left: 50%;
	transform: translate(-50%,-40%);
	background: white;
	box-shadow: 0 12px 10px -6px #1d2f50;
}

.currency-input{
	width: 70%;
	margin-right: 5px;
	font-size: 20px;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #CCC;
	padding-left: 10px;
}
</style>




