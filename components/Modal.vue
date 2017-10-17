<!-- template for the modal component -->
<template>

    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            </slot>
            <button class="modal-default-button" @click='closeModal'>
              Close
            </button>
          </div>

          <div class="modal-body">
            <slot name="body">

            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>

</template>

<script >
  export default{
    name: 'Modal',
    mounted(){
      console.log('modal mounted')
    },
    methods: {
      closeModal(){
        this.$emit('close');
      }
    }
  }
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50vw;
  min-width: 300px;
  max-width: 1000px;
  max-height: 100%;
  overflow: auto;
  margin: 0px auto;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  align-items: baseline;
}

.modal-body {
  margin: 10px 0;
}

.modal-default-button {
  margin-left: auto;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>