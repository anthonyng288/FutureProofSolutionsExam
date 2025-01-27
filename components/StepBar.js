export default {
  name: "StepBar",
  props: {
    selectedMethod: Object,
  },
  template: `
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
    </div>`,
};
