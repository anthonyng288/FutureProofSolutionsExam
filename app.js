import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import MethodDetails from "./components/MethodDetails.js";
import MethodSelector from "./components/MethodSelector.js";
import StepBar from "./components/StepBar.js";

const app = createApp({
  components: {
    MethodSelector,
    MethodDetails,
    StepBar,
  },
  template: `
      <div class="app-container">
        <h1 class="project-heading">TRENCHLESS PROJECT</h1>

        <div class="trenchless-estimate-container">
            <h3 class="project-name">TRENCHLESS . 01</h3>
            <div class="total-container">
                <h3 class="total-amount">Total $11,500.00</h3>
                <p class="currency">AUD (inc. GST)</p>
            </div>
        </div>

        <step-bar :selectedMethod="selectedMethod"></step-bar>


        <div class="methods-container">
          <method-selector @method-selected="handleMethodSelected"></method-selector>
          <method-details v-if="selectedMethod" :method="selectedMethod"></method-details>
          <div class="global-error" v-if="globalError">{{ globalError }}</div>
        </div>
      
      </div>
  
    `,
  setup() {
    const selectedMethod = ref(null);
    const globalError = ref("");

    const handleMethodSelected = (method) => {
      selectedMethod.value = method;
    };

    return {
      selectedMethod,
      globalError,
      handleMethodSelected,
    };
  },
});

app.mount("#app");
