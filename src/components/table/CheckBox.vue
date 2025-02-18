<template>
  <input type="checkbox" />
</template>

<style scoped lang="scss">
input[type='checkbox'] {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  background-color: #d3d3de;
}

input[type='checkbox']:checked {
  background-color: #1b1b1f;
}

input[type='checkbox']:checked::after {
  content: '';
  position: absolute;
  left: 7px;
  top: 4px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
