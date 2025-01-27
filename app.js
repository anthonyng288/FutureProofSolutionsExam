import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import MethodDetails from "./components/MethodDetails.js";
import MethodSelector from "./components/MethodSelector.js";

const app = createApp({
  components: {
    MethodSelector,
    MethodDetails,
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

        <div class="step-bar">
          <div class="step selected-step">
            <span>1. Method</span>
            <div class="method-header">
              <img v-if="selectedMethod?.image" :src="selectedMethod.image" :alt="selectedMethod.name" class="step-image" />
              <p class="selected-method-name">{{selectedMethod?.name}}</p>
            </div>
            
          </div>
          <div class="step">
            <span>2. Crossings</span>
            <p>SVC ROAD ENV</p>
          </div>
          <div class="step">
            <span>3. Sleeve & Pipe Material</span>
            <p>No Sleeve &middot; Jacking &middot; Single Concrete</p>
          </div>
          <div class="step">
            <span>4. Select the Package</span>
            <p>⭐ ⭐ Recommended</p>
          </div>
        </div>


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
