// console.log("Hello satyam")

const basicPlanPriceElement = document.querySelector('.basic-plan-price')
const professionalPlanPriceElement = document.querySelector('.professional-plan-price')
const masterPlanPriceElement = document.querySelector('.master-plan-price')
const checkboxElement = document.getElementById('checkbox')




checkboxElement.addEventListener('click', function(){
    const basicPlanText = basicPlanPriceElement.textContent
const professionalPlanText = professionalPlanPriceElement.textContent
const masterPlanPriceText = masterPlanPriceElement.textContent
    console.log(basicPlanText, professionalPlanText, masterPlanPriceText)
    basicPlanPriceElement.textContent = basicPlanText === "$199.99" ? "$19.99": "$199.99"
    professionalPlanPriceElement.textContent = professionalPlanText === "$249.99" ? "$24.99": "$249.99"
    masterPlanPriceElement.textContent = masterPlanPriceText === "$399.99" ? "$39.99": "$399.99"
})
