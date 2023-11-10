<template>
  <div class="loader">
    <div class="loader-spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  

  &-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid transparent;
    border-top: 4px solid var(--black);
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
