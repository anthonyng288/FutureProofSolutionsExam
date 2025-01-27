import {
  onMounted,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { fetchMethods } from "../services/methodsAPI.js";

export default {
  name: "MethodSelector",
  template: `
    <div class="method">
      <h2>Select a Method: </h2>
      <div class="method-selector">    
        <div v-if="loading" class="loading">Loading methods...</div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-for="method in methods" :key="method.id" class="method-item">
          <button 
            :class="{ selected: selectedMethod?.id === method.id }"
            @click="selectMethod(method)"
          >
            {{ method.abbreviation }}
          </button>
        </div>
      </div>
    </div>
  `,
  setup(props, { emit }) {
    const methods = ref([]);
    const selectedMethod = ref(null);
    const loading = ref(false);
    const error = ref("");

    //When component is mounted, fetch methods
    onMounted(async () => {
      loading.value = true;
      try {
        methods.value = await fetchMethods();

        //Set default selected method
        if (methods.value.length > 0) {
          selectedMethod.value = methods.value[0];
          emit("method-selected", selectedMethod.value);
        }
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    });

    //Select a method
    const selectMethod = (method) => {
      selectedMethod.value = method;
      emit("method-selected", method);
    };

    return {
      methods,
      selectedMethod,
      loading,
      error,
      selectMethod,
    };
  },
};
