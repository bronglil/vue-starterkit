<template>
    <div :class="['typography', variant]">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Typography',
    props: {
      variant: {
        type: String,
        default: 'body'
      }
    }
  };
  </script>
  
  <style scoped>
  .body {
    font-size: 16px;
    line-height: 1.5;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  
  .subtitle {
    font-size: 18px;
    font-weight: bold;
    color: #888;
  }
  
  /* Add more variant styles as needed */
  </style>
  