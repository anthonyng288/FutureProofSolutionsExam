export default {
  name: "MethodDetails",
  props: {
    method: {
      type: Object,
      required: true,
    },
  },
  template: `
    <div class="method-details">
      <div class="image-container">
      <img 
          :src="method.image" 
          :alt="method.name" 
          class="method-image" 
          v-if="method.image" 
        />
        
        <p v-else>No image available</p>
      </div>
        

        <div class="method-texts"> 
          <h3>{{ method.name }}</h3>
          <div v-html="method.description">
        </div>
        

        
     
    </div>
  `,
};
