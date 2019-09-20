<template>
    <transition name="modal">
        <div class="modal-mask modal" :class="sizeClass">
            <div class="modal-wrapper modal-dialog">
                <div class="modal-container modal-content modal-form">

                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            default footer
                            <button class="modal-default-button" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            sizeClass: String  //задает класс, управляющий  размером модального окна()
        }
    }
</script>